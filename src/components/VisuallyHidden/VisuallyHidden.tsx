import * as React from "react";

import css from "./VisuallyHidden.module.scss";

export const VisuallyHidden: React.FC = props => {
  return <span className={css.visuallyHidden}>{props.children}</span>;
};
