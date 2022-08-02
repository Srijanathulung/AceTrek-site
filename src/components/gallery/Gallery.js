import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Gallery.css";

class Gallery extends React.Component {
  render() {
    return (
      <div className="container-fluid  ">
        <Carousel
          autoPlay
          interval="5000"
          transitionTime="500"
          axis="horizontal"
          showThumbs={false}
          infiniteLoop
          dynamicHeight={false}
        >
          <div>
            <img
              src="https://media.istockphoto.com/photos/concept-picture-id1154231467"
              alt=""
            />
            <div className="cover-content">
              <div className="row">
                <div className="col-6 ">
                  <h1>Annapurna Base Camp</h1>
                  <p>
                    Get the most scenic and iconic helicopter ride from
                    Gorakshep to Lukla in this after trekking to the base camp
                    of the world’s tallest mountain.
                  </p>
                  <a href="#">Learn More</a>
                </div>
                <div className="col-3 ">
                  <div className="gallery">
                    <span className="span-color">Go on 22 days trip for</span>
                  </div>
                  <div>USD 1,9019</div>
                  <input
                    type="button"
                    value="INQUIRE NOW"
                    className=" btn bg-primary"
                  />
                </div>

                <div className="col-3 last">
                  <div>
                    <i class="fa-solid fa-mountain"></i> 3050m/18225feet
                  </div>
                  <div>
                    {" "}
                    <i class="fa-brands fa-hive"></i>Strenous{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1656268164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
              alt=""
            />
            <div className="cover-content">
              <div className="row">
                <div className="col-6 ">
                  <h1>Nepal</h1>
                  <p>
                    Get the most scenic and iconic helicopter ride from
                    Gorakshep to Lukla in this after trekking to the base camp
                    of the world’s tallest mountain.
                  </p>
                  <a href="#">Learn More</a>
                </div>
                <div className="col-3 gallery">
                  <div className="gallery">
                    <span className="span-color">Go on 22 days trip for</span>
                  </div>
                  <div>USD 1,9019</div>
                  <input
                    type="button"
                    value="INQUIRE NOW"
                    className=" btn bg-primary"
                  />
                </div>

                <div className="col-3 last">
                  <div>
                    <i class="fa-solid fa-mountain"></i> 3050m/18225feet
                  </div>
                  <div>
                    {" "}
                    <i class="fa-brands fa-hive"></i>Strenous{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1655745653127-4d6837baf958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <div className="cover-content">
              <div className="row">
                <div className="col-6 ">
                  <h1>Bhutan</h1>
                  <p>
                    Get the most scenic and iconic helicopter ride from
                    Gorakshep to Lukla in this after trekking to the base camp
                    of the world’s tallest mountain.
                  </p>
                  <a href="#">Learn More</a>
                </div>
                <div className="col-3 gallery">
                  <div className="gallery">
                    <span className="span-color">Go on 22 days trip for</span>
                  </div>
                  <div>USD 1,9019</div>
                  <input
                    type="button"
                    value="INQUIRE NOW"
                    className=" btn bg-primary"
                  />
                </div>

                <div className="col-3 last">
                  <div>
                    <i class="fa-solid fa-mountain"></i> 3050m/18225feet
                  </div>
                  <div>
                    {" "}
                    <i class="fa-brands fa-hive"></i>Strenous{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1516527653392-602455dd9cf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
              alt=""
            />
            <div className="cover-content">
              <div className="row">
                <div className="col-6 ">
                  <h1>Tibet</h1>
                  <p>
                    Get the most scenic and iconic helicopter ride from
                    Gorakshep to Lukla in this after trekking to the base camp
                    of the world’s tallest mountain.
                  </p>
                  <a href="#">Learn More</a>
                </div>
                <div className="col-3 gallery">
                  <div className="gallery">
                    <span className="span-color">Go on 22 days trip for</span>
                  </div>
                  <div>USD 1,9019</div>
                  <input
                    type="button"
                    value="INQUIRE NOW"
                    className=" btn bg-primary"
                  />
                </div>

                <div className="col-3 last">
                  <div>
                    <i class="fa-solid fa-mountain"></i> 3050m/18225feet
                  </div>
                  <div>
                    {" "}
                    <i class="fa-brands fa-hive"></i>Strenous{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1655365225165-8d727fe3a091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=80"
              alt=""
            />
            <div className="cover-content">
              <div className="row">
                <div className="col-6 ">
                  <h1>China</h1>
                  <p>
                    Get the most scenic and iconic helicopter ride from
                    Gorakshep to Lukla in this after trekking to the base camp
                    of the world’s tallest mountain.
                  </p>
                  <a href="#">Learn More</a>
                </div>
                <div className="col-3 ">
                  <div className="gallery">
                    <span className="span-color">Go on 22 days trip for</span>
                  </div>
                  <div>USD 1,9019</div>
                  <input
                    type="button"
                    value="INQUIRE NOW"
                    className=" btn bg-primary"
                  />
                </div>

                <div className="col-3 last">
                  <div>
                    <i class="fa-solid fa-mountain"></i> 3050m/18225feet
                  </div>
                  <div>
                    {" "}
                    <i class="fa-brands fa-hive"></i>Strenous{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default Gallery;
