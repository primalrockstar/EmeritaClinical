import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles, Zap, Award, Clock, TrendingUp, Shield, Users } from "lucide-react"
import { LandingPageClient, TrackableButton } from "./landing-client"

export const metadata = {
  title: "Pass Your NREMT First Try | EmeritaClinical - $36.75",
  description: "Built by an EMS student for EMS students. EMT-B Core, ChapterFlashEMT, and PCR Trainer PRO—instant access, one-time payment.",
}

export default function LandingPage() {
  return (
    <>
      <LandingPageClient />
      <div className="flex min-h-screen flex-col bg-slate-950">
      {/* Hero Section - Bold Gradient */}
      <section className="relative overflow-hidden px-4 py-24 md:py-32 lg:py-40">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThzLTE4LTguMDU5LTE4LTE4IDguMDU5LTE4IDE4LTE4IDE4IDguMDU5IDE4IDE4Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="flex flex-col items-center space-y-8 text-center">
            {/* Trust Badge */}
            <div className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/30">
              <Award className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium text-white">Built by an EMS student, trusted by future paramedics</span>
            </div>

            {/* Massive Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Pass Your NREMT.
                <br />
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(253,224,71,0.5)]">
                  First Try. Guaranteed.
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-xl font-medium text-blue-100 md:text-2xl">
                Three professional study tools. One price. <br className="hidden sm:block" />
                <span className="text-white">Built by an EMS student who actually gets it.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <a href="https://buy.stripe.com/5kA6s03xJ0Mv0Ve4gj" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group relative overflow-hidden bg-white px-10 py-7 text-lg font-bold text-blue-700 shadow-2xl transition-all hover:scale-105 hover:bg-blue-50 hover:shadow-white/20">
                  <Zap className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Get All Three Apps - $36.75
                </Button>
              </a>
              <Link href="/apps">
                <Button size="lg" variant="outline" className="border-2 border-white/30 bg-white/5 px-8 py-7 text-lg font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/50">
                  See What's Inside
                </Button>
              </Link>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-blue-100">
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Check className="h-4 w-4 text-yellow-300" />
                <span>Code <span className="font-bold text-yellow-300">HOLIDAY25</span></span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Clock className="h-4 w-4 text-yellow-300" />
                <span>Instant access</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Shield className="h-4 w-4 text-yellow-300" />
                <span>No subscriptions, ever</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </section>

      {/* What You Get - Clean Cards */}
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-400">The Complete Package</p>
            <h2 className="mb-4 text-4xl font-black text-white sm:text-5xl md:text-6xl">
              Everything you need to pass NREMT
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-400">
              Three powerful apps, one simple price. No tricks, no monthly fees.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* EMT-B Core */}
            <Card className="group relative overflow-hidden border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 transition-all hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <CardHeader className="relative">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">EMT-B Core</CardTitle>
                <p className="text-slate-400">The flagship curriculum with 41 chapters, quizzes, and NREMT simulations.</p>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <span>41 instructor-aligned chapters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <span>Scenario + quiz mode</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <span>NREMT-style simulations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* ChapterFlashEMT */}
            <Card className="group relative overflow-hidden border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 transition-all hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <CardHeader className="relative">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                  <Sparkles className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">ChapterFlashEMT</CardTitle>
                <p className="text-slate-400">Intelligent spaced-repetition flashcards synced for EMT-B.</p>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" />
                    <span>Spaced repetition cycles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" />
                    <span>700+ EMT-B prompts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" />
                    <span>Syncs with Core EMT</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* PCR Trainer PRO */}
            <Card className="group relative overflow-hidden border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 transition-all hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <CardHeader className="relative">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">PCR Trainer PRO</CardTitle>
                <p className="text-slate-400">Advanced documentation engine. Master the Patient Care Report.</p>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                    <span>Realistic ePCR workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                    <span>Automated QA scoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                    <span>Scenario-linked prompts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Spotlight - High Energy */}
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-red-950/20 to-slate-950"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/20 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-red-400">Limited Time Offer</p>
            <h2 className="mb-4 text-4xl font-black text-white sm:text-5xl md:text-6xl">
              Get the bundle and save
            </h2>
            <p className="text-xl text-slate-400">Why buy one when you can own all three?</p>
          </div>

          <Card className="relative overflow-hidden border-red-500/40 bg-gradient-to-b from-slate-900 to-slate-950 shadow-[0_0_60px_rgba(239,68,68,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-amber-500/10"></div>
            
            <CardContent className="relative p-8 md:p-12">
              {/* Holiday Badge */}
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-amber-500 px-6 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-lg">
                <Sparkles className="mr-2 h-4 w-4" />
                25% OFF HOLIDAY SPECIAL
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <p className="mb-2 text-lg text-slate-500 line-through">$49.00</p>
                <p className="mb-2 text-7xl font-black text-white md:text-8xl">$36.75</p>
                <p className="text-lg text-slate-400">
                  one-time payment • use code <span className="font-mono font-bold text-yellow-300">HOLIDAY25</span>
                </p>
              </div>

              {/* Features */}
              <div className="mb-8 space-y-3">
                <p className="flex items-center justify-center gap-3 text-lg text-white">
                  <Check className="h-5 w-5 text-green-400" />
                  All 3 premium apps included
                </p>
                <p className="flex items-center justify-center gap-3 text-lg text-white">
                  <Check className="h-5 w-5 text-green-400" />
                  Instant Stripe delivery
                </p>
                <p className="flex items-center justify-center gap-3 text-lg text-white">
                  <Check className="h-5 w-5 text-green-400" />
                  Lifetime access, all future updates
                </p>
              </div>

              {/* CTA */}
              <a href="https://buy.stripe.com/5kA6s03xJ0Mv0Ve4gj" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group w-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-7 text-xl font-bold text-white shadow-2xl transition-all hover:scale-105 hover:from-red-500 hover:to-red-400 md:w-auto md:px-16">
                  <Zap className="mr-2 h-6 w-6 transition-transform group-hover:scale-110" />
                  Get Full Bundle – $36.75
                </Button>
              </a>

              <p className="mt-6 text-sm text-slate-500">
                Or buy individual apps for $29 each on the{" "}
                <Link href="/apps" className="text-blue-400 underline hover:text-blue-300">
                  apps page
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA - Clean & Confident */}
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-black text-white sm:text-5xl md:text-6xl">
            Ready to pass your NREMT?
          </h2>
          <p className="mb-10 text-xl text-slate-400 md:text-2xl">
            Join EMS students using EmeritaClinical to study smarter and pass faster.
          </p>
          <a href="https://buy.stripe.com/5kA6s03xJ0Mv0Ve4gj" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 px-12 py-7 text-xl font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-blue-500">
              Get Instant Access – $36.75
            </Button>
          </a>
          <p className="mt-6 text-sm text-slate-500">
            Questions?{" "}
            <Link href="/contact" className="text-blue-400 underline hover:text-blue-300">
              Contact us
            </Link>
          </p>
        </div>
      </section>
      </div>
    </>
  )
}
