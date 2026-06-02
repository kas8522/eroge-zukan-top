import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const AGE_GATE_STORAGE_KEY = "age_verified_v1";

function safeGetAgeVerified(): boolean {
  try {
    return localStorage.getItem(AGE_GATE_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function safeSetAgeVerified(): void {
  try {
    localStorage.setItem(AGE_GATE_STORAGE_KEY, "1");
  } catch {
    // ignore (e.g., storage blocked)
  }
}

export default function AgeGateModal() {
  const [open, setOpen] = React.useState(false);
  const acceptButtonRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (!safeGetAgeVerified()) setOpen(true);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => acceptButtonRef.current?.focus(), 0);
    return () => window.clearTimeout(id);
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const onAccept = React.useCallback(() => {
    safeSetAgeVerified();
    setOpen(false);
  }, []);

  const onLeave = React.useCallback(() => {
    window.location.href = "https://www.google.com/";
  }, []);

  return (
    <Dialog open={open}>
      <DialogContent
        showCloseButton={false}
        className="border-primary/20 bg-white"
        onEscapeKeyDown={(e) => e.preventDefault()}
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-primary">
            年齢確認（18歳以上）
          </DialogTitle>
          <DialogDescription className="text-foreground/80">
            当サイトは成人向けコンテンツ（18歳未満閲覧禁止）を含みます。18歳以上の方のみ閲覧できます。
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-center">
          <Button
            ref={acceptButtonRef}
            className="btn-press w-full sm:w-auto"
            onClick={onAccept}
          >
            18歳以上です
          </Button>
          <Button
            className="btn-press w-full sm:w-auto border-primary/30 text-primary hover:bg-secondary"
            variant="outline"
            onClick={onLeave}
          >
            退場する
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

