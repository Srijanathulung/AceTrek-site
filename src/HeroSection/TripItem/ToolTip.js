import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import React from 'react'

function ToolTip() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      The trip in this category has departure dates all year round. All the dates are guaranteed to run.
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="success">  <i class="fa fa-check" aria-hidden="true"></i>ALL DEPARTURE GURANTEED</Button>
    </OverlayTrigger>
  );
}

export default ToolTip;