import React from "react";
import "./button.css";

const Button = (props) => {
  let inputValue = "";

  const handleInputChange = (e) => {
    // get a a message from input field
    inputValue = e.target.value;
  };

  const updateMessage = (e) => {
    e.preventDefault();
    // update message state
    props.setMessage(inputValue);
    // clear input field
    e.target.reset();
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-sm-4">
            <div className="card">
              <form className="form-inline" onSubmit={updateMessage}>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="message"
                    type="text"
                    placeholder="type message here..."
                    onChange={handleInputChange}
                  ></input>
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <h1>{props.message}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Button;
