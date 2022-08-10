import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import React from "react";

function ToolTip({ title, description, icon ,bgcolor}) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {description}
    </Tooltip>
  );

  return (
    <div>
      
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button   className='tooltip-btn' variant={bgcolor}>
            {" "}
            {icon}
            {title}
          </Button>
        </OverlayTrigger>
   
    </div>
  );
}

export default ToolTip;
