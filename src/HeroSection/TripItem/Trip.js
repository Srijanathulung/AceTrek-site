import React from "react";
import "./trip.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Freedom from "../../assets/freedom.jpeg";
import Modal from "../../components/modal/Modal";
import ToolTip from "./ToolTip";
// import ReactTooltip from "react-tooltip";
// import CheckIcon from '@mui/material-icons/Check';
// import 'tippy.js/dst/tippy.css';

const Trip = ({title}) => {
  return (
    <>
      <div className="trip-item_wrapper">
                

      <div className="row">
        <div className="col-6 trip-item">
          <div className="first-trip_item">
            <Card style={{ width: "100%" }}>
              <div className="card-image">
                <div className="image_overlay">
                  <button
                    className="button-inquire btn btn-primary"
                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                    >
                    INQUIRE NOW
                  </button>
                </div>

                <Card.Img variant="top" src={Freedom} alt="feel freedom" />
                {/* <Tippy content='i am tooltip'> */}
               
                  {/* <CheckIcon /> */}
                 
                  <ToolTip/>
                
               

                {/* </Tippy> */}

                {/* <ReactTooltip id="registerTip" place="top" effect="solid" className="tooltip-content" >
                  The trip is in this category.this is tooltip
                </ReactTooltip> */}
              </div>
              <Card.Body>
                <Card.Title>Everest Base Camp Trek – 14 Days</Card.Title>
                <Card.Text>
                  Enjoy an exciting journey across the Khumbu region's trails
                  with the stunning vistas of mountain peaks and the ...
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <span>Trip Code:</span> ATH11422
                </ListGroup.Item>
                <ListGroup.Item>
                  <span>Price: </span>$1,450 pp
                </ListGroup.Item>
                <ListGroup.Item>
                  <span>Trip Level</span>:{" "}
                  <i class="fa fa-signal" aria-hidden="true"></i> Strenuous
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#" className="btn btn-primary">
                  Learn More
                </Card.Link>
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
    {<Modal/>}
                </>
  );
};

export default Trip;
