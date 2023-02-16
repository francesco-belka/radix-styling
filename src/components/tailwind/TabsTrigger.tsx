import * as Tabs from "@radix-ui/react-tabs";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

type TriggerProps = {
  value: string;
  variant?: VariantProps<typeof trigger>;
} & Tabs.TabsTriggerProps;

// ForwardRef per compatibilità con radix penso?
const TabsTrigger = React.forwardRef(
  (
    { children, value, variant, disabled, ...props }: TriggerProps,
    forwardedRef: React.ForwardedRef<HTMLButtonElement>
  ) => (
    <Tabs.Trigger
      {...props}
      disabled={disabled}
      value={value}
      ref={forwardedRef}
      className={trigger({ ...variant, disabled })} // Uso la prop disabled per selezionare la variante disabled
    >
      {children}
    </Tabs.Trigger>
  )
);

export { TabsTrigger };

const trigger = cva(
  "w-full border-b-2 border-gray-300 py-2.5 data-[state=active]:border-primary",
  {
    variants: {
      activeMode: {
        bg: [
          "data-[state=active]:bg-primary",
          "data-[state=active]:text-white",
        ],
        border: ["data-[state=active]:text-primary"],
      },
      disabled: {
        false: "text-black",
        true: "text-gray-400",
      },
    },
    defaultVariants: {
      disabled: false,
      activeMode: "border",
    },
  }
);
