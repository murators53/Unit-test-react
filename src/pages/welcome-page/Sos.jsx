import axios from "axios";
import React, { useEffect, useState } from "react";
import url from "./url";
const Sos = () => {
  const [sepet, setSepet] = useState([]);
  const [soslar, setSoslar] = useState([]);

  useEffect(() => {
    axios
      .get(url.soslar)
      .then((res) => setSoslar(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Soslar</h1>
      <p>Tanesi: 2$</p>
      <h2>Soslar Ücreti: 0 $</h2>
      <div className="">
        {soslar.map((item, index) => (
          <div className="">
            <img src={item.imagePath} alt="sos" title="sos" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sos;
