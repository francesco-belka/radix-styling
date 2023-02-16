import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Label from "@radix-ui/react-label";
import { styled } from "../../../stitches.config";

type Props = { label: string } & Checkbox.CheckboxProps;

const StitchesCheckbox = React.forwardRef(
  ({ label, ...props }: Props, ref: React.ForwardedRef<HTMLButtonElement>) => (
    <Container>
      <StyledCheckbox {...props} ref={ref}>
        <Indicator />
      </StyledCheckbox>
      <TheLabel htmlFor={props.id}>{label}</TheLabel>
    </Container>
  )
);

export { StitchesCheckbox };

const Container = styled("div", {
  display: "flex",
  flexFlow: "row nowrap",
  gap: ".75rem",
});

const StyledCheckbox = styled(Checkbox.Root, {
  $$size: "1.5rem",
  display: "flex",
  height: "$$size",
  width: "$$size",
  borderRadius: 4,
  boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.2)",
  outline: "1px solid #dadada",
  alignItems: "center",
  justifyContent: "center",
});
const Indicator = styled(Checkbox.Indicator, {
  $$size: "0.75rem",
  height: "$$size",
  width: "$$size",
  borderRadius: 2,
  backgroundColor: "$primary",
});
const TheLabel = styled(Label.Root, {
  cursor: "pointer",
  color: "Black",
});
