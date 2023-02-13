import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import Logo from "./StitchesLogo";
import {
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  TriggerButton,
} from "./styles";

type Props = {};

const StitchesDialog = (props: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <TriggerButton>
          <Logo width={35} height={35} />
          Show stictches dialog
        </TriggerButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <Tabs.Root defaultValue="tab1">
            <Tabs.List>
              <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">
              <DialogTitle>Title</DialogTitle>
              <DialogDescription>This is a description</DialogDescription>
            </Tabs.Content>
            <Tabs.Content value="tab2">Second tab content</Tabs.Content>
          </Tabs.Root>
          <Dialog.Close />
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default StitchesDialog;
