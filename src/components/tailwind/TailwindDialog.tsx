import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";

type Props = {};

const TailwindDialog = (props: Props) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="rounded-md px-3 py-1 outline outline-2 outline-white transition-all hover:outline-1">
        Show tailwind dialog
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-slate-800 bg-opacity-70" />
      <Dialog.Content
        className={clsx(
          "fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]",
          "w-72 animate-popIn rounded-md bg-white py-6 px-10 shadow"
        )}
      >
        <Dialog.Title className="font-bold text-black">Title</Dialog.Title>
        <Dialog.Description className="text-gray-500">
          This is a description
        </Dialog.Description>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default TailwindDialog;
