import React from "react";

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
            <img src="amaz1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="amaz2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="amaz3.jpg" className="d-block w-100" alt="..." />
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
              <img src="elec.jpg" className="card-img-top" alt="..." />
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
              <img src="access.jpg" className="card-img-top" alt="..." />
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
              <img src="cloth.jpg" className="card-img-top" alt="..." />
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
