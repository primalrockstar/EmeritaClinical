import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Check } from "lucide-react"
import fs from "fs"
import path from "path"

export default function PricingPage() {
  const pricingDataPath = path.join(process.cwd(), "data", "pricing.json")
  const pricingPlans = JSON.parse(fs.readFileSync(pricingDataPath, "utf-8"))
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Simple, Transparent Pricing
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Choose the plan that&apos;s right for you. No hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {pricingPlans.map((plan: any) => (
              <Card key={plan.id}>
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.billingPeriod === 'coming_soon' ? 'Coming Soon' : plan.billingPeriod === 'contact' ? 'Contact us for details' : null}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.highlightFeatures.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  {plan.billingPeriod === 'coming_soon' || plan.billingPeriod === 'contact' ? (
                    <Button asChild className="w-full" variant="outline">
                      <Link href={plan.checkoutUrlPlaceholder}>{plan.billingPeriod === 'contact' ? 'Contact Us' : 'Coming Soon'}</Link>
                    </Button>
                  ) : (
                    <Button asChild className="w-full">
                      <a href={plan.checkoutUrlPlaceholder} target="_blank" rel="noopener noreferrer">Buy Now</a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
