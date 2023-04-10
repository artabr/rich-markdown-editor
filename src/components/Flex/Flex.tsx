import * as React from "react";

import cx from "classnames";

import css from "./Flex.module.scss";

type JustifyValues =
  | "center"
  | "space-around"
  | "space-between"
  | "flex-start"
  | "flex-end";

type AlignValues =
  | "stretch"
  | "center"
  | "baseline"
  | "flex-start"
  | "flex-end";

type Props = {
  style?: React.CSSProperties;
  column?: boolean;
  align?: AlignValues;
  justify?: JustifyValues;
  auto?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const Flex: React.FC<Props> = props => {
  return (
    <div
      // TODO: remove inline style
      style={{
        alignItems: props.align,
        justifyContent: props.justify,
      }}
      className={cx(css.flex, {
        [css.column]: props.column,
        [css.auto]: props.auto,
      })}
    >
      {props.children}
    </div>
  );
};
