import React from "react";
import Form from "../form/Form";
import Cesit from "./Cesit";
import Sos from "./Sos";

const WelcomePage = () => {
  return (
    <div>
      {/* Cesitler */}
      <Cesit />
      {/* Soslar */}
      <Sos />
      {/* Form */}
      <Form />
    </div>
  );
};

export default WelcomePage;
