import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import clsx from "clsx";
import { TabsTrigger } from "./TabsTrigger";
import { useState } from "react";
import { CustomCheckbox } from "./Checkbox";
import Logo from "./twLogo";

type Props = {};

const TailwindDialog = ({}: Props) => {
  const [activeMode, setActiveMode] = useState<"bg" | "border">("border");
  const [tabsDisabled, setTabsDisabled] = useState(false);
  return (
    <Dialog.Root onOpenChange={() => setTabsDisabled(false)}>
      <Dialog.Trigger asChild>
        <button className="flex h-14 select-none flex-row items-center gap-3 rounded-md px-3 outline outline-1 outline-white hover:outline-2">
          <Logo width={40} height={40} />
          Show tailwind dialog
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-slate-800 bg-opacity-70" />
        <Dialog.Content
          className={clsx(
            "fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]",
            "h-52 w-1/3 animate-popIn rounded-md  shadow"
          )}
        >
          <Dialog.Close className="absolute -top-5 -right-5 z-10 rounded-full bg-red-500 px-3 pb-1.5 text-2xl font-semibold text-black hover:bg-red-600">
            x
          </Dialog.Close>
          <Tabs.Root
            className="relative flex h-full w-full flex-col overflow-hidden rounded-lg bg-white"
            defaultValue="tab1"
          >
            <Tabs.List className="flex w-full flex-row rounded-t-md">
              <TabsTrigger
                value="tab1"
                variant={{ activeMode }}
                disabled={tabsDisabled}
              >
                Main content
              </TabsTrigger>
              <TabsTrigger
                value="tab2"
                variant={{ activeMode }}
                disabled={tabsDisabled}
              >
                Settings
              </TabsTrigger>
            </Tabs.List>
            <Tabs.Content value="tab1" className="py-6 px-10 text-black">
              <Dialog.Title className="font-bold text-black">
                Title
              </Dialog.Title>
              <Dialog.Description className="text-gray-500">
                This is a description
              </Dialog.Description>
            </Tabs.Content>
            <Tabs.Content
              value="tab2"
              className="flex h-full flex-col justify-center gap-4 px-10 text-black"
            >
              <CustomCheckbox
                id="activeCheckbox"
                checked={activeMode == "bg"}
                onCheckedChange={(checked) =>
                  setActiveMode(checked ? "bg" : "border")
                }
                label={"Set active tab variant"}
              />
              <CustomCheckbox
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

export default TailwindDialog;
