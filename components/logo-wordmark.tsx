import { cn } from "@/lib/utils"

type LogoWordmarkProps = {
  className?: string
  size?: "sm" | "md" | "lg"
  subtitle?: string | null
  align?: "left" | "center" | "right"
  glow?: boolean
}

const sizeStyles: Record<NonNullable<LogoWordmarkProps["size"]>, string> = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
}

export function LogoWordmark({
  className,
  size = "md",
  subtitle = "EMS SUITE",
  align = "left",
  glow = false,
}: LogoWordmarkProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : align === "right"
        ? "items-end text-right"
        : "items-start text-left"

  return (
    <span className={cn("inline-flex flex-col leading-none gap-1", alignment, className)}>
      <span
        className={cn(
          "font-black uppercase tracking-tight",
          sizeStyles[size],
          glow && "drop-shadow-[0_6px_25px_rgba(59,130,246,0.55)]"
        )}
      >
        <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
          Emerita
        </span>
        <span className="text-foreground ml-1">Clinical</span>
      </span>
      {subtitle !== null && (
        <span className="text-[0.6rem] font-semibold tracking-[0.4em] text-muted-foreground/70">
          {subtitle}
        </span>
      )}
    </span>
  )
}
