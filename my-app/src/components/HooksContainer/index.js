import React, { useState } from "react";
import Button from "../HooksButton/Button";

const Container = () => {
  const [message, setMessage] = useState("");
  let inputValue = "";

  const handleInputChange = (e) => {
    inputValue = e.target.value;
  };

  const updateMessage = (e) => {
    e.preventDefault();
    setMessage(inputValue);
    e.target.reset();
  };

  return (
    <>
      <Button
        handleInputChange={handleInputChange}
        updateMessage={updateMessage}
      >
        {message}
      </Button>
    </>
  );
};

export default Container;
