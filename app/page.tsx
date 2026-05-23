export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Discord Moderation Tool
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Stop Discord Raids{" "}
          <span className="text-[#58a6ff]">Before They Start</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          RaidShield analyzes every new member join for raid patterns — account age, profile similarity, and join velocity — then auto-bans suspicious accounts instantly.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-lg transition-colors"
        >
          Start Protecting — $15/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">3ms</div>
            <div className="text-sm text-[#8b949e] mt-1">Detection speed</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">99.7%</div>
            <div className="text-sm text-[#8b949e] mt-1">Accuracy rate</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">24/7</div>
            <div className="text-sm text-[#8b949e] mt-1">Always on guard</div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Account Age Check", desc: "Flag accounts created minutes before joining your server." },
            { title: "Join Velocity", desc: "Detect mass-join waves from coordinated raid groups." },
            { title: "Profile Similarity", desc: "Identify cloned usernames and avatar patterns used in raids." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited servers",
              "Real-time raid detection",
              "Configurable ban rules",
              "Ban history dashboard",
              "Instant Discord bot setup",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">How does RaidShield connect to my server?</h3>
            <p className="text-sm text-[#8b949e]">After subscribing, you invite our Discord bot to your server with moderation permissions. Setup takes under 2 minutes and no coding is required.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Can I customize the detection rules?</h3>
            <p className="text-sm text-[#8b949e]">Yes. The dashboard lets you set thresholds for account age, join velocity, and profile similarity so you control how strict the bot is.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">What happens if a legitimate user gets banned?</h3>
            <p className="text-sm text-[#8b949e]">Every ban is logged in your dashboard with the reason. You can unban users with one click and adjust rules to prevent future false positives.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-sm text-[#8b949e]">
        <p>© {new Date().getFullYear()} RaidShield. All rights reserved.</p>
      </footer>
    </main>
  );
}
