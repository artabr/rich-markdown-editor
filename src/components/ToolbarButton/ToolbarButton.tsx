import * as React from "react";

import css from "./ToolbarButton.module.scss";

import cx from "classnames";

type Props = { active?: boolean; disabled?: boolean; onClick?: () => void };

export const ToolbarButton = (props: React.PropsWithChildren<Props>) => {
  const { active, disabled, onClick } = props;
  return (
    <button
      className={cx(css.toolbarButton, { [css.active]: active })}
      disabled={disabled}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};
