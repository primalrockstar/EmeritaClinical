"use client"

import { Button } from "@/components/ui/button"

interface CheckoutButtonProps {
  priceId: string
  label?: string
  className?: string
}

export default function CheckoutButton({ priceId, label = "Buy Now", className }: CheckoutButtonProps) {
  async function handleClick() {
    if (!priceId) {
      alert("Invalid price configuration. Please try again later.")
      return
    }
    try {
      const res = await fetch("/api/stripe/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId,
          successUrl: window.location.origin + "/landing?success=true",
          cancelUrl: window.location.origin + "/landing?canceled=true",
        }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert("Unable to start checkout. Contact payments@emeritaclinical.com.")
      }
    } catch (e: any) {
      alert("Checkout error: " + e.message)
    }
  }

  return (
    <Button className={className} onClick={handleClick}>
      {label}
    </Button>
  )
}
