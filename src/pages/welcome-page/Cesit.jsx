import axios from "axios";
import React, { useEffect, useState } from "react";
import urls from "./url";
const Cesit = () => {
  const [cesitler, setCesitler] = useState([]);
  const [sepet, setSepet] = useState([]);
  useEffect(() => {
    axios
      .get(urls.cesitler)
      .then((res) => setCesitler(res.data))
      .catch((err) => console.log(err));
  }, []);

  const adetBul = (cesit) => {
    const miktar = sepet.filter((item) => item.name === cesit.name);
    return miktar.length;
  };
  const sifirla = (cesit) => {
    console.log("sifirlanacak");
    const remainder = sepet.filter((item) => item.name !== cesit.name);
    setSepet(remainder);
  };
  return (
    <div className="container m-5">
      <h1>Çeşitler</h1>
      <p>Tanesı 3$</p>
      <h2 data-testid="ucret">Çeşitler Ücreti: {sepet.length * 3} $</h2>
      <div className="row gap-4">
        {cesitler.map((cesit) => {
          const adet = adetBul(cesit);
          return (
            <div
              className="d-flex flex-column align-items-center gap-2"
              key={cesit.name}
              style={{ width: "150px" }}
            >
              <img src={cesit.imagePath} className="w-100" alt="cesit" />
              <label className="lead">{cesit.name}</label>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-danger"
                  onClick={() => sifirla(cesit)}
                >
                  Sıfırla
                </button>
                <span className="lead" data-testid="adet">{adet}</span>
                <button
                  className="btn btn-primary"
                  onClick={() => setSepet([...sepet, cesit])}
                >
                  Ekle
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cesit;
