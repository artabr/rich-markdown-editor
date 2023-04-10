import * as React from "react";
import scrollIntoView from "smooth-scroll-into-view-if-needed";
import theme from "../../styles/theme";
import cx from "classnames";

import css from "./BlockMenuItem.module.scss";

export type Props = {
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
  theme: typeof theme;
  icon?: typeof React.Component | React.FC<any>;
  title: React.ReactNode;
  shortcut?: string;
  containerId?: string;
};

export const BlockMenuItem = ({
  selected,
  disabled,
  onClick,
  title,
  shortcut,
  icon,
  containerId = "block-menu-container",
}: Props) => {
  const Icon = icon;

  const ref = React.useCallback(
    node => {
      if (selected && node) {
        scrollIntoView(node, {
          scrollMode: "if-needed",
          block: "center",
          boundary: parent => {
            // All the parent elements of your target are checked until they
            // reach the #block-menu-container. Prevents body and other parent
            // elements from being scrolled
            return parent.id !== containerId;
          },
        });
      }
    },
    [selected, containerId]
  );

  return (
    <MenuItem
      selected={selected}
      onClick={disabled ? undefined : onClick}
      ref={ref}
    >
      {Icon && (
        <>
          <Icon
            color={
              selected ? theme.blockToolbarIconSelected : theme.blockToolbarIcon
            }
          />
          &nbsp;&nbsp;
        </>
      )}
      {title}
      {shortcut && <Shortcut>{shortcut}</Shortcut>}
    </MenuItem>
  );
};

type MenuItemProps = {
  selected: boolean;
  onClick?: () => void;
  ref?: React.Ref<HTMLButtonElement>;
};

const MenuItem = (props: React.PropsWithChildren<MenuItemProps>) => {
  return (
    <button
      ref={props.ref}
      className={cx(css.menuItemButton, {
        [css.selected]: props.selected,
      })}
    >
      {props.children}
    </button>
  );
};

const Shortcut: React.FC = props => {
  return <span className={css.shortcut}>{props.children}</span>;
};
