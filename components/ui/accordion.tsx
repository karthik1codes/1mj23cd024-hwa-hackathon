"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "overflow-hidden rounded-3xl border border-forest-900/10 bg-cream-50/80 transition-colors data-[state=open]:border-forest-900/20 data-[state=open]:bg-cream-50 data-[state=open]:shadow-soft",
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-start justify-between gap-6 px-6 py-5 text-left font-sans text-[1.02rem] font-semibold leading-snug text-forest-950 transition-all hover:text-forest-700",
        className,
      )}
      {...props}
    >
      {children}
      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-forest-900/15 bg-cream-100 text-forest-800 transition-all duration-300 group-hover:border-forest-900/30 group-data-[state=open]:rotate-45 group-data-[state=open]:border-forest-900 group-data-[state=open]:bg-forest-900 group-data-[state=open]:text-cream-50">
        <Plus className="size-4 transition-transform duration-300" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div
      className={cn(
        "px-6 pb-6 pr-16 text-[0.95rem] leading-relaxed text-forest-900/70",
        className,
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
