import React from "react";
import "./trip.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// import Freedom from "../../assets/freedom.jpeg";
import Modal from "../../components/modal/Modal";
import ToolTip from "./ToolTip";

const Trip = ({ imgsrc, title, tripcode, alt,price, Text,tooltip }) => {
  // console.log(props)
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
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      INQUIRE NOW
                    </button>
                  </div>

                  <Card.Img variant="top" src={imgsrc} alt={alt} />
                  <ToolTip title={tooltip.tiptitle} description={tooltip.tipDetail} icon={tooltip.icon} bgcolor={tooltip.className}/>
                </div>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{Text}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <span>Trip Code:</span> {tripcode}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span>Price: </span>
                    {price}
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
        </div>
      </div>
      {<Modal />}
    </>
  );
};

export default Trip;
