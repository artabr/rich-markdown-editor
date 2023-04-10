import * as React from "react";
import scrollIntoView from "smooth-scroll-into-view-if-needed";
import cx from "classnames";

import css from "./LinkSearchResult.module.scss";

type Props = {
  onClick: (event: React.MouseEvent) => void;
  onMouseOver: (event: React.MouseEvent) => void;
  icon: React.ReactNode;
  selected: boolean;
  title: string;
  subtitle?: string;
};

export function LinkSearchResult({
  title,
  subtitle,
  selected,
  icon,
  ...rest
}: Props) {
  const ref = React.useCallback(
    node => {
      if (selected && node) {
        scrollIntoView(node, {
          scrollMode: "if-needed",
          block: "center",
          boundary: parent => {
            // All the parent elements of your target are checked until they
            // reach the #link-search-results. Prevents body and other parent
            // elements from being scrolled
            return parent.id !== "link-search-results";
          },
        });
      }
    },
    [selected]
  );

  return (
    <li
      className={cx(css.listItem, {
        [css.compact]: !subtitle,
        [css.selected]: selected,
      })}
      ref={ref}
      {...rest}
    >
      <span className={css.iconWrapper}>{icon}</span>
      <div>
        <div className={css.title}>{title}</div>
        {subtitle ? (
          <div className={cx(css.subtitle, { [css.selected]: selected })}>
            {subtitle}
          </div>
        ) : null}
      </div>
    </li>
  );
}
