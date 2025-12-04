import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About EmeritaClinical™ - Engineering Clinical Competence",
  description:
    "EmeritaClinical™ is the digital infrastructure for modern EMS education. We build enterprise-grade platforms that bridge the gap between classroom theory and field reality.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      {/* Hero Section */}
      <section className="hero-gradient grid-overlay py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Engineering Clinical Competence
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              EmeritaClinical™ is the digital infrastructure for modern EMS education. We build enterprise-grade platforms that bridge the gap between classroom theory and field reality.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">Who We Are</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A New Standard for Pre-Hospital Education.
            </h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              EmeritaClinical™ was founded on a single premise: Medicine has evolved, but the tools used to teach it have not.
            </p>
            <p>
              While the clinical demands on providers have increased, educational resources remain static and fragmented. We exist to solve that inefficiency. EmeritaClinical™ is not a publisher; we are a technology company dedicated to the science of learning.
            </p>
            <p>
              We combine advanced software architecture with the National EMS Education Standards to create a unified ecosystem. Our goal is not just to help students pass a test, but to engineer the cognitive reflexes required for the street.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">Our Philosophy</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              From Memorization to Instinct.
            </h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              The gap between "certified" and "field-ready" is the most dangerous space in emergency medicine. Traditional education relies on rote memorization. We rely on simulation and active recall.
            </p>
            <p className="font-semibold text-foreground">
              Our platform is built on three core pillars:
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-white/10">
              <CardContent className="space-y-3 p-6">
                <h3 className="text-xl font-semibold">Cognitive Architecture</h3>
                <p className="text-sm text-muted-foreground">
                  We use adaptive algorithms to optimize retention, ensuring critical data moves from short-term memory to long-term clinical instinct.
                </p>
              </CardContent>
            </Card>
            <Card className="border-white/10">
              <CardContent className="space-y-3 p-6">
                <h3 className="text-xl font-semibold">High-Fidelity Simulation</h3>
                <p className="text-sm text-muted-foreground">
                  We replace static text with dynamic scenarios. Our PCR Report Sim and scenario engines replicate the pressure, timing, and decision-making of live patient care.
                </p>
              </CardContent>
            </Card>
            <Card className="border-white/10">
              <CardContent className="space-y-3 p-6">
                <h3 className="text-xl font-semibold">Enterprise Scalability</h3>
                <p className="text-sm text-muted-foreground">
                  We build tools for institutions. Our platforms are designed to manage research, track compliance, and deliver consistent training at scale.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Ecosystem */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">The Ecosystem</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A Unified Platform.
            </h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              EmeritaClinical™ is a seamless environment where study, simulation, and reference converge.
            </p>
            <p>
              From our foundational EMT-B Core curriculum to our advanced Research Management systems, every tool interacts to form a complete picture of provider competence. We empower educational programs to move away from fragmented apps and paper logs, adopting instead a cohesive, data-driven standard.
            </p>
            <p className="font-semibold text-foreground">
              We provide the technology so you can focus on the patient.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6">
        <Card className="border-white/10">
          <CardContent className="flex flex-col gap-6 p-8 text-center">
            <h3 className="text-3xl font-bold sm:text-4xl">
              Ready to explore EmeritaClinical™?
            </h3>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Contact our team to learn more about how EmeritaClinical™ can transform your EMS education program.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="px-10 text-base">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 px-10 text-base">
                <Link href="/suite">View Platform Suite</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
