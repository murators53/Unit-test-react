import axios from "axios";
import React, { useEffect, useState } from "react";
import url from "./url";
const Sos = () => {
  const [sepet, setSepet] = useState([]);
  const [soslar, setSoslar] = useState([]);
  console.log(sepet);
  useEffect(() => {
    axios
      .get(url.soslar)
      .then((res) => setSoslar(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleAdd = (e, sos) => {
    if (e.target.checked) {
      setSepet([...sepet, sos]);
    } else {
      const cikart = sepet.filter((item) => item.name !== sos.name);
      setSepet(cikart);
    }
  };

  return (
    <div className="container m-5">
      <h1>Soslar</h1>
      <p>Tanesi: 2$</p>
      <h2>Soslar Ücreti: {sepet.length * 2} $</h2>
      <div className="row gap-3 ">
        {soslar.map((item, index) => (
          <div
            className="d-flex flex-column align-items-center gap-3"
            key={index}
            style={{width:'150px'}}
          >
            <img src={item.imagePath} alt="sos" title="sos" className="w-100" />
            <label htmlFor={item.name} className="text-nowrap">
              {item.name}
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              id={item.name}
              onChange={(e) => handleAdd(e, item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sos;
