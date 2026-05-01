"use client";

import { useState, useEffect } from "react";
import {
  Brain,
  ShoppingCart,
  TrendingUp,
  Shield,
  MessageSquare,
  BarChart3,
  Bell,
  MapPin,
  ChevronDown,
  ArrowRight,
  Check,
  Star,
  Sparkles,
  CreditCard,
  Target,
  PiggyBank,
  Scan,
  Wifi,
} from "lucide-react";

interface FAQItemProps {
  q: string;
  a: string;
}

function Badge({
  children,
  color = "blue",
}: {
  children: React.ReactNode;
  color?: "blue" | "gold" | "teal";
}) {
  const colors = {
    blue: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    gold: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    teal: "bg-teal-500/10 text-teal-400 border border-teal-500/20",
  };
  return <span className={`badge ${colors[color]}`}>{children}</span>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center mb-4">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest">
        <Sparkles size={12} />
        {children}
      </span>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0a0f1e]/90 backdrop-blur-xl border-b border-white/5 py-3" : "py-5"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
            <Brain size={16} className="text-white" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Fin<span className="gradient-text-blue">AI</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#instore" className="hover:text-white transition-colors">In-Store Mode</a>
          <a href="#how" className="hover:text-white transition-colors">How It Works</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        <a href="#waitlist" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25">
          Get Early Access <ArrowRight size={14} />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    if (typeof window !== "undefined" && (window as any).posthog) {
      (window as any).posthog.capture("hero_waitlist_submit", { email });
    }
  };
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden grid-bg">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm text-slate-300">
          <span className="w-2 h-2 rounded-full bg-teal-400 pulse-dot" />
          <span className="text-teal-400 font-semibold">#1 Digital Innovation</span>
          <span className="text-slate-500">consumers want in-store</span>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
          Your Money.{" "}
          <span className="gradient-text">Smarter.</span>
          <br />
          <span className="text-white">Everywhere You Shop.</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          FinAI pairs a ChatGPT-style spending assistant with a real-time in-store mode — so you always know if you can afford it before you buy it. Smarter finance, built for how you actually live.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
          {submitted ? (
            <div className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 font-semibold">
              <Check size={18} /> You&apos;re on the list! We&apos;ll be in touch.
            </div>
          ) : (
            <>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="flex-1 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-blue-500/50 transition-all text-sm" />
              <button type="submit" disabled={loading} onClick={() => { if (typeof window !== "undefined" && (window as any).posthog) (window as any).posthog.capture("hero_cta_click"); }} className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 disabled:opacity-70 whitespace-nowrap">
                {loading ? "Joining…" : "Get Early Access →"}
              </button>
            </>
          )}
        </form>
        <p className="text-xs text-slate-600 mb-16">Free to join · No credit card · Be first when we launch</p>
        <div className="relative max-w-3xl mx-auto">
          <div className="animate-gradient-border rounded-2xl overflow-hidden">
            <div className="glass rounded-2xl p-1">
              <div className="rounded-xl overflow-hidden bg-[#0d1526] border border-white/5">
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center"><Brain size={12} className="text-white" /></div>
                    <span className="text-sm font-semibold text-white">FinAI</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-400 pulse-dot" />
                    <span className="text-xs text-teal-400 font-medium">In-Store Mode Active</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500"><Bell size={14} /><span>$847 left this month</span></div>
                </div>
                <div className="px-5 py-5 space-y-4 text-left">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex-shrink-0 flex items-center justify-center"><Sparkles size={14} className="text-white" /></div>
                    <div className="flex-1">
                      <div className="glass rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-300 max-w-sm">
                        You&apos;re scanning a $129 jacket at Zara. You&apos;ve spent <span className="text-amber-400 font-semibold">$312 on clothing</span> this month — 78% of your budget. Want me to check if this fits?
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="bg-blue-600/20 border border-blue-500/20 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-slate-300 max-w-xs">Yes, and show me where I can cut back this week.</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex-shrink-0 flex items-center justify-center"><Sparkles size={14} className="text-white" /></div>
                    <div className="flex-1">
                      <div className="glass rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-300 max-w-sm">
                        The jacket fits if you skip 2 dining-out trips (saves ~$140). Your biggest flex spend was <span className="text-blue-400 font-semibold">Starbucks — $67 this month</span>. Cutting to 3x/week saves $35. 🎯
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {[
                      { label: "Monthly Budget", val: "$2,000", change: "On track", color: "text-teal-400" },
                      { label: "Spent So Far", val: "$1,153", change: "57.6%", color: "text-blue-400" },
                      { label: "AI Suggestions", val: "12 saved", change: "This month", color: "text-amber-400" },
                    ].map((s) => (
                      <div key={s.label} className="glass rounded-xl p-3 text-center">
                        <div className={`text-base font-bold ${s.color}`}>{s.val}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                        <div className="text-xs text-slate-600 mt-0.5">{s.change}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -left-4 top-16 glass-gold rounded-xl px-3 py-2 text-xs font-semibold text-amber-400 float hidden lg:block">💡 Saved $234 this month</div>
          <div className="absolute -right-4 bottom-20 glass rounded-xl px-3 py-2 text-xs font-semibold text-teal-400 float-delay hidden lg:block">📍 In-Store Mode Active</div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { val: "67%", label: "of consumers want in-store app features", icon: ShoppingCart },
    { val: "3.8×", label: "faster financial decisions with AI", icon: Brain },
    { val: "$480", label: "average annual savings with AI budgeting", icon: PiggyBank },
    { val: "92%", label: "of users report reduced overspending", icon: TrendingUp },
  ];
  return (
    <section className="py-16 px-6 border-y border-white/5 bg-[#080d1a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="flex justify-center mb-2"><s.icon size={20} className="text-blue-400 opacity-60" /></div>
              <div className="text-3xl font-black gradient-text mb-1">{s.val}</div>
              <div className="text-xs text-slate-500 leading-relaxed">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const pains = [
    { icon: "😤", title: "You check your bank app — too late.", desc: "You've already swiped the card. Traditional finance apps show you what went wrong after the damage is done." },
    { icon: "🤯", title: "Spreadsheets weren't built for 2025.", desc: "Manually tracking every coffee and impulse buy is exhausting. Nobody sticks with it past week two." },
    { icon: "🛍️", title: "In-store, you're flying blind.", desc: "Standing in the checkout line, you have no idea if that purchase breaks your budget. You guess. You regret." },
  ];
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>The Problem</SectionLabel>
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-4 leading-tight">
          Most finance apps tell you <span className="text-slate-500 line-through decoration-red-500">what happened.</span><br />
          <span className="gradient-text">None help you in the moment.</span>
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-14 text-lg">You deserve a finance tool that thinks with you — not just a ledger that judges you later.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {pains.map((p) => (
            <div key={p.title} className="glass rounded-2xl p-6 hover-lift border border-red-500/10 hover:border-red-500/20 transition-all">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-bold text-white mb-2 text-lg">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: MessageSquare, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", title: "Conversational AI Advisor", desc: 'Ask anything in plain English. "Can I afford a weekend trip?" — get instant, personalized answers backed by your real spending data.', tag: "ChatGPT-Powered", tagColor: "blue" as const },
    { icon: Scan, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20", title: "Real-Time In-Store Mode", desc: "Activate in-store mode as you walk into any shop. Scan barcodes, see instant budget impact, get AI recommendations — all before you reach the register.", tag: "#1 Wanted Feature", tagColor: "gold" as const },
    { icon: BarChart3, color: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/20", title: "Predictive Spending Insights", desc: "FinAI learns your patterns and forecasts where your money will go. Get proactive alerts before you overspend — not after.", tag: "ML-Powered", tagColor: "teal" as const },
    { icon: Target, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", title: "Smart Goal Tracking", desc: "Set goals — vacation fund, emergency reserve, debt payoff — and let the AI dynamically adjust your monthly budgets to hit them automatically.", tag: "Personalized", tagColor: "blue" as const },
    { icon: Bell, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20", title: "Proactive Budget Alerts", desc: "Get notified the moment you're trending over budget in any category — with specific AI suggestions on what to cut to stay on track.", tag: "Real-Time", tagColor: "teal" as const },
    { icon: Shield, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20", title: "Bank-Level Security", desc: "256-bit encryption, read-only bank access, and zero data selling. Your financial life stays private. Always.", tag: "SOC 2 Compliant", tagColor: "teal" as const },
  ];
  return (
    <section id="features" className="py-24 px-6 bg-[#080d1a]">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Features</SectionLabel>
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-4">
          Everything your wallet needs. <span className="gradient-text">Nothing it doesn&apos;t.</span>
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-14 text-lg">Purpose-built for real life — at home, at work, and standing in the checkout line.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className={`glass rounded-2xl p-6 hover-lift border ${f.border} hover:bg-white/5 transition-all`}>
              <div className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-4`}><f.icon size={22} className={f.color} /></div>
              <div className="mb-2"><Badge color={f.tagColor}>{f.tag}</Badge></div>
              <h3 className="font-bold text-white text-lg mb-2 mt-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InStoreSpotlight() {
  const steps = [
    { icon: MapPin, label: "Walk into a store", desc: "Geo-detection auto-activates in-store mode" },
    { icon: Scan, label: "Scan any product", desc: "Point your camera at any barcode" },
    { icon: Brain, label: "AI gives verdict instantly", desc: "Buy it, skip it, or find a better alternative" },
  ];
  return (
    <section id="instore" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-blue-900/10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <ShoppingCart size={12} /> In-Store Mode™
            </div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
              The finance app <span className="text-amber-400">that shops</span><br />with you.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Consumers ranked in-store app integration as the <span className="text-white font-semibold">#1 digital innovation</span> they want from financial tools. So we built it — a live, AI-powered shopping companion that knows your budget and tells you the truth at the shelf.
            </p>
            <div className="space-y-5 mb-10">
              {steps.map((s, i) => (
                <div key={s.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center"><s.icon size={18} className="text-amber-400" /></div>
                  <div>
                    <div className="text-white font-semibold text-sm"><span className="text-amber-500/60 mr-2 font-mono text-xs">0{i + 1}</span>{s.label}</div>
                    <div className="text-slate-500 text-sm mt-0.5">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#waitlist" onClick={() => { if (typeof window !== "undefined" && (window as any).posthog) (window as any).posthog.capture("instore_cta_click"); }} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0a0f1e] font-bold text-sm transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40">
              Try In-Store Mode Free <ArrowRight size={16} />
            </a>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-72">
              <div className="rounded-[2.5rem] bg-[#0d1526] border border-white/10 overflow-hidden shadow-2xl glow-gold">
                <div className="px-6 pt-4 pb-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400">9:41</span>
                  <div className="flex gap-1"><Wifi size={12} className="text-slate-400" /><span className="text-xs text-slate-400">●●●</span></div>
                </div>
                <div className="mx-4 mb-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 p-3 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0"><Scan size={14} className="text-amber-400" /></div>
                  <div><div className="text-xs font-bold text-amber-400">IN-STORE MODE</div><div className="text-xs text-amber-400/60">Zara · Union Square</div></div>
                  <div className="ml-auto w-2 h-2 rounded-full bg-amber-400 pulse-dot" />
                </div>
                <div className="mx-4 mb-3 rounded-2xl glass border border-white/8 overflow-hidden">
                  <div className="bg-slate-800/60 px-4 py-3 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-700/60 flex items-center justify-center text-2xl">🧥</div>
                    <div className="flex-1"><div className="text-sm font-semibold text-white">Linen Blazer</div><div className="text-xs text-slate-400">Zara · SKU 4821</div></div>
                    <div className="text-right"><div className="text-lg font-black text-white">$129</div></div>
                  </div>
                  <div className="px-4 py-3">
                    <div className="flex items-center gap-2 mb-2"><Sparkles size={12} className="text-blue-400" /><span className="text-xs font-semibold text-blue-400">AI Analysis</span></div>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">You have <span className="text-teal-400 font-semibold">$188 left</span> in clothing this month. This purchase leaves you $59 buffer — just enough if you skip next weekend&apos;s brunch.</p>
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold">✓ Go for it</button>
                      <button className="flex-1 py-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">✗ Skip it</button>
                    </div>
                  </div>
                </div>
                <div className="mx-4 mb-5">
                  <div className="flex justify-between text-xs mb-1.5"><span className="text-slate-500">Clothing budget</span><span className="text-slate-400">$312 / $500</span></div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400" style={{ width: "62%" }} /></div>
                  <div className="text-xs text-slate-600 mt-1">62% used — on track</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl glass-gold flex items-center justify-center float">
              <div className="text-center"><div className="text-2xl font-black text-amber-400">$0</div><div className="text-xs text-amber-400/60">surprise fees</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: "01", icon: CreditCard, title: "Connect Your Accounts", desc: "Securely link your bank and credit cards in under 60 seconds. Read-only access — we can see your transactions, nothing else.", color: "text-blue-400", bg: "bg-blue-500/10" },
    { num: "02", icon: Brain, title: "AI Learns Your Patterns", desc: "FinAI analyzes your spending history, identifies categories, and builds a personalized financial model — just for you.", color: "text-teal-400", bg: "bg-teal-500/10" },
    { num: "03", icon: MessageSquare, title: "Chat. Shop. Save.", desc: "Ask the AI anything, activate in-store mode before you shop, and watch your savings grow as the AI guides every decision.", color: "text-amber-400", bg: "bg-amber-500/10" },
  ];
  return (
    <section id="how" className="py-24 px-6 bg-[#080d1a]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>How It Works</SectionLabel>
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-4">
          Up and running in <span className="gradient-text">three steps.</span>
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16 text-lg">No complex setup. No financial jargon. Just connect, learn, and start saving.</p>
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-blue-500/30 to-teal-500/30" />
          <div className="hidden md:block absolute top-10 left-2/3 right-0 h-px bg-gradient-to-r from-teal-500/30 to-amber-500/30" />
          {steps.map((s) => (
            <div key={s.num} className="relative">
              <div className={`w-20 h-20 rounded-2xl ${s.bg} border border-white/5 flex items-center justify-center mb-6 mx-auto relative z-10`}><s.icon size={32} className={s.color} /></div>
              <div className="text-center">
                <div className="text-5xl font-black text-white/5 mb-1 font-mono">{s.num}</div>
                <h3 className="text-xl font-bold text-white mb-3 -mt-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Maya Chen", role: "Freelance Designer", avatar: "MC", color: "from-blue-500 to-teal-400", stars: 5, quote: "I've tried every budgeting app out there. FinAI is the first one that actually talks to me like a person. The in-store mode saved me from three impulse buys last weekend alone." },
    { name: "Jordan Park", role: "Software Engineer", avatar: "JP", color: "from-purple-500 to-blue-400", stars: 5, quote: "The AI caught that I was slowly creeping over my food budget weeks before I would have noticed. Saved me $400 over two months without me really changing my lifestyle." },
    { name: "Priya Sharma", role: "Marketing Manager", avatar: "PS", color: "from-amber-500 to-rose-400", stars: 5, quote: "In-store mode is genuinely revolutionary. I turned it on at Target and the AI immediately flagged that the item I was buying was cheaper on Amazon. Saved $23 instantly." },
    { name: "Carlos Rivera", role: "Small Business Owner", avatar: "CR", color: "from-teal-500 to-green-400", stars: 5, quote: "I separate personal and business finances with FinAI. The AI understands context and helps me stay compliant with my budget without a spreadsheet in sight." },
  ];
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Testimonials</SectionLabel>
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-4">Real people. <span className="gradient-text">Real savings.</span></h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-14 text-lg">Join thousands of early users who&apos;ve already changed how they think about money.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="glass rounded-2xl p-5 hover-lift hover:bg-white/5 transition-all">
              <div className="flex items-center gap-1 mb-4">{Array.from({ length: r.stars }).map((_, i) => (<Star key={i} size={14} fill="#f59e0b" className="text-amber-400" />))}</div>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">&quot;{r.quote}&quot;</p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}>{r.avatar}</div>
                <div><div className="text-sm font-semibold text-white">{r.name}</div><div className="text-xs text-slate-500">{r.role}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4 group">
        <span className="text-white font-medium group-hover:text-blue-400 transition-colors">{q}</span>
        <ChevronDown size={18} className={`text-slate-500 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180 text-blue-400" : ""}`} />
      </button>
      {open && <p className="text-slate-400 text-sm leading-relaxed pb-5">{a}</p>}
    </div>
  );
}

function FAQ() {
  const faqs = [
    { q: "Is my financial data secure?", a: "Absolutely. FinAI uses bank-level 256-bit encryption and read-only access to your accounts — we can view transactions but cannot move money. We are SOC 2 Type II compliant and never sell your data." },
    { q: "Which banks and accounts does FinAI support?", a: "FinAI connects to over 10,000 financial institutions via Plaid, including all major US banks, credit unions, and credit card providers. International support is expanding." },
    { q: "How does the AI generate spending insights?", a: "FinAI uses a combination of large language models (similar to GPT-4) trained on financial data patterns, combined with your personal transaction history. All AI responses are grounded in your real spending — not generic advice." },
    { q: "Does in-store mode work offline?", a: "Yes! FinAI caches your budget data locally so in-store mode works even with poor connectivity. AI-powered suggestions require a connection but basic budget checks work offline." },
    { q: "How is FinAI different from Mint or YNAB?", a: "Traditional apps track spending passively. FinAI is active — it proactively advises you, answers questions in plain English, and uniquely offers real-time in-store purchase guidance. It's a finance assistant, not just a tracker." },
    { q: "Is there a free plan?", a: "FinAI will launch with a generous free tier covering core AI chat, spending tracking, and basic in-store mode. Early access users lock in premium features at a founding member rate." },
  ];
  return (
    <section id="faq" className="py-24 px-6 bg-[#080d1a]">
      <div className="max-w-3xl mx-auto">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-4">Got questions? <span className="gradient-text">We&apos;ve got answers.</span></h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-12 text-lg">Everything you need to know before joining the waitlist.</p>
        <div className="glass rounded-2xl px-6">
          {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    if (typeof window !== "undefined" && (window as any).posthog) {
      (window as any).posthog.capture("footer_waitlist_submit", { email });
    }
  };
  return (
    <section id="waitlist" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-teal-900/15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm">
          <span className="w-2 h-2 rounded-full bg-teal-400 pulse-dot" />
          <span className="text-slate-300">Limited early access spots available</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">Start spending smarter <span className="gradient-text">today.</span></h2>
        <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed">Join 12,000+ people on the waitlist. Early members get lifetime premium pricing, priority access, and founding member status.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
          {submitted ? (
            <div className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 font-semibold">
              <Check size={18} /> Welcome aboard! Check your inbox.
            </div>
          ) : (
            <>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="flex-1 px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-blue-500/50 transition-all text-sm" />
              <button type="submit" disabled={loading} onClick={() => { if (typeof window !== "undefined" && (window as any).posthog) (window as any).posthog.capture("footer_cta_click"); }} className="px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold text-sm transition-all shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 disabled:opacity-70 whitespace-nowrap">
                {loading ? "Joining…" : "Claim My Spot →"}
              </button>
            </>
          )}
        </form>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          {["Free to join", "No credit card required", "Cancel anytime"].map((item) => (
            <div key={item} className="flex items-center gap-1.5"><Check size={12} className="text-teal-500" />{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center"><Brain size={14} className="text-white" /></div>
            <span className="text-white font-bold">Fin<span className="gradient-text-blue">AI</span></span>
            <span className="text-slate-600 text-sm ml-2">AI-powered personal finance</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} FinAI. All rights reserved.</div>
        </div>
        <div className="gradient-divider mt-8 mb-6" />
        <p className="text-xs text-slate-700 text-center max-w-2xl mx-auto leading-relaxed">FinAI is not a registered investment advisor. The AI-powered insights provided are for informational purposes only and do not constitute financial, investment, or legal advice. Always consult a qualified financial professional before making major financial decisions.</p>
      </div>
    </footer>
  );
}

function Analytics() {
  useEffect(() => {
    import("posthog-js").then(({ default: posthog }) => {
      if (typeof window !== "undefined" && !(posthog as any).__loaded) {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "phc_placeholder", {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
          capture_pageview: true,
          capture_pageleave: true,
          loaded: (ph) => { (window as any).posthog = ph; },
        });
      }
    });
  }, []);
  return null;
}

export default function Page() {
  return (
    <>
      <Analytics />
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Problem />
        <Features />
        <InStoreSpotlight />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
