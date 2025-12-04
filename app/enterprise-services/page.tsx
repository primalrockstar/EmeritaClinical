import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Server, ShieldAlert, Database, Terminal } from "lucide-react"

export default function EnterpriseServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/emeritabackground.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Image 
              src="/images/EmeritaClinicalEnterprise.png" 
              alt="EmeritaClinical Enterprise Division" 
              width={400} 
              height={120} 
              className="mb-8 h-auto w-auto max-w-[300px]"
              priority
            />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              End-to-End Modernization for Mission-Critical Systems.
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              EmeritaClinical Enterprise Division bridges the past and future of your infrastructure. We specialize in high-assurance Oracle APEX migrations, legacy system stabilization, and greenfield enterprise tooling.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href="#contact">Request Architecture Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-6">
              <ShieldAlert className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Legacy Trap</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Your organization relies on infrastructure built decades ago. The original architects have retired. Modern development teams fear touching the core business logic buried in ancient Oracle Forms, COBOL, or Tandem systems. The risk of downtime increases every day, paralyzing modernization efforts.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Tier 1 */}
            <Card className="border-t-4 border-t-blue-600 shadow-lg">
              <CardHeader>
                <div className="mb-4 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Oracle Forms to APEX Modernization</CardTitle>
                <CardDescription className="text-base mt-2">
                  Don't just re-platform; modernize with confidence. We provide a turnkey service to migrate unsupported Oracle Forms applications to modern, secure Oracle APEX environments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600"><strong>Deep-Dive Audit:</strong> We analyze the legacy codebase to document undocumented business logic.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600"><strong>Precision Build:</strong> We rebuild the application in modern APEX with 100% feature parity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600"><strong>Safe Data Migration:</strong> We ensure data integrity as it moves from legacy schemas to modern architecture.</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <p className="text-sm font-medium text-slate-500">Ideal For: Government, Utilities, and large enterprises stuck on unsupported Oracle stacks.</p>
                </div>
              </CardContent>
            </Card>

            {/* Tier 2 */}
            <Card className="border-t-4 border-t-indigo-600 shadow-lg">
              <CardHeader>
                <div className="mb-4 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Terminal className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Rapid Enterprise Tooling (Greenfield APEX)</CardTitle>
                <CardDescription className="text-base mt-2">
                  When you need secure, scalable internal tools fast, off-the-shelf software rarely fits. We build robust, custom Oracle APEX applications tailored to your specific workflows.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  From complex inventory management to compliance tracking dashboards. We build on top of your existing data foundation, ensuring security and scalability by design.
                </p>
              </CardContent>
            </Card>

            {/* Tier 3 */}
            <Card className="border-t-4 border-t-slate-600 shadow-lg">
              <CardHeader>
                <div className="mb-4 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Server className="w-6 h-6 text-slate-600" />
                </div>
                <CardTitle className="text-xl">Legacy Infrastructure Support Retainer</CardTitle>
                <CardDescription className="text-base mt-2">
                  An insurance policy for your most critical legacy assets. We offer guaranteed availability retainers for unsupported platforms where talent is scarce.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Including Tandem Non-Stop, COBOL, and older SQL Server environments. Ensure you have an expert on call when “keep the lights on” becomes a crisis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Engineered by Experience</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our Enterprise Division is led by architects with over 40 years of experience in high-availability environments, from DoD logistics to financial transaction processing. We do not just know the new technology; we wrote the book on the old technology. This unique full-cycle expertise allows us to de-risk the most complex modernization projects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Start Your Modernization Journey</h2>
              <p className="text-slate-600 mt-2">Schedule a consultation with our enterprise architects.</p>
            </div>
            
            <Card>
              <CardContent className="p-6 md:p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Company</label>
                      <input
                        type="text"
                        id="company"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Acme Corp"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="system-type" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">What type of system are you looking to modernize or support?</label>
                    <select
                      id="system-type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="oracle-forms">Oracle Forms</option>
                      <option value="old-sql-server">Old SQL Server</option>
                      <option value="mainframe-cobol">Mainframe/COBOL</option>
                      <option value="new-custom-tool">New Custom Tool</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="challenge" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Briefly describe your challenge</label>
                    <textarea
                      id="challenge"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="We have a legacy system that needs..."
                      required
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                    Request Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
