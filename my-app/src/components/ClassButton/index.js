import React from "react";
import "../button.css";

const Button = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-sm-4">
            <div className="card">
              <form className="form-inline" onSubmit={props.onSubmit}>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="message"
                    type="text"
                    placeholder="type message here..."
                    onChange={props.handleInputChange}
                  ></input>
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <h1>{props.children}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Button;
