import React from "react";
import "./trip.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Freedom from "../../assets/freedom.jpeg";
import ReactTooltip from "react-tooltip";
// import CheckIcon from '@mui/material-icons/Check';

const Trip = () => {
  return (
    <div className="trip-item_wrapper">
      <div className="row">
        <div className="col-6 trip-item">
          <div className="first-trip_item">
            <Card style={{ width: "100%" }}>
              <div className="card-image">
                <Card.Img variant="top" src={Freedom} alt="feel freedom" />
                <button className="tooltip-btn" data-tip data-for="registerTip">
                  {/* <CheckIcon /> */}<i class="fa fa-check" aria-hidden="true"></i>
                  ALL DEPARTURE GURANTEED
                </button>

                <ReactTooltip id="registerTip" place="top" effect="solid" className="tooltip-content">
                  The trip is in this category.this is tooltip
                </ReactTooltip>
              </div>
              <Card.Body>
                <Card.Title>Everest Base Camp Trek – 14 Days</Card.Title>
                <Card.Text>
                  Enjoy an exciting journey across the Khumbu region's trails
                  with the stunning vistas of mountain peaks and the ...
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item><span>Trip Code:</span> ATH11422</ListGroup.Item>
                <ListGroup.Item><span>Price: </span>$1,450 pp</ListGroup.Item>
                <ListGroup.Item><span>Trip Level</span>: <i class="fa fa-signal" aria-hidden="true"></i> Strenuous</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#" className="btn btn-primary">Learn More</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="col-6">
          <div className="second-trip_item">second iTEM</div>
        </div>
      </div>

      {/* divided trip item in 2 rows */}
      <div className="row">
        <div className="col-6">
          <div className="third-trip_item">third iTEM</div>
        </div>
        <div className="col-6">
          <div className="fourth-trip_item">fIRST iTEM</div>
        </div>
      </div>
    </div>
  );
};

export default Trip;
