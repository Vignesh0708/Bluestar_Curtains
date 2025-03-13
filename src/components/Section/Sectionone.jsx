import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 import coverimg from '../../assets/cover img/cover image-2.png'
 import starimage from '../../assets/icons/star image.png'
 import './section.css'

const Sectionone = () => {
  return (
    <section className="container py-5 ">
      <div className="row d-grid align-items-center d-flex justify-content-betwwen">
      <div className="col-md-6 d-flex image-container">
          <div className="image-container star-img  ">
            <img
              src={starimage}
              alt=" "
              className="  img-fluid  "
            />
          </div>
          <div className=" main-img ">
            <img
              src={ coverimg}
              alt=" "
              className="  img-fluid   "
            />
          </div>
        </div>
        <div className="col-md-6 text-md-start text-center">
          <h2 className="fw-bold">Enjoy your time working</h2>
          <p className="text-muted">
            Etiam condimentum duis molestie malesuada volutpat pellentesque sed.
            Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus
            quis massa tellus imperdiet aenean nulla id.
          </p>
          <a href="." className="text-primary fw-semibold">
            See how it helped others →
          </a>
        </div>
      </div>
    </section>
  );
};

export default  Sectionone;

