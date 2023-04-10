import * as React from "react";
import cx from "classnames";
import ImageZoom from "react-medium-image-zoom";
import { Node } from "prosemirror-model";
import { DownloadIcon } from "outline-icons";

import css from "./Image.module.scss";

type Props = {
  isSelected: boolean;
  node: Node;
  handleSelect: (event) => void;
  handleDownload: (event) => void;
  handleKeyDown: (event) => void;
  handleBlur: (event) => void;
  imageCaptionPlaceholder?: string;
};

export const Image: React.FC<Props> = props => {
  const {
    isSelected,
    handleSelect,
    handleDownload,
    handleKeyDown,
    handleBlur,
    imageCaptionPlaceholder,
  } = props;
  const { alt, src, title, layoutClass } = props.node.attrs;
  const className = layoutClass ? `image image-${layoutClass}` : "image";

  return (
    <div contentEditable={false} className={className}>
      <span
        className={cx(css.imageWrapper, {
          ["ProseMirror-selectednode"]: isSelected,
        })}
        onClick={handleSelect}
      >
        <button className={css.button}>
          <DownloadIcon color="currentColor" onClick={handleDownload} />
        </button>
        <ImageZoom
          image={{
            src,
            alt,
            title,
          }}
          // TODO: remove inline styles
          defaultStyles={{
            overlay: {
              backgroundColor: "#FFFFFF",
            },
          }}
          shouldRespectMaxDimension
        />
      </span>
      <p
        className={cx(css.caption, "caption")}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        tabIndex={-1}
        role="textbox"
        contentEditable
        suppressContentEditableWarning
        data-caption={imageCaptionPlaceholder}
      >
        {alt}
      </p>
    </div>
  );
};
