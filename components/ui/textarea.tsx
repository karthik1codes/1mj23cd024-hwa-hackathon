import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[96px] w-full rounded-2xl border border-forest-900/15 bg-cream-50 px-4 py-3 text-sm text-forest-950 shadow-sm placeholder:text-forest-900/40 focus-visible:border-ember-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-400/30 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
