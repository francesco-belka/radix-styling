/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Box, Button, Close } from "theme-ui";

type Props = {};

const themeuiDialog = (props: Props) => {
  const [activeMode, setActiveMode] = useState<"bg" | "border">("border");
  const [tabsDisabled, setTabsDisabled] = useState(false);
  return (
    <Dialog.Root onOpenChange={() => setTabsDisabled(false)} open>
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
            <Tabs.List sx={{ display: "flex", width: "100%" }}>
              <Tabs.Trigger
                value="tab1"
                activeMode={activeMode}
                disabled={tabsDisabled}
              >
                Main content
              </Tabs.Trigger>
              <Tabs.Trigger
                value="tab2"
                activeMode={activeMode}
                disabled={tabsDisabled}
              >
                Settings
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">
              <Dialog.Title>Title</Dialog.Title>
              <Dialog.Description>This is a description</Dialog.Description>
            </Tabs.Content>
            <Tabs.Content value="tab2">
              <Checkbox.Root
                id="activeCheckbox"
                checked={activeMode == "bg"}
                onCheckedChange={(checked) =>
                  setActiveMode(checked ? "bg" : "border")
                }
                label={"Set active tab variant"}
              />
              <Checkbox.Root
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



type TriggerProps = {
  value: string;
  variant?: ;
} & Tabs.TabsTriggerProps;

const TabsTrigger = React.forwardRef(
  (
    { children, value, variant, disabled, ...props }: TriggerProps,
    forwardedRef: React.ForwardedRef<HTMLButtonElement>
  ) => (
    <Box variant=""
  ))
