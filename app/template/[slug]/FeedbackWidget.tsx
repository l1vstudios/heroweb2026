"use client";

import { useEffect, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  LogIn,
  MessageCircle,
  Send,
  Star,
} from "lucide-react";

type AuthorReply = {
  comment: string;
  createdAt: string;
};

type Feedback = {
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
  avatarInitial: string;
  avatarColor: string;
  authorReply?: AuthorReply;
};

const BAD_WORDS = [
  // Kata kasar / menghina
  "anjing",
  "asu",
  "babi",
  "bangsat",
  "bego",
  "bodoh",
  "goblok",
  "idiot",
  "kampret",
  "kontol",
  "memek",
  "ngentot",
  "pantek",
  "sialan",
  "tolol",
  "dungu",
  "brengsek",
  "pecundang",
  "hina",
  "rendahan",
  "kampungan",
  "norak",
  "fuck",
  "shit",
  "bitch",
  "asshole",

  // Kata negatif yang tidak konstruktif
  "jelek",
  "buruk",
  "parah",
  "sampah",
  "ampas",
  "busuk",
  "payah",
  "ngaco",
  "gagal",
  "rusak",
  "cacat",
  "menipu",
  "penipu",
  "bohong",
  "boongan",
  "murahan",
  "menjijikkan",
  "menjijikan",
];

const BAD_PHRASES = [
  "tidak bagus",
  "ga bagus",
  "gak bagus",
  "nggak bagus",
  "tidak baik",
  "kurang bagus",
  "kurang baik",
  "tidak rekomendasi",
  "ga rekomendasi",
  "gak rekomendasi",
  "tidak berguna",
  "buang waktu",
];

const DANGEROUS_PATTERN =
  /<[^>]*>|javascript:|data:text\/html|onerror\s*=|onload\s*=|onclick\s*=|eval\s*\(|script\s*:/i;

const AVATAR_COLORS = [
  "bg-[#12378C]",
  "bg-orange-500",
  "bg-emerald-600",
  "bg-sky-600",
  "bg-purple-600",
  "bg-rose-600",
];

function normalizeForFilter(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[4@]/g, "a")
    .replace(/[1!|]/g, "i")
    .replace(/[3]/g, "e")
    .replace(/[0]/g, "o")
    .replace(/[5$]/g, "s")
    .replace(/[7]/g, "t")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function containsBadWord(value: string) {
  const normalized = normalizeForFilter(value);
  const hasBadWord = BAD_WORDS.some((word) => {
    const pattern = new RegExp(`(^|\\s)${word}($|\\s)`, "i");
    return pattern.test(normalized);
  });
  const hasBadPhrase = BAD_PHRASES.some((phrase) =>
    normalized.includes(phrase),
  );

  return hasBadWord || hasBadPhrase;
}

function sanitizeComment(value: string) {
  return value
    .normalize("NFKC")
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 180);
}

function sanitizeName(value: string) {
  return value
    .normalize("NFKC")
    .replace(/[<>]/g, "")
    .replace(/[^a-zA-Z0-9\s.'-]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 32);
}

function formatFeedbackTime(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Baru saja";

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function getAvatar(name: string, createdAt: string) {
  const source = `${name}-${createdAt}`;
  const total = Array.from(source).reduce(
    (sum, char) => sum + char.charCodeAt(0),
    0,
  );
  const firstLetter = name.match(/[a-zA-Z0-9]/)?.[0]?.toUpperCase() || "U";

  return {
    avatarInitial: firstLetter,
    avatarColor: AVATAR_COLORS[total % AVATAR_COLORS.length],
  };
}

function readStoredFeedbacks(storageKey: string) {
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) return [];

    const parsed = JSON.parse(saved) as Partial<Feedback>[];
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map(normalizeFeedback)
      .filter((item): item is Feedback => item !== null)
      .slice(0, 5);
  } catch {
    return [];
  }
}

function normalizeFeedback(item: Partial<Feedback>): Feedback | null {
  if (
    typeof item.rating !== "number" ||
    typeof item.comment !== "string" ||
    typeof item.createdAt !== "string"
  ) {
    return null;
  }

  const name = sanitizeName(item.name || "Pengunjung");
  const fallbackAvatar = getAvatar(name, item.createdAt);
  const authorReply =
    item.authorReply &&
    typeof item.authorReply.comment === "string" &&
    typeof item.authorReply.createdAt === "string"
      ? {
          comment: sanitizeComment(item.authorReply.comment),
          createdAt: item.authorReply.createdAt,
        }
      : undefined;

  return {
    name,
    rating: Math.min(5, Math.max(1, item.rating)),
    comment: sanitizeComment(item.comment),
    createdAt: item.createdAt,
    avatarInitial: item.avatarInitial || fallbackAvatar.avatarInitial,
    avatarColor: item.avatarColor || fallbackAvatar.avatarColor,
    authorReply,
  };
}

export default function FeedbackWidget({ slug }: { slug: string }) {
  const storageKey = `template-feedback-${slug}`;
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [hasCheckedAuth, setHasCheckedAuth] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAllFeedbacks, setShowAllFeedbacks] = useState(false);
  const [replyFeedbackId, setReplyFeedbackId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [replyError, setReplyError] = useState("");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setFeedbacks(readStoredFeedbacks(storageKey));
      setIsLoggedIn(window.localStorage.getItem("hero-auth") === "true");
      setHasCheckedAuth(true);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [storageKey]);

  const averageRating = feedbacks.length
    ? feedbacks.reduce((total, item) => total + item.rating, 0) /
      feedbacks.length
    : 0;
  const visibleFeedbacks = showAllFeedbacks ? feedbacks : feedbacks.slice(0, 3);

  const validate = () => {
    const cleanedName = sanitizeName(name);
    const cleaned = sanitizeComment(comment);

    if (!cleanedName) {
      return "Nama wajib diisi.";
    }

    if (name !== cleanedName) {
      return "Nama hanya boleh berisi huruf, angka, spasi, titik, petik, dan strip.";
    }

    if (cleanedName.length < 2) {
      return "Nama minimal 2 karakter.";
    }

    if (containsBadWord(cleanedName)) {
      return "Nama mengandung kata yang tidak pantas.";
    }

    if (rating < 1 || rating > 5) {
      return "Pilih rating bintang terlebih dahulu.";
    }

    if (comment !== cleaned) {
      return "Komentar mengandung karakter yang tidak diizinkan. Rapikan komentar lalu coba lagi.";
    }

    if (cleaned.length < 10) {
      return "Komentar minimal 10 karakter.";
    }

    if (cleaned.length > 180) {
      return "Komentar maksimal 180 karakter.";
    }

    if (DANGEROUS_PATTERN.test(comment)) {
      return "Komentar mengandung kode atau pola berbahaya.";
    }

    if (containsBadWord(cleaned)) {
      return "Komentar mengandung kata kasar, menghina, atau negatif. Silakan gunakan bahasa yang lebih sopan dan konstruktif.";
    }

    return "";
  };

  const validateReply = (value: string) => {
    const cleaned = sanitizeComment(value);

    if (value !== cleaned) {
      return "Balasan mengandung karakter yang tidak diizinkan.";
    }

    if (cleaned.length < 5) {
      return "Balasan minimal 5 karakter.";
    }

    if (cleaned.length > 180) {
      return "Balasan maksimal 180 karakter.";
    }

    if (DANGEROUS_PATTERN.test(value)) {
      return "Balasan mengandung kode atau pola berbahaya.";
    }

    if (containsBadWord(cleaned)) {
      return "Balasan mengandung kata kasar, menghina, atau negatif.";
    }

    return "";
  };

  const persistFeedbacks = (nextFeedbacks: Feedback[]) => {
    setFeedbacks(nextFeedbacks);
    window.localStorage.setItem(storageKey, JSON.stringify(nextFeedbacks));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess(false);

    if (!isLoggedIn) {
      setError("Anda harus login terlebih dahulu untuk mengirim feedback.");
      return;
    }

    const validationMessage = validate();
    if (validationMessage) {
      setError(validationMessage);
      return;
    }

    const cleanedName = sanitizeName(name);
    const cleaned = sanitizeComment(comment);
    const createdAt = new Date().toISOString();
    const avatar = getAvatar(cleanedName, createdAt);
    const nextFeedbacks = [
      {
        name: cleanedName,
        rating,
        comment: cleaned,
        createdAt,
        ...avatar,
      },
      ...feedbacks,
    ].slice(0, 5);

    persistFeedbacks(nextFeedbacks);
    setName("");
    setRating(0);
    setComment("");
    setError("");
    setSuccess(true);
    setShowAllFeedbacks(false);
    setTimeout(() => setSuccess(false), 2500);
  };

  const openReplyForm = (feedbackId: string, currentReply?: AuthorReply) => {
    if (!isLoggedIn) {
      setReplyError(
        "Anda harus login terlebih dahulu untuk membalas feedback.",
      );
      return;
    }

    setReplyFeedbackId(feedbackId);
    setReplyText(currentReply?.comment || "");
    setReplyError("");
  };

  const handleReplySubmit = (feedbackId: string) => {
    const validationMessage = validateReply(replyText);
    if (validationMessage) {
      setReplyError(validationMessage);
      return;
    }

    const cleaned = sanitizeComment(replyText);
    const nextFeedbacks = feedbacks.map((item) =>
      item.createdAt === feedbackId
        ? {
            ...item,
            authorReply: {
              comment: cleaned,
              createdAt: new Date().toISOString(),
            },
          }
        : item,
    );

    persistFeedbacks(nextFeedbacks);
    setReplyFeedbackId(null);
    setReplyText("");
    setReplyError("");
  };

  return (
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-4">
      <div className="bg-gray-50 border border-gray-100 rounded-[5px] p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-white p-2 rounded-[5px] shadow-sm">
            <Star size={16} className="text-orange-500 fill-orange-500" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Rating
            </p>
            <p className="text-sm font-bold text-gray-900">
              {averageRating ? averageRating.toFixed(1) : "Belum ada"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={18}
              className={
                star <= Math.round(averageRating)
                  ? "text-orange-500 fill-orange-500"
                  : "text-gray-300"
              }
            />
          ))}
        </div>
        <p className="mt-2 text-xs text-gray-500">
          {feedbacks.length} feedback tersimpan di browser ini.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 border border-gray-100 rounded-[5px] p-4"
      >
        <div className="flex items-center gap-2 mb-3">
          <MessageCircle size={16} className="text-[#12378C]" />
          <h3 className="font-bold text-gray-900 text-sm">Feedback Template</h3>
        </div>

        {!hasCheckedAuth ? (
          <div className="rounded-[5px] border border-gray-200 bg-white px-3 py-3 text-sm text-gray-500">
            Memeriksa status login...
          </div>
        ) : !isLoggedIn ? (
          <div className="rounded-[5px] border border-orange-200 bg-orange-50 px-4 py-4">
            <p className="text-sm font-semibold text-gray-800">
              Login diperlukan untuk mengirim feedback.
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Silakan login terlebih dahulu agar bisa memberi rating dan
              komentar.
            </p>
            <a
              href="/login"
              className="mt-3 inline-flex items-center gap-2 rounded-[5px] bg-[#12378C] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0f2d7a]"
            >
              <LogIn size={14} />
              Login untuk Feedback
            </a>
          </div>
        ) : (
          <>
            <input
              value={name}
              onChange={(event) => {
                setName(event.target.value.slice(0, 40));
                setError("");
              }}
              placeholder="Nama Anda"
              className="mb-3 w-full rounded-[5px] border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-[#12378C] focus:ring-2 focus:ring-[#12378C]/10"
            />

            <div
              className="flex items-center gap-1 mb-3"
              aria-label="Pilih rating"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => {
                    setRating(star);
                    setError("");
                  }}
                  className="p-1 transition hover:scale-110"
                  aria-label={`Beri rating ${star} bintang`}
                >
                  <Star
                    size={22}
                    className={
                      star <= rating
                        ? "text-orange-500 fill-orange-500"
                        : "text-gray-300 hover:text-orange-400"
                    }
                  />
                </button>
              ))}
            </div>

            <textarea
              value={comment}
              onChange={(event) => {
                setComment(event.target.value.slice(0, 220));
                setError("");
              }}
              placeholder="Tulis feedback dengan bahasa yang sopan..."
              className="w-full min-h-24 resize-none rounded-[5px] border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-[#12378C] focus:ring-2 focus:ring-[#12378C]/10"
            />
            <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="text-xs text-gray-400">
                Maks. 180 karakter. HTML, script, dan kata buruk akan ditolak.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[#12378C] hover:bg-[#0f2d7a] text-white px-4 py-2 rounded-[5px] font-bold text-sm transition shadow-md"
              >
                <Send size={14} />
                Kirim
              </button>
            </div>

            {error && (
              <div className="mt-3 flex items-start gap-2 rounded-[5px] border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                <AlertCircle size={16} className="mt-0.5 shrink-0" />
                <p>{error}</p>
              </div>
            )}

            {success && (
              <div className="mt-3 flex items-start gap-2 rounded-[5px] border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                <p>Feedback berhasil ditambahkan.</p>
              </div>
            )}
          </>
        )}

        {feedbacks.length > 0 && (
          <div className="mt-4 space-y-2">
            {visibleFeedbacks.map((item, index) => (
              <div
                key={`${item.createdAt}-${index}`}
                className="flex items-start gap-3 rounded-[5px] border border-gray-100 bg-white px-3 py-3"
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${item.avatarColor} text-white text-sm font-bold shadow-sm`}
                  aria-hidden="true"
                >
                  {item.avatarInitial}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm font-bold text-gray-800">
                      {item.name}
                    </p>
                    <time
                      dateTime={item.createdAt}
                      className="text-[11px] text-gray-400"
                    >
                      {formatFeedbackTime(item.createdAt)}
                    </time>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={12}
                        className={
                          star <= item.rating
                            ? "text-orange-500 fill-orange-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 wrap-break-word">
                    {item.comment}
                  </p>

                  {item.authorReply && (
                    <div className="mt-3 rounded-[5px] border border-blue-100 bg-blue-50 px-3 py-2">
                      <div className="mb-1 flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs font-bold text-[#12378C]">
                          Author HeroWeb
                        </p>
                        <time
                          dateTime={item.authorReply.createdAt}
                          className="text-[11px] text-gray-400"
                        >
                          {formatFeedbackTime(item.authorReply.createdAt)}
                        </time>
                      </div>
                      <p className="text-sm text-gray-600 wrap-break-word">
                        {item.authorReply.comment}
                      </p>
                    </div>
                  )}

                  {isLoggedIn && replyFeedbackId === item.createdAt ? (
                    <div className="mt-3 rounded-[5px] border border-gray-200 bg-gray-50 p-3">
                      <textarea
                        value={replyText}
                        onChange={(event) => {
                          setReplyText(event.target.value.slice(0, 220));
                          setReplyError("");
                        }}
                        placeholder="Tulis balasan sebagai author..."
                        className="w-full min-h-20 resize-none rounded-[5px] border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-[#12378C] focus:ring-2 focus:ring-[#12378C]/10"
                      />
                      {replyError && (
                        <div className="mt-2 flex items-start gap-2 rounded-[5px] border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                          <AlertCircle size={16} className="mt-0.5 shrink-0" />
                          <p>{replyError}</p>
                        </div>
                      )}
                      <div className="mt-2 flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setReplyFeedbackId(null);
                            setReplyText("");
                            setReplyError("");
                          }}
                          className="rounded-[5px] border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-gray-600 transition hover:bg-gray-100"
                        >
                          Batal
                        </button>
                        <button
                          type="button"
                          onClick={() => handleReplySubmit(item.createdAt)}
                          className="inline-flex items-center gap-1.5 rounded-[5px] bg-[#12378C] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#0f2d7a]"
                        >
                          <Send size={12} />
                          Kirim Balasan
                        </button>
                      </div>
                    </div>
                  ) : isLoggedIn ? (
                    <button
                      type="button"
                      onClick={() =>
                        openReplyForm(item.createdAt, item.authorReply)
                      }
                      className="mt-3 text-xs font-bold text-[#12378C] transition hover:text-orange-500"
                    >
                      {item.authorReply
                        ? "Edit Balasan Author"
                        : "Balas sebagai Author"}
                    </button>
                  ) : null}
                </div>
              </div>
            ))}

            {feedbacks.length > 3 && (
              <button
                type="button"
                onClick={() => setShowAllFeedbacks((value) => !value)}
                className="w-full rounded-[5px] border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-[#12378C] transition hover:border-[#12378C] hover:bg-blue-50"
              >
                {showAllFeedbacks
                  ? "Tampilkan Lebih Sedikit"
                  : `Lihat Semua Feedback (${feedbacks.length})`}
              </button>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
