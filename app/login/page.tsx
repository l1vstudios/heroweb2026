"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FiMail, FiLogIn, FiUserPlus } from "react-icons/fi";

export default function LoginPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaUrl, setCaptchaUrl] = useState("/api/captcha");

  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const [regConfirm, setRegConfirm] = useState("");

  const [showRegPass, setShowRegPass] = useState(false);
  const [showRegConfirm, setShowRegConfirm] = useState(false);

  const refreshCaptcha = () => {
    setCaptchaUrl(`/api/captcha?d=${Date.now()}`);
  };

  // Password Strength Checker
  function getPasswordStrength(password: string) {
    let score = 0;
    if (password.length >= 6) score++;
    if (password.length >= 10) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  }

  const strength = getPasswordStrength(regPass);

  // =============================
  // HANDLE LOGIN
  // =============================
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: Validate / call login API
    // --------------------------------------
    // Demo login sukses:
    window.localStorage.setItem("hero-auth", "true");
    router.push("/dashboard");
  };

  // =============================
  // HANDLE REGISTER
  // =============================
  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (regPass !== regConfirm) {
      alert("Passwords do not match!");
      return;
    }

    if (strength < 3) {
      alert("Password is too weak!");
      return;
    }

    alert("Account created successfully! (demo)");
    setActiveTab("login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-200 p-4 text-slate-900 sm:p-8">
      <main className="grid w-full max-w-6xl overflow-hidden rounded-xl bg-white shadow-2xl lg:grid-cols-2">
        <section className="flex items-center justify-center px-8 py-10 sm:px-16">
          <div className="w-full max-w-sm">
            <div className="mb-8 text-xl font-bold text-[#12378C]">
              Hero
              <span className="ml-1 rounded bg-[#12378C] px-1.5 py-0.5 text-white">
                Web
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight">
              {activeTab === "login" ? "Sign in" : "Join now"}
            </h1>
            <p className="mt-1 text-xs text-slate-500">
              {activeTab === "login"
                ? "Stay updated on your website dashboard"
                : "Create your HeroWeb account"}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setActiveTab("login")}
                className={`rounded border px-4 py-2 text-sm font-semibold transition ${
                  activeTab === "login"
                    ? "border-[#12378C] bg-[#12378C] text-white"
                    : "border-slate-300 text-slate-700 hover:border-[#12378C]"
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("register")}
                className={`rounded border px-4 py-2 text-sm font-semibold transition ${
                  activeTab === "register"
                    ? "border-[#12378C] bg-[#12378C] text-white"
                    : "border-slate-300 text-slate-700 hover:border-[#12378C]"
                }`}
              >
                Register
              </button>
            </div>

            <div className="my-5 flex items-center gap-3 text-[10px] text-slate-400">
              <div className="h-px flex-1 bg-slate-200" />
              or continue with email
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="min-h-[310px]">
              {activeTab === "login" ? (
                <form
                  key="login"
                  onSubmit={handleLogin}
                  className="space-y-3 animate-[fadeSlide_0.28s_ease-out]"
                >
                  <div className="flex items-center gap-2 rounded border border-slate-200 bg-slate-50 px-3 py-2.5 focus-within:border-[#12378C]">
                    <FiMail className="text-slate-500 text-lg" />
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-500"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center rounded border border-slate-200 bg-slate-50 px-3 py-2.5 focus-within:border-[#12378C]">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      className="w-full bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-500"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="ml-2 text-sm font-semibold text-[#12378C]"
                    >
                      {showPassword ? "hide" : "show"}
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <label className="flex items-center gap-2 text-slate-600">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="accent-[#12378C]"
                      />
                      Remember me
                    </label>
                    <button
                      type="button"
                      onClick={() => router.push("/forgotpass")}
                      className="font-semibold text-[#12378C] hover:underline"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <img
                        src={captchaUrl}
                        alt="captcha"
                        className="h-[46px] w-[150px] rounded border border-slate-300 bg-white object-cover"
                      />

                      <button
                        type="button"
                        onClick={refreshCaptcha}
                        className="text-sm font-semibold text-[#12378C] hover:underline"
                      >
                        Refresh
                      </button>
                    </div>

                    <input
                      type="text"
                      required
                      className="mt-2 w-full rounded border border-slate-200 bg-slate-50 px-3 py-2.5 text-base text-slate-800 outline-none placeholder:text-slate-500 focus:border-[#12378C]"
                      placeholder="CAPTCHA"
                      value={captchaValue}
                      onChange={(e) => setCaptchaValue(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded bg-[#12378C] py-3 text-sm font-bold text-white transition hover:bg-[#0f2f78]"
                  >
                    <FiLogIn className="text-xl" />
                    Login
                  </button>
                </form>
              ) : (
                <form
                  key="register"
                  onSubmit={handleRegister}
                  className="space-y-3 animate-[fadeSlide_0.28s_ease-out]"
                >
                  <div className="flex items-center gap-2 rounded border border-slate-200 bg-slate-50 px-3 py-2.5 focus-within:border-[#12378C]">
                    <FiMail className="text-slate-500 text-lg" />
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-500"
                      placeholder="Email"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <div className="flex items-center rounded border border-slate-200 bg-slate-50 px-3 py-2.5 focus-within:border-[#12378C]">
                      <input
                        type={showRegPass ? "text" : "password"}
                        required
                        className="w-full bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-500"
                        placeholder="Password"
                        value={regPass}
                        onChange={(e) => setRegPass(e.target.value)}
                      />

                      <button
                        type="button"
                        onClick={() => setShowRegPass(!showRegPass)}
                        className="ml-2 text-sm font-semibold text-[#12378C]"
                      >
                        {showRegPass ? "hide" : "show"}
                      </button>
                    </div>

                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                      <div
                        className={`h-full transition-all duration-300 ${
                          strength <= 1
                            ? "w-1/4 bg-red-500"
                            : strength === 2
                              ? "w-2/4 bg-yellow-500"
                              : strength === 3 || strength === 4
                                ? "w-3/4 bg-blue-500"
                                : "w-full bg-green-600"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex items-center rounded border border-slate-200 bg-slate-50 px-3 py-2.5 focus-within:border-[#12378C]">
                    <input
                      type={showRegConfirm ? "text" : "password"}
                      required
                      className="w-full bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-500"
                      placeholder="Confirm password"
                      value={regConfirm}
                      onChange={(e) => setRegConfirm(e.target.value)}
                    />

                    <button
                      type="button"
                      onClick={() => setShowRegConfirm(!showRegConfirm)}
                      className="ml-2 text-sm font-semibold text-[#12378C]"
                    >
                      {showRegConfirm ? "hide" : "show"}
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="mt-[78px] flex w-full items-center justify-center gap-2 rounded bg-[#12378C] py-3 text-sm font-bold text-white transition hover:bg-[#0f2f78]"
                  >
                    <FiUserPlus className="text-xl" />
                    Create Account
                  </button>
                </form>
              )}
            </div>

            <style jsx>{`
              @keyframes fadeSlide {
                from {
                  opacity: 0;
                  transform: translateY(8px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>

            <p className="mt-6 text-center text-xs text-slate-500">
              {activeTab === "login"
                ? "New to HeroWeb?"
                : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() =>
                  setActiveTab(activeTab === "login" ? "register" : "login")
                }
                className="font-semibold text-[#12378C] hover:underline"
              >
                {activeTab === "login" ? "Join now" : "Sign in"}
              </button>
            </p>
          </div>
        </section>

        <section className="hidden bg-[#12378C] px-12 py-12 text-white lg:flex lg:flex-col lg:items-center lg:justify-center">
          <div className="relative h-72 w-full max-w-md">
            <svg
              viewBox="0 0 420 310"
              className="panel-scene scene-one absolute inset-0 h-full w-full"
              fill="none"
              aria-hidden="true"
            >
              <path
                className="app-wire app-wire-a"
                d="M126 122H180C194 122 194 148 180 148H126"
                stroke="white"
                strokeWidth="14"
                opacity="0.18"
                strokeLinecap="round"
              />
              <path
                className="app-wire app-wire-b"
                d="M126 188H180C194 188 194 162 180 162H126"
                stroke="white"
                strokeWidth="14"
                opacity="0.18"
                strokeLinecap="round"
              />
              <path
                className="app-wire app-wire-c"
                d="M180 155H244"
                stroke="white"
                strokeWidth="14"
                opacity="0.18"
                strokeLinecap="round"
              />
              <g className="app-card">
                <rect
                  x="250"
                  y="78"
                  width="130"
                  height="136"
                  rx="8"
                  fill="white"
                />
                <rect
                  x="264"
                  y="106"
                  width="98"
                  height="20"
                  rx="4"
                  fill="#e8f0fb"
                />
                <rect
                  className="app-row app-row-a"
                  x="264"
                  y="138"
                  width="98"
                  height="30"
                  rx="5"
                  fill="#f4f7fb"
                />
                <rect
                  className="app-row app-row-b"
                  x="264"
                  y="178"
                  width="98"
                  height="24"
                  rx="5"
                  fill="#f4f7fb"
                />
                <circle cx="272" cy="91" r="4" fill="#ef4444" />
                <circle cx="286" cy="91" r="4" fill="#f59e0b" />
                <circle cx="300" cy="91" r="4" fill="#22c55e" />
                <circle
                  className="app-dot"
                  cx="278"
                  cy="153"
                  r="8"
                  fill="#f59e0b"
                  opacity="0.55"
                />
                <circle
                  className="app-dot app-dot-b"
                  cx="278"
                  cy="190"
                  r="7"
                  fill="#12378C"
                  opacity="0.35"
                />
                <path
                  className="app-lines"
                  d="M292 149H348M292 158H330M292 186H348M292 194H336"
                  stroke="#94a3b8"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </g>
              <g className="app-node app-node-a">
                <circle cx="96" cy="92" r="22" fill="white" opacity="0.95" />
                <text
                  x="96"
                  y="99"
                  textAnchor="middle"
                  fontSize="22"
                  fontWeight="900"
                  fill="#12378C"
                >
                  G
                </text>
              </g>
              <g className="app-node app-node-b">
                <circle cx="96" cy="162" r="22" fill="white" opacity="0.95" />
                <text
                  x="96"
                  y="169"
                  textAnchor="middle"
                  fontSize="18"
                  fontWeight="900"
                  fill="#12378C"
                >
                  WA
                </text>
              </g>
              <g className="app-node app-node-c">
                <circle cx="96" cy="232" r="22" fill="white" opacity="0.95" />
                <text
                  x="96"
                  y="239"
                  textAnchor="middle"
                  fontSize="18"
                  fontWeight="900"
                  fill="#12378C"
                >
                  API
                </text>
              </g>
            </svg>
            <svg
              viewBox="0 0 420 310"
              className="panel-scene scene-two absolute inset-0 h-full w-full"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="210" cy="155" r="94" fill="white" opacity="0.08" />
              <circle cx="210" cy="155" r="32" fill="white" opacity="0.95" />
              <text
                x="210"
                y="161"
                textAnchor="middle"
                fontSize="14"
                fontWeight="900"
                fill="#12378C"
              >
                DNS
              </text>
              {[
                { x: 88, y: 70, label: ".com" },
                { x: 306, y: 72, label: ".id" },
                { x: 70, y: 208, label: ".ai" },
                { x: 322, y: 210, label: ".dev" },
                { x: 210, y: 42, label: ".io" },
                { x: 210, y: 254, label: ".app" },
              ].map((node, i) => (
                <g
                  className="domain-node"
                  style={{ animationDelay: `${i * 0.28}s` }}
                  key={node.label}
                >
                  <path
                    className="domain-wire"
                    d={`M210 155L${node.x} ${node.y}`}
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.42"
                    pathLength={1}
                    style={{ animationDelay: `${i * 0.28}s` }}
                  />
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="26"
                    fill="white"
                    opacity="0.95"
                  />
                  <text
                    x={node.x}
                    y={node.y + 5}
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="900"
                    fill="#12378C"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
            <svg
              viewBox="0 0 420 310"
              className="panel-scene scene-three absolute inset-0 h-full w-full"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="210" cy="150" r="104" fill="white" opacity="0.08" />
              <path
                className="support-headset"
                d="M154 142C154 104 178 78 210 78C242 78 266 104 266 142"
                stroke="white"
                strokeWidth="14"
                strokeLinecap="round"
                opacity="0.9"
              />
              <rect
                x="126"
                y="135"
                width="42"
                height="64"
                rx="18"
                fill="white"
                opacity="0.95"
              />
              <rect
                x="252"
                y="135"
                width="42"
                height="64"
                rx="18"
                fill="white"
                opacity="0.95"
              />
              <path
                className="support-boom"
                d="M266 190C252 220 226 232 190 226"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
                opacity="0.9"
              />
              <circle
                className="support-dot"
                cx="184"
                cy="225"
                r="10"
                fill="#ffb020"
              />
              <rect
                x="80"
                y="240"
                width="260"
                height="44"
                rx="12"
                fill="white"
                opacity="0.95"
              />
              <text
                x="210"
                y="268"
                textAnchor="middle"
                fontSize="16"
                fontWeight="900"
                fill="#12378C"
              >
                24/7 Technical Support
              </text>
              <g className="support-ticket">
                <rect
                  x="96"
                  y="58"
                  width="92"
                  height="48"
                  rx="10"
                  fill="white"
                  opacity="0.95"
                />
                <path
                  d="M114 76H170M114 90H154"
                  stroke="#94a3b8"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <circle cx="172" cy="76" r="5" fill="#22c55e" />
              </g>
              <g className="support-ticket support-ticket-b">
                <rect
                  x="236"
                  y="58"
                  width="92"
                  height="48"
                  rx="10"
                  fill="white"
                  opacity="0.9"
                />
                <path
                  d="M254 76H310M254 90H294"
                  stroke="#94a3b8"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <circle cx="312" cy="76" r="5" fill="#ffb020" />
              </g>
            </svg>
            <svg
              viewBox="0 0 420 310"
              className="panel-scene scene-four absolute inset-0 h-full w-full"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="210" cy="150" r="108" fill="white" opacity="0.08" />
              <g className="mobile-phone">
                <rect
                  x="155"
                  y="48"
                  width="110"
                  height="190"
                  rx="22"
                  fill="white"
                  opacity="0.96"
                />
                <rect
                  x="169"
                  y="72"
                  width="82"
                  height="138"
                  rx="12"
                  fill="#e8f0fb"
                />
                <rect
                  className="mobile-screen"
                  x="181"
                  y="92"
                  width="58"
                  height="16"
                  rx="5"
                  fill="#12378C"
                  opacity="0.22"
                />
                <rect
                  className="mobile-screen mobile-screen-b"
                  x="181"
                  y="122"
                  width="58"
                  height="42"
                  rx="8"
                  fill="#12378C"
                  opacity="0.14"
                />
                <circle cx="210" cy="222" r="6" fill="#12378C" opacity="0.35" />
              </g>
              <path
                className="mobile-code"
                d="M98 98L66 130L98 162M322 98L354 130L322 162M236 72L184 190"
                stroke="white"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.75"
              />
              <g className="mobile-chip">
                <rect
                  x="76"
                  y="202"
                  width="82"
                  height="52"
                  rx="12"
                  fill="white"
                  opacity="0.95"
                />
                <text
                  x="117"
                  y="234"
                  textAnchor="middle"
                  fontSize="18"
                  fontWeight="900"
                  fill="#12378C"
                >
                  iOS
                </text>
              </g>
              <g className="mobile-chip mobile-chip-b">
                <rect
                  x="262"
                  y="202"
                  width="82"
                  height="52"
                  rx="12"
                  fill="white"
                  opacity="0.95"
                />
                <text
                  x="303"
                  y="234"
                  textAnchor="middle"
                  fontSize="17"
                  fontWeight="900"
                  fill="#12378C"
                >
                  Android
                </text>
              </g>
            </svg>
          </div>
          <div className="relative mt-8 h-16 w-full text-center">
            <div className="panel-copy copy-one absolute inset-0">
              <h2 className="magic-title text-xl font-bold">
                {"Web and application development services"
                  .split(" ")
                  .map((word, i) => (
                    <span key={word} style={{ animationDelay: `${i * 0.12}s` }}>
                      {word}
                    </span>
                  ))}
              </h2>
              <p className="magic-subtitle mt-2 text-sm text-white/75">
                {"Everything you need in an easily customizable dashboard."
                  .split(" ")
                  .map((word, i) => (
                    <span
                      key={word}
                      style={{ animationDelay: `${0.65 + i * 0.08}s` }}
                    >
                      {word}
                    </span>
                  ))}
              </p>
            </div>
            <div className="panel-copy copy-two absolute inset-0">
              <h2 className="magic-title text-xl font-bold">
                {"Free Domain".split(" ").map((word, i) => (
                  <span key={word} style={{ animationDelay: `${i * 0.12}s` }}>
                    {word}
                  </span>
                ))}
              </h2>
              <p className="magic-subtitle mt-2 text-sm text-white/75">
                {"Order our service and get a free domain for your website."
                  .split(" ")
                  .map((word, i) => (
                    <span
                      key={word}
                      style={{ animationDelay: `${0.65 + i * 0.08}s` }}
                    >
                      {word}
                    </span>
                  ))}
              </p>
            </div>
            <div className="panel-copy copy-three absolute inset-0">
              <h2 className="magic-title text-xl font-bold">
                {"Technical Support".split(" ").map((word, i) => (
                  <span key={word} style={{ animationDelay: `${i * 0.12}s` }}>
                    {word}
                  </span>
                ))}
              </h2>
              <p className="magic-subtitle mt-2 text-sm text-white/75">
                {"Support for maintenance, troubleshooting, and service updates."
                  .split(" ")
                  .map((word, i) => (
                    <span
                      key={word}
                      style={{ animationDelay: `${0.65 + i * 0.08}s` }}
                    >
                      {word}
                    </span>
                  ))}
              </p>
            </div>
            <div className="panel-copy copy-four absolute inset-0">
              <h2 className="magic-title text-xl font-bold">
                {"Native Mobile App".split(" ").map((word, i) => (
                  <span key={word} style={{ animationDelay: `${i * 0.12}s` }}>
                    {word}
                  </span>
                ))}
              </h2>
              <p className="magic-subtitle mt-2 text-sm text-white/75">
                {"Build native iOS and Android applications for your business."
                  .split(" ")
                  .map((word, i) => (
                    <span
                      key={word}
                      style={{ animationDelay: `${0.65 + i * 0.08}s` }}
                    >
                      {word}
                    </span>
                  ))}
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-2">
            <span className="panel-dot h-2 w-2 rounded-full bg-white/40" />
            <span className="panel-dot h-2 w-2 rounded-full bg-white/40" />
            <span className="panel-dot h-2 w-2 rounded-full bg-white/40" />
            <span className="panel-dot h-2 w-2 rounded-full bg-white/40" />
          </div>
          <style jsx>{`
            .panel-scene {
              animation: panelScene 20s ease-in-out infinite;
              opacity: 0;
              transform: translateY(14px) scale(0.96);
            }
            .scene-two {
              animation-delay: 5s;
            }
            .scene-three {
              animation-delay: 10s;
            }
            .scene-four {
              animation-delay: 15s;
            }
            .panel-dot {
              animation: panelDot 20s ease-in-out infinite;
            }
            .panel-dot:nth-child(2) {
              animation-delay: 5s;
            }
            .panel-dot:nth-child(3) {
              animation-delay: 10s;
            }
            .panel-dot:nth-child(4) {
              animation-delay: 15s;
            }
            .panel-copy {
              animation: panelCopy 20s ease-in-out infinite;
              opacity: 0;
            }
            .copy-two {
              animation-delay: 5s;
            }
            .copy-three {
              animation-delay: 10s;
            }
            .copy-four {
              animation-delay: 15s;
            }
            .app-orbit {
              animation: appPulse 3s ease-in-out infinite;
            }
            .app-ring {
              stroke-dasharray: 12 10;
              animation: appRing 8s linear infinite;
              transform-origin: 210px 150px;
            }
            .app-wire {
              stroke-dasharray: 60 22;
              animation: appWire 2.4s linear infinite;
            }
            .app-wire-b {
              animation-delay: 0.35s;
            }
            .app-wire-c {
              animation-delay: 0.7s;
            }
            .app-card {
              animation: appFloat 3.6s ease-in-out infinite;
            }
            .app-node {
              animation: appNode 3s ease-in-out infinite;
              transform-box: fill-box;
              transform-origin: center;
            }
            .app-node-b {
              animation-delay: 0.35s;
            }
            .app-node-c {
              animation-delay: 0.7s;
            }
            .app-row,
            .app-lines,
            .app-dot {
              animation: appBlink 2s ease-in-out infinite;
            }
            .app-row-b,
            .app-dot-b {
              animation-delay: 0.45s;
            }
            .domain-wire {
              stroke-dasharray: 1;
              stroke-dashoffset: 1;
              animation: domainConnect 2.8s ease-in-out infinite;
              path-length: 1;
            }
            .domain-node {
              animation: domainPop 2.8s ease-in-out infinite;
              opacity: 0;
              transform-box: fill-box;
              transform-origin: center;
            }
            .support-headset {
              stroke-dasharray: 240;
              stroke-dashoffset: 240;
              animation: supportDraw 2.8s ease-in-out infinite;
            }
            .support-boom {
              stroke-dasharray: 110;
              stroke-dashoffset: 110;
              animation: supportDraw 2.8s ease-in-out infinite 0.3s;
            }
            .support-dot {
              animation: supportPulse 1.2s ease-in-out infinite;
            }
            .support-ticket {
              animation: ticketFloat 3s ease-in-out infinite;
            }
            .support-ticket-b {
              animation-delay: 0.55s;
            }
            .mobile-phone {
              animation: mobileFloat 3s ease-in-out infinite;
            }
            .mobile-code {
              stroke-dasharray: 170;
              stroke-dashoffset: 170;
              animation: mobileCode 3s ease-in-out infinite;
            }
            .mobile-chip {
              animation: chipFloat 2.8s ease-in-out infinite;
            }
            .mobile-chip-b {
              animation-delay: 0.45s;
            }
            .mobile-screen {
              animation: appBlink 1.8s ease-in-out infinite;
            }
            .mobile-screen-b {
              animation-delay: 0.35s;
            }
            .magic-title,
            .magic-subtitle {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 0.28em;
            }
            .magic-title span,
            .magic-subtitle span {
              animation: magicGlass 4.8s ease-in-out infinite;
              opacity: 1;
              filter: blur(0);
              transform: translateY(0) scale(1);
            }
            @keyframes appPulse {
              0%,
              100% {
                opacity: 0.07;
                transform: scale(1);
                transform-origin: 210px 150px;
              }
              50% {
                opacity: 0.14;
                transform: scale(1.05);
                transform-origin: 210px 150px;
              }
            }
            @keyframes panelScene {
              0%,
              21% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
              24%,
              100% {
                opacity: 0;
                transform: translateY(-10px) scale(0.98);
              }
            }
            @keyframes panelDot {
              0%,
              21% {
                background: rgba(255, 255, 255, 1);
              }
              24%,
              100% {
                background: rgba(255, 255, 255, 0.4);
              }
            }
            @keyframes panelCopy {
              0%,
              21% {
                opacity: 1;
                transform: translateY(0);
              }
              24%,
              100% {
                opacity: 0;
                transform: translateY(-8px);
              }
            }
            @keyframes appRing {
              to {
                stroke-dashoffset: -80;
              }
            }
            @keyframes appWire {
              to {
                stroke-dashoffset: -82;
              }
            }
            @keyframes appFloat {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-8px);
              }
            }
            @keyframes appNode {
              0%,
              100% {
                transform: translateY(0) scale(1);
              }
              50% {
                transform: translateY(-6px) scale(1.06);
              }
            }
            @keyframes appBlink {
              0%,
              100% {
                opacity: 0.55;
              }
              50% {
                opacity: 1;
              }
            }
            @keyframes domainConnect {
              0%,
              16% {
                stroke-dashoffset: 1;
                opacity: 0.16;
              }
              34%,
              72% {
                stroke-dashoffset: 0;
                opacity: 0.48;
              }
              100% {
                stroke-dashoffset: 1;
                opacity: 0.16;
              }
            }
            @keyframes domainPop {
              0%,
              22% {
                opacity: 0;
                transform: scale(0.76);
              }
              36%,
              74% {
                opacity: 1;
                transform: scale(1);
              }
              100% {
                opacity: 0;
                transform: scale(0.86);
              }
            }
            @keyframes supportDraw {
              0%,
              18% {
                stroke-dashoffset: 240;
                opacity: 0.35;
              }
              45%,
              78% {
                stroke-dashoffset: 0;
                opacity: 0.95;
              }
              100% {
                stroke-dashoffset: 240;
                opacity: 0.35;
              }
            }
            @keyframes supportPulse {
              0%,
              100% {
                transform: scale(1);
                opacity: 0.7;
                transform-origin: 184px 225px;
              }
              50% {
                transform: scale(1.35);
                opacity: 1;
                transform-origin: 184px 225px;
              }
            }
            @keyframes ticketFloat {
              0%,
              100% {
                transform: translateY(0);
                opacity: 0.82;
              }
              50% {
                transform: translateY(-10px);
                opacity: 1;
              }
            }
            @keyframes mobileFloat {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }
            @keyframes mobileCode {
              0%,
              18% {
                stroke-dashoffset: 170;
                opacity: 0.35;
              }
              48%,
              78% {
                stroke-dashoffset: 0;
                opacity: 0.85;
              }
              100% {
                stroke-dashoffset: 170;
                opacity: 0.35;
              }
            }
            @keyframes chipFloat {
              0%,
              100% {
                transform: translateY(0);
                opacity: 0.85;
              }
              50% {
                transform: translateY(-8px);
                opacity: 1;
              }
            }
            @keyframes magicGlass {
              0%,
              72% {
                opacity: 1;
                filter: blur(0);
                transform: translateY(0) scale(1);
              }
              100% {
                opacity: 0;
                filter: blur(8px);
                transform: translateY(-6px) scale(0.98);
              }
            }
          `}</style>
        </section>
      </main>
    </div>
  );
}
