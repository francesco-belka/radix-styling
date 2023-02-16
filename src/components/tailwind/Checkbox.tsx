import * as Checkbox from "@radix-ui/react-checkbox";
import * as Label from "@radix-ui/react-label";

type Props = { label: string } & Checkbox.CheckboxProps;

const CustomCheckbox = ({ label, ...props }: Props) => (
  <div className="flex flex-row gap-3">
    <Checkbox.Root
      {...props}
      className="flex h-6 w-6 items-center justify-center rounded-md shadow-md outline outline-1 outline-gray-300"
    >
      <Checkbox.Indicator className="h-3 w-3 rounded-sm bg-blue-500" />
    </Checkbox.Root>
    <Label.Root htmlFor={props.id} className="cursor-pointer text-black">
      {label}
    </Label.Root>
  </div>
);

export { CustomCheckbox };
