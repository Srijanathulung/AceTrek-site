import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import React from "react";
import Tooltipobj from "./TooltipObj";
// import { valueContainerCSS } from "react-select/dist/declarations/src/components/containers";

function ToolTip() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      The trip in this category has departure dates all year round. All the
      dates are guaranteed to run.
    </Tooltip>
  );

  return (
    <>
    { Tooltipobj.map(tooltipData =>(
      <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button>{tooltipData.tiptitle}</Button>
    </OverlayTrigger>
    ))
    
}
    </>
  );
}

export default ToolTip;
