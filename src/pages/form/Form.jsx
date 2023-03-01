import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <form className="mt-4 d-flex row justify-content-center align-items-center">
      <div className="col-4 d-flex gap-4">
        <input
          id="term"
          type="checkbox"
          onChange={(e) => setIsChecked(!isChecked)}
        />
        <label htmlFor="term">I have read and accept the terms</label>
      </div>
      <button disabled={!isChecked} className="col-2 btn btn-warning">Confirm order</button>
    </form>
  );
};

export default Form;
