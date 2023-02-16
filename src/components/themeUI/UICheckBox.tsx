/** @jsxImportSource theme-ui */
import React from "react";
import { Flex } from "theme-ui";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-label";
import { useTheme } from "./theme";

type Props = { label: string } & Checkbox.CheckboxProps;

const UICheckbox = React.forwardRef(
  ({ label, ...props }: Props, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const { theme } = useTheme();
    return (
      <Flex dir="row" sx={{ gap: ".75rem" }}>
        <Checkbox.Root
          {...props}
          ref={ref}
          sx={{
            height: "checkbox",
            width: "checkbox",
            borderRadius: theme.radii.small,
            boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.2)",
            outline: "1px solid #dadada",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Checkbox.Indicator
            sx={{
              display: "block",
              width: ".75rem",
              height: ".75rem",
              borderRadius: theme.radii.small,
              backgroundColor: theme.colors.primary,
            }}
          />
        </Checkbox.Root>
        <Label htmlFor={props.id} sx={{ cursor: "pointer", color: "black" }}>
          {label}
        </Label>
      </Flex>
    );
  }
);

export { UICheckbox };
