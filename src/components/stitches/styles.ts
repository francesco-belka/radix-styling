import * as Dialog from "@radix-ui/react-dialog";
import { keyframes, styled } from "../../../stitches.config";
import * as Tabs from "@radix-ui/react-tabs";

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
  borderRadius: "6px",
  width: "33%",
  height: "13rem",
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
export const TabsRoot = styled(Tabs.Root, {
  position: "relative",
  height: "100%",
  width: "100%",
  overflow: "hidden",
  borderRadius: 8,
  backgroundColor: "White",
});
export const TabsList = styled(Tabs.List, {
  display: "flex",
  width: "100%",
  borderRadius: "6px 6px 0 0 ",
});
export const TabsTrigger = styled(Tabs.Trigger, {
  width: "100%",
  borderBottom: "2px solid rgb(209, 213, 219)",
  paddingY: "10px",
  color: "Black",
  '&[data-state="active"]': {
    borderColor: "$primary",
  },
  "&:disabled": {
    color: "rgb(156,163,175)",
  },
  variants: {
    activeMode: {
      bg: {
        '&[data-state="active"]': {
          backgroundColor: "$primary",
          color: "White",
        },
      },
      border: {
        '&[data-state="active"]': {
          color: "$primary",
        },
      },
    },
    // Non ho utilizzato disabled qui come variante perchè veniva catturata
    // da stitches e quindi non passata come prop al componente
  },
});

export const MainTab = styled(Tabs.Content, {
  paddingY: "1.5rem",
  paddingX: "2.5rem",
});
export const SettingsTab = styled(Tabs.Content, {
  display: "flex",
  height: "100%",
  flexFlow: "column nowrap",
  justifyContent: "center",
  gap: 16,
  paddingX: "2.5rem",
});

export const DialogClose = styled(Dialog.Close, {
  position: "absolute",
  top: -20,
  right: -20,
  zIndex: 10,
  borderRadius: 999,
  backgroundColor: "rgba(220,38,38,1)",
  paddingX: "1rem",
  paddingBottom: 6,
  fontWeight: 600,
  color: "Black",
  fontSize: "1.5rem",
  "&:hover": {
    backgroundColor: "Red",
  },
});
