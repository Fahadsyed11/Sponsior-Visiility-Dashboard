"use client";

import Link from "next/link";
import { ArrowRight, LayoutDashboard, Target } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [role, setRole] = useState<"organizer" | "sponsor">("organizer");

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="text-3xl font-bold tracking-tight text-white flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-premium flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.4)]">
            <span className="text-white text-lg font-bold">SV</span>
          </div>
          <span>Sponsor<span className="text-primary-500">Vis</span></span>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="glass py-8 px-4 shadow sm:rounded-2xl sm:px-10 border border-white/5">
          
          {/* Role Toggle */}
          <div className="flex p-1 bg-white/5 rounded-lg mb-8">
            <button
              onClick={() => setRole("organizer")}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                role === "organizer" ? "bg-white/10 text-white shadow" : "text-neutral-400 hover:text-white"
              }`}
            >
              Organizer
            </button>
            <button
              onClick={() => setRole("sponsor")}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                role === "sponsor" ? "bg-white/10 text-white shadow" : "text-neutral-400 hover:text-white"
              }`}
            >
              Sponsor
            </button>
          </div>

          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 placeholder-neutral-500 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm text-white"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-300">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full appearance-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 placeholder-neutral-500 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm text-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/10 bg-white/5 text-primary-500 focus:ring-primary-500 focus:ring-offset-black"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-400">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-primary-400 hover:text-primary-300">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <Link 
                href={role === "organizer" ? "/dashboard" : "/sponsor-dashboard"}
                className="flex w-full justify-center rounded-lg border border-transparent bg-gradient-premium py-2.5 px-4 text-sm font-medium text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-black items-center gap-2 transition-opacity"
              >
                Sign in <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-black px-2 text-neutral-500 glass">Or continue with</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-black transition-colors"
              >
                <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.26538 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                    fill="#34A853"
                  />
                </svg>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
