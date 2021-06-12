import React, { useState } from "react";
import { useHistory } from "react-router";





export default function LogIn() {
  const [email, setEmail]=useState('')
  const [password, setPassword]= useState('')

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);

    setTimeout(() => {
      history.push("/");
    }, 1000);
  };

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-center px-0">
          <div className="col p-5">
            <h2 className="text-white">Log In</h2>
            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="exampleInputEmail1">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="exampleInputPassword1">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={password}
                  onChange={({ target: { value } }) => setPassword(value)}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
