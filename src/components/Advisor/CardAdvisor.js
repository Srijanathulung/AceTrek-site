import React from "react";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";

const CardAdvisor = () => {
  var settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 card-advisor">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>

        {/* carasoul slick */}
        <div className="col-lg-8 card-advisor-carasoul">
          <Slider {...settings}>
            {/* <div className="row"> */}
            {/* 1 and 2 */}
            <div>
              <div>
              <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
              </div>
              <div>
              <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
              </div>
            </div>

            {/* 3 and 4 */}
            <div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </div>

            {/* 5 and 6 */}
            <div>
              <div>
                <h3>5</h3>
              </div>

              <div>
                <h3>6</h3>
              </div>
            </div>

            {/* 7 and 8 */}
            <div>
              <div>
                <h3>7</h3>
              </div>
              <div>
                <h3>8</h3>
              </div>
            </div>
            <div>
              {/* 9and 10 */}
              <div>
                <h3>9</h3>
              </div>
              <div>
                <h3>10</h3>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CardAdvisor;
