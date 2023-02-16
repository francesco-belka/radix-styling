/** @jsxImportSource theme-ui */
import * as Tabs from "@radix-ui/react-tabs";
import React from "react";

type TriggerProps = {
  value: string;
  activeMode: "bg" | "border";
} & Tabs.TabsTriggerProps;

const TabsTrigger = React.forwardRef(
  (
    { children, value, activeMode, ...props }: TriggerProps,
    forwardedRef: React.ForwardedRef<HTMLButtonElement>
  ) => (
    <Tabs.Trigger
      {...props}
      value={value}
      ref={forwardedRef}
      sx={{
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
        variant: "tabs." + activeMode,
      }}
    >
      {children}
    </Tabs.Trigger>
  )
);
export { TabsTrigger };
