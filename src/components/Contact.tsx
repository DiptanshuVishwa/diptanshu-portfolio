'use client';

import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "diptanshuvishwa364@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white flex flex-col items-center">
      <div className="w-full max-w-4xl px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-black tracking-[0.3em] uppercase text-indigo-600 mb-3 block">
            Available for Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Let’s build something{" "}
            <span className="text-indigo-600">exceptional.</span>
          </h2>
        </div>

        {/* Compact Contact Card */}
        <div className="w-full md:w-[75%] mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center mb-12">

          {/* Email Row */}
          <div className="w-full flex items-center justify-between border border-slate-200 rounded-xl px-4 py-3 bg-white">
            <span className="text-sm font-semibold text-slate-700 truncate">
              {email}
            </span>

            <button
              onClick={copyToClipboard}
              className="ml-3 p-2 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-100 transition"
            >
              {copied ? (
                <span className="text-green-600 text-sm font-bold">✓</span>
              ) : (
                <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                  <rect x="2" y="2" width="13" height="13" rx="2"></rect>
                </svg>
              )}
            </button>
          </div>
          


          {/* Social Icons */}
          <div className="flex gap-5 mt-5">
            
            {/* GitHub */}
            <a 
              href="https://github.com/DiptanshuVishwa" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-700 hover:text-black transition hover:scale-110"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
                0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754
                -1.089-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305
                3.492.998.108-.776.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.932
                0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.527.117-3.176
                0 0 1.008-.322 3.3 1.23.957-.267 1.983-.4 3.003-.404
                1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23
                3.297-1.23.653 1.65.241 2.873.118 3.176.77.84
                1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48
                5.922.43.372.823 1.103.823 2.222
                0 1.606-.015 2.898-.015 3.293
                0 .32.218.694.825.576C20.565 21.795 24 17.295 24 12
                24 5.37 18.627 0 12 0z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/diptanshu-vishwa-0548b0341/" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-700 hover:text-blue-600 transition hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452H16.9V14.8c0-1.345-.025-3.077-1.874-3.077
                -1.876 0-2.163 1.466-2.163 2.978v5.75H9.316V9h3.4v1.561h.049
                c.474-.9 1.637-1.848 3.37-1.848
                3.6 0 4.267 2.368 4.267 5.455v6.284zM5.337 7.433
                a1.98 1.98 0 1 1 0-3.96 1.98 1.98 0 0 1 0 3.96zM6.812
                20.452H3.86V9h2.952v11.452zM22.225 0H1.771
                C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24
                1.771 24h20.451C23.2 24 24 23.227 24
                22.271V1.729C24 .774 23.2 0 22.222 0z"/>
              </svg>
            </a>

          </div>

        </div>

        {/* Footer */}
        <footer className="mt-20 py-8 border-t border-slate-100 w-full max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            
            <div className="text-slate-900 font-bold text-sm">
              Diptanshu Vishwa <span className="text-slate-400 font-medium ml-1">© 2026</span>
            </div>

            <div className="text-slate-600 font-semibold text-sm italic">
              Building scalable full-stack applications.
            </div>

            <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Active
              </span>
            </div>

          </div>
        </footer>

      </div>
    </section>
  );
};

export default Contact;
