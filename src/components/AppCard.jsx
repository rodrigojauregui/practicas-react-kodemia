import React from "react";
import "./appCard.css";

export default function AppCard(props) {
  

  const dataList = ({ id, name, species, image }, index) => (
    <div
      key={id}
      className=" col-3 border card flex-column justify-content-center card-body"
    >
      <img src={image} alt="" className="" />
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{species}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  );


  return (
    <React.Fragment>
      <div className="col-6  ">
        <div className="row">
        {props.data && props.data.map(dataList)}
        </div>
      
        <div className="row">
          <div className="col justify-content-center  flex-wrap p-5">
            <button
              disabled= {props.prev === null ? true : false}
              type="button"
              className="btn btn-dark btn-lg mx-3"
              onClick={props.onDecrease()}
            >
              Prev
            </button>
            <button
              disabled={props.next === null ? true : false}
              type="button"
              className="btn btn-dark btn-lg mx-3"
              onClick={props.onIncrease()}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
