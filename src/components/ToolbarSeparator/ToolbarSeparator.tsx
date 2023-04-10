import * as React from "react";

import css from "./ToolbarSeparator.module.scss";

export const ToolbarSeparator: React.FC = props => {
  return <div className={css.toolbarButton}>{props.children}</div>;
};
