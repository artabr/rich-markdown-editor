import * as React from "react";
import { BlockMenuItem, Props as BlockMenuItemProps } from "../BlockMenuItem";
import cx from "classnames";

import css from "./EmojiMenuItem.module.scss";

const EmojiTitle = ({
  emoji,
  title,
}: {
  emoji: React.ReactNode;
  title: React.ReactNode;
}) => {
  return (
    <p>
      <span className={cx(css.emoji, "emoji")}>{emoji}</span>
      &nbsp;&nbsp;
      {title}
    </p>
  );
};

type EmojiMenuItemProps = Omit<BlockMenuItemProps, "shortcut" | "theme"> & {
  emoji: string;
};

export function EmojiMenuItem(props: EmojiMenuItemProps) {
  return (
    <BlockMenuItem
      {...props}
      title={<EmojiTitle emoji={props.emoji} title={props.title} />}
    />
  );
}
