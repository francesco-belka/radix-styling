import * as Dialog from "@radix-ui/react-dialog";
import { keyframes, styled } from "@stitches/react";

type Props = {};

const StitchesDialog = (props: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <TriggerButton>Show stictches dialog</TriggerButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Such a title</DialogTitle>
          <DialogDescription>This is a description too</DialogDescription>
          <Dialog.Close />
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default StitchesDialog;

const TriggerButton = styled("button", {
  padding: ".25rem .75rem",
  outline: "2px solid white",
  borderRadius: "6px",
  transition: "all .2s",
  "&:hover": {
    outlineWidth: "1px",
  },
  userSelect: "none",
});

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: "rgba(30, 41, 59,.7)",
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const DialogContent = styled(Dialog.Content, {
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

const DialogTitle = styled(Dialog.Title, {
  fontSize: "1rem",
  color: "Black",
  fontWeight: "bold",
});

const DialogDescription = styled(Dialog.Description, {
  color: "#6b7280",
});
