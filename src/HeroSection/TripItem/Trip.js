import React from "react";
import "./trip.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// import Freedom from "../../assets/freedom.jpeg";
import Modal from "../../components/modal/Modal";
import ToolTip from "./ToolTip";

const Trip = ({ imgsrc, title }) => {
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

                  <Card.Img variant="top" src={imgsrc} alt="feel freedom" />
                  <ToolTip/>

                 
                  
                </div>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
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
        </div>
      </div>
      {<Modal />}
    </>
  );
};

export default Trip;
