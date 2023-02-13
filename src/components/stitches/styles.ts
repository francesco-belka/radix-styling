import * as Dialog from "@radix-ui/react-dialog";
import { keyframes, styled } from "@stitches/react";

export const TriggerButton = styled("button", {
  padding: ".25rem .75rem",
  height: "3.5rem",
  outline: "1px solid white",
  borderRadius: "6px",
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  gap: "12px",
  "&:hover": {
    outlineWidth: "2px",
  },
  userSelect: "none",
});

export const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: "rgba(30, 41, 59,.7)",
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const DialogContent = styled(Dialog.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "White",
  padding: "1.5rem 2.5rem",
  borderRadius: "6px",
  width: "33%",
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const DialogTitle = styled(Dialog.Title, {
  fontSize: "1rem",
  color: "Black",
  fontWeight: "bold",
});

export const DialogDescription = styled(Dialog.Description, {
  color: "#6b7280",
});
