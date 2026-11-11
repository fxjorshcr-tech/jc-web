"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

interface SentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: React.ReactNode;
  /** Extra detail under the description, e.g. the booking code. */
  children?: React.ReactNode;
  /** Secondary action next to the close button. */
  action?: React.ReactNode;
}

/** "Message sent" confirmation shown on top of a form once the server has accepted it. */
export function SentDialog({ open, onOpenChange, title, description, children, action }: SentDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="text-center">
        <div className="mx-auto grid size-14 place-items-center rounded-full bg-olive-100 text-olive-700 ring-8 ring-olive-50">
          <Check className="size-7" strokeWidth={2.25} aria-hidden />
        </div>
        <p className="eyebrow mt-6">Message sent</p>
        <DialogTitle className="mt-2">{title}</DialogTitle>
        <DialogDescription className="mt-3">{description}</DialogDescription>
        {children}
        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
          {action}
          <DialogClose asChild>
            <Button size="lg" className="sm:min-w-36">
              Done
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
