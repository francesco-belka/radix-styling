import * as Dialog from "@radix-ui/react-dialog";
// import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { StitchesCheckbox } from "./StitchesCheckbox";
import Logo from "./StitchesLogo";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  MainTab,
  SettingsTab,
  TabsList,
  TabsRoot,
  TabsTrigger,
  TriggerButton,
} from "./styles";

type Props = {};

const StitchesDialog = (props: Props) => {
  const [activeMode, setActiveMode] = useState<"bg" | "border">("border");
  const [tabsDisabled, setTabsDisabled] = useState(false);
  return (
    <Dialog.Root onOpenChange={() => setTabsDisabled(false)}>
      <Dialog.Trigger asChild>
        <TriggerButton>
          <Logo width={35} height={35} />
          Show stictches dialog
        </TriggerButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>x</DialogClose>
          <TabsRoot defaultValue="tab1">
            <TabsList>
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
            </TabsList>
            <MainTab value="tab1">
              <DialogTitle>Title</DialogTitle>
              <DialogDescription>This is a description</DialogDescription>
            </MainTab>
            <SettingsTab value="tab2">
              <StitchesCheckbox
                id="activeCheckbox"
                checked={activeMode == "bg"}
                onCheckedChange={(checked) =>
                  setActiveMode(checked ? "bg" : "border")
                }
                label={"Set active tab variant"}
              />
              <StitchesCheckbox
                id="disabledCheckbox"
                checked={tabsDisabled}
                onCheckedChange={(checked) => setTabsDisabled(!!checked)}
                label={"Disable tabs"}
              />
            </SettingsTab>
          </TabsRoot>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default StitchesDialog;
