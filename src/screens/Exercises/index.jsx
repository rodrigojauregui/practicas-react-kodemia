import React, { useState, useEffect } from "react";
import "../Exercises/index.css";

/*
export default function Exercises() {
  const [usd, setUsd] = useState(0);
  const [mxn, setMxn] = useState(0);

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-center px-0">
          <div className="col p-5">
            <form className="mt-5">
              <div className="form-group col-12">
                <label className="text-white" htmlFor="exampleInputEmail1">
                  USD
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="USD"
                  value={usd}
                  onChange={(event) => {
                    setUsd(event.target.value);
                    setMxn(event.target.value * 19.84);
                  }}
                />
              </div>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="exampleInputPassword1">
                  MXN
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="MXN"
                  value={mxn}
                  onChange={({ target: { value } }) => {
                    setUsd(value / 19.84);
                    setMxn(value);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
*/

/*
export default function Exercises() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [pin, setPin] = useState('');

  return (
    <div className="container">
      <div className="row">
        <div className="col-5  mt-3 border">
          <form className="mt-5 form-css">
            <h3 className="text-center">Payment details</h3>
            <hr />
            <div className="form-group col-12 ">
              <label className="" htmlFor="nameOnCard">
                Name on card
              </label>
              <input
                type="text"
                className="form-control"
                id="nameOnCard"
                aria-describedby="emailHelp"
                placeholder="NAME"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="row d-flex justify-content-center">
              <div className="form-group col-5">
                <label className="text-black" htmlFor="exampleInputPassword1">
                  Card number
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={number}
                  onChange={(event) => {
                    setNumber(event.target.value);
                  }}
                />
              </div>
              <div className="form-group col-3">
                <label className="">Expiry date</label>
                <input
                  type="month"
                  className="form-control"
                  placeholder="MM"
                  value={month}
                  onChange={(event) => {
                    setMonth(event.target.value);
                  }}
                />
              </div>
              <span>/</span>
              <div className="form-group col-3 year-input">
                <label className=""></label>
                <input
                  type="year"
                  className="form-control"
                  placeholder="YYYY"
                  value={year}
                  onChange={(event) => {
                    setYear(event.target.value);
                  }}
                />
              </div>
              
            </div>
            <div className="form-group col-6">
              <label className="text-black" htmlFor="exampleInputPassword1">
                Security number
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={pin}
                onChange={(event) => {
                  setPin(event.target.value);
                }}
              />
            </div>
          </form>
        </div>
        <div className="col-6">
          <div className="card mt-5 bg-info rounded ">
            <div className="card-body">
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
              <h2 className="card-title text-black">{name}</h2>
              <h5 className="card-title text-muted">{number}</h5>

              <div className="d-flex justify-content-evenly">
                <p className="card-text">{month}</p>
                <p className="card-text">{pin}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
*/

const petsData = {
  dogs: [
    {
      name: "Sr. Peabody",
      age: "5",
    },
    {
      name: "Solovino",
      age: "10",
    },
  ],
  parrots: [
    {
      name: "Sr. Peabody",
      age: "5",
    },
    {
      name: "Solovino",
      age: "10",
    },
  ],
  rabbits: [
    {
      name: "Sr. Peabody",
      age: "5",
    },
    {
      name: "Solovino",
      age: "10",
    },
  ],
  cats: [
    {
      name: "Misifu",
      age: "1",
    },
    {
      name: "Nefermishi",
      age: "5",
    },
  ],
};



export default function Exercises() {
  /*
  useEffect( () => {
    fetch("https://react-11g-default-rtdb.firebaseio.com/posts/-Mbsb3bywwGa75dvNL1H.json", {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        author: 'rodrigo jauregui',
        description: 'Lorem ipsum dolor sit amet.',
        image: 'https://i.pinimg.com/originals/08/99/ea/0899eafb344f09b3656c18938718e1ff.jpg',
        title: 'post modificado'
  }
      ),    
    }) 
    .then(response => response.json())
    .catch((error => console.log(error)))
    .then(json => console.log(json))
    },[])
  */
    
  const petsUI= Object.entries(petsData).map(([type, pets], index)=> (
    <div key={index} className="col-3">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">{type}</div>
        <ul className=" list-group-flush">
          {pets.map(({name, age}, index) => (<li key={index}>name:{name}, age:{age}</li>))}
          </ul>
      </div>
    </div>
  ))

  /*
  
  */
  return (
    <div className="container">
      <div className="row justify-content-center">{petsUI}</div>
    </div>
  );
}
