import React, { useState } from "react";
import Button from "./components/Button/Button";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("");

  return <Button message={message} setMessage={setMessage} />;
};

export default App;
