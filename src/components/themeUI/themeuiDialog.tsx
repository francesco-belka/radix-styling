/** @jsxImportSource theme-ui */
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import { Button, Close } from "theme-ui";
import { UICheckbox } from "./UICheckBox";
import { TabsTrigger } from "./UITrigger";
import { keyframes } from "@emotion/react";

type Props = {};

const themeuiDialog = (props: Props) => {
  const [activeMode, setActiveMode] = useState<"bg" | "border">("border");
  const [tabsDisabled, setTabsDisabled] = useState(false);
  return (
    <Dialog.Root onOpenChange={() => setTabsDisabled(false)}>
      <Dialog.Trigger asChild>
        <Button variant="trigger" backgroundColor="transparent">
          <img src="./logo.png" width={35} height={35}></img>
          Show stictches dialog
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          sx={{
            backgroundColor: "rgba(30, 41, 59,.7)",
            position: "fixed",
            inset: 0,
            animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
          }}
        />
        <Dialog.Content
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "medium",
            width: "33%",
            height: "13rem",
            animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
          }}
        >
          <Dialog.Close asChild>
            <Close
              sx={{
                position: "absolute",
                zIndex: 10,
                right: -20,
                top: -20,
                backgroundColor: "rgba(220,38,38,1)",
                "&:hover": {
                  backgroundColor: "Red",
                },
              }}
            />
          </Dialog.Close>
          <Tabs.Root
            defaultValue="tab1"
            sx={{
              position: "relative",
              height: "100%",
              width: "100%",
              overflow: "hidden",
              borderRadius: 8,
              backgroundColor: "White",
            }}
          >
            <Tabs.List
              sx={{
                display: "flex",
                width: "100%",
                borderRadius: "6px 6px 0 0 ",
              }}
            >
              <TabsTrigger
                value="tab1"
                activeMode={activeMode}
                disabled={tabsDisabled}
              >
                Main content
              </TabsTrigger>
              <TabsTrigger
                value="tab2"
                activeMode={activeMode}
                disabled={tabsDisabled}
              >
                Settings
              </TabsTrigger>
            </Tabs.List>
            <Tabs.Content
              value="tab1"
              sx={{ paddingY: "1.5rem", paddingX: "2.5rem" }}
            >
              <Dialog.Title
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Title
              </Dialog.Title>
              <Dialog.Description sx={{ color: "#6b7280" }}>
                This is a description
              </Dialog.Description>
            </Tabs.Content>
            <Tabs.Content
              value="tab2"
              sx={{
                display: "flex",
                height: "100%",
                flexFlow: "column nowrap",
                justifyContent: "center",
                gap: 16,
                paddingX: "2.5rem",
              }}
            >
              <UICheckbox
                id="activeCheckbox"
                checked={activeMode == "bg"}
                onCheckedChange={(checked) =>
                  setActiveMode(checked ? "bg" : "border")
                }
                label={"Set active tab variant"}
              />
              <UICheckbox
                id="disabledCheckbox"
                checked={tabsDisabled}
                onCheckedChange={(checked) => setTabsDisabled(!!checked)}
                label={"Disable tabs"}
              />
            </Tabs.Content>
          </Tabs.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default themeuiDialog;

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});
