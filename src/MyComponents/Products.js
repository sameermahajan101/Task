import React from "react";
//import amaz3 from "../images/amaz3.jpg";

export const Products = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/amaz1.jpg" height="400" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="images/amaz2.jpg" height="400" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="images/amaz3.jpg" height="400" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <p>Categories</p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <a href="elect.htm">
              <img src="images/elec.jpg" height="200" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">Electronics</h5>
              <p className="card-text">
                Stock up your collection with our latest items in electronics...
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <a href="access.htm">
              <img src="images/access.jpg" height="200" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">Accessories</h5>
              <p className="card-text">
                Accessories for your every need. Just on Amazon.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <a href="clothing.htm">
              <img src="images/cloth.jpg" height="200" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">Clothing</h5>
              <p className="card-text">
                Latest from Allen Solly, Levi's and many more on sale..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
