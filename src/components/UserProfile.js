import React, { useState } from "react";

const UserProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [emailError, setError] = useState("");

  const handleFirstName = (evt) => setFirstName(evt.target.value);
  const handleLastName = (evt) => setLastName(evt.target.value);
  const handleEmail = (evt) => {
    if (evt.target.value == "") {
      setError("Email required.");
    } else if (!/\S+@\S+\.\S+/.test(evt.target.value)) {
      setError("Wrong format.");
    } else {
      setEmail(evt.target.value);
      setError("");
    }
  };
  const handleAddress1 = (evt) => setAddress1(evt.target.value);
  const handleAddress2 = (evt) => setAddress2(evt.target.value);
  const handleCity = (evt) => setCity(evt.target.value);

  const handleSubmit = () => {};

  return (
    <div style={{ marginTop: "2%" }}>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-3">
            <label htmlFor="firstName">First Name: </label>
            <input
              className="form-control"
              type="text"
              onChange={handleFirstName}
              id="firstName"  required
            ></input>
          </div>
          <div className="form-group col-md-3 ml-5">
            <label htmlFor="lastName">Last Name: </label>
            <input
              className="form-control"
              type="text"
              onChange={handleLastName}
              id="lastName" required
            ></input>
          </div>
          <div className="form-group col-md-3 ml-5">
            <label htmlFor="email">Email: </label>
            <input
              className="form-control"
              type="email"
              onChange={handleEmail}
              id="email" required
            ></input>
            <p style={{ color: "red" }}>{emailError}</p>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-3">
            <label htmlFor="address1">Address 1: </label>
            <input
              className="form-control"
              type="text"
              onChange={handleAddress1}
              id="address1" required
            ></input>
          </div>
          <div className="form-group col-md-3 ml-5">
            <label htmlFor="address2">Address 2: </label>
            <input
              className="form-control"
              type="text"
              onChange={handleAddress2}
              id="address2" required
            ></input>
          </div>
          <div className="form-group col-md-3 ml-5">
            <label htmlFor="city">City: </label>
            <input
              className="form-control"
              type="text"
              onChange={handleCity}
              id="city" required
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <button className="btn btn-success float-right" disabled={!(firstName && lastName && email && address1 && city) }>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UserProfile;
