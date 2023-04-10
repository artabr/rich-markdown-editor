import * as React from "react";

import css from "./ToolbarButton.module.scss";

import cx from "classnames";

type Props = { active?: boolean; disabled?: boolean };

export const ToolbarButton = (props: Props) => {
  return (
    <button
      className={cx(css.toolbarButton, { [css.active]: props.active })}
      disabled={props.disabled}
    />
  );
};
