import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";

type Props = {};

const TailwindDialog = (props: Props) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="select-none rounded-md px-3 py-1 outline outline-2 outline-white transition-all hover:outline-1">
        Show tailwind dialog
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-slate-800 bg-opacity-70" />
      <Dialog.Content
        className={clsx(
          "fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]",
          "h-52 w-1/3 animate-popIn rounded-md bg-white shadow"
        )}
      >
        <Tabs.Root className="w-full" defaultValue="tab1">
          <Tabs.List className="flex w-full flex-row">
            <Tabs.Trigger
              value="tab1"
              className={clsx(
                "w-1/2 border-b-2 border-gray-300 py-2.5 text-black",
                "data-[state=active]:border-blue-500 data-[state=active]:text-blue-500"
              )}
            >
              Tab 1
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab2"
              className={clsx(
                "w-1/2 border-b-2 border-gray-300 text-black",
                "data-[state=active]:border-blue-500 data-[state=active]:text-blue-500"
              )}
            >
              Tab 2
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1" className="py-6 px-10 text-black">
            <Dialog.Title className="font-bold text-black">Title</Dialog.Title>
            <Dialog.Description className="text-gray-500">
              This is a description
            </Dialog.Description>
          </Tabs.Content>
          <Tabs.Content value="tab2" className="py-6 px-10 text-black">
            Second tab content
          </Tabs.Content>
        </Tabs.Root>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default TailwindDialog;
