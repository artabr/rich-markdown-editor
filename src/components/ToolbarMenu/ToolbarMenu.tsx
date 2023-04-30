import * as React from "react";
import { EditorView } from "prosemirror-view";
import { ToolbarButton } from "../ToolbarButton";
import { ToolbarSeparator } from "../ToolbarSeparator";
import { MenuItem } from "../../types";

import css from "./ToolbarMenu.module.scss";

type Props = {
  tooltip: typeof React.Component | React.FC<any>;
  commands: Record<string, any>;
  view: EditorView;
  items: MenuItem[];
};

export class ToolbarMenu extends React.Component<Props> {
  render() {
    const { view, items } = this.props;
    const { state } = view;
    const Tooltip = this.props.tooltip;

    return (
      <div className={css.wrapper}>
        {items.map((item, index) => {
          if (item.name === "separator" && item.visible !== false) {
            return <ToolbarSeparator key={index} />;
          }
          if (item.visible === false || !item.icon) {
            return null;
          }
          const Icon = item.icon;
          const isActive = item.active ? item.active(state) : false;

          return (
            <ToolbarButton
              key={index}
              onClick={() =>
                item.name && this.props.commands[item.name](item.attrs)
              }
              active={isActive}
            >
              <Tooltip tooltip={item.tooltip} placement="top">
                <Icon className={css.icon} />
              </Tooltip>
            </ToolbarButton>
          );
        })}
      </div>
    );
  }
}
