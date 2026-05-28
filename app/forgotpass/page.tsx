"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FiMail, FiSend } from "react-icons/fi";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("If the email is registered, we will send a password reset link.");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-200 p-4 text-slate-900 sm:p-8">
      <main className="w-full max-w-md rounded-xl bg-white px-8 py-8 shadow-2xl">
        <div className="mb-8 text-xl font-bold text-[#12378C]">
          Hero
          <span className="ml-1 rounded bg-[#12378C] px-1.5 py-0.5 text-white">
            Web
          </span>
        </div>

        <h1 className="text-3xl font-bold">Reset password</h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          If the email is registered, we will send a password reset link
          directly to your email.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="flex items-center gap-2 rounded border border-slate-200 bg-slate-50 px-3 py-2.5 focus-within:border-[#12378C]">
            <FiMail className="text-lg text-slate-500" />
            <input
              type="email"
              required
              className="w-full bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-500"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded bg-[#12378C] py-3 text-sm font-bold text-white transition hover:bg-[#0f2f78]"
          >
            <FiSend className="text-lg" />
            Send reset link
          </button>
        </form>

        <button
          type="button"
          onClick={() => router.push("/login")}
          className="mt-6 text-sm font-semibold text-[#12378C] hover:underline"
        >
          Back to sign in
        </button>
      </main>
    </div>
  );
}

