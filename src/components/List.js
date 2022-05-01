import React, { useEffect, useState } from "react";
import { url } from "../helpers/url";
import Card from "./Card";
const getData = async () => {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
  };
const List = () => {
  const [articulos, setArticulos] = useState([]);
  useEffect(() => {
    if (articulos.length === 0) {
      getData().then((data) => {
        setArticulos(data);
      });
    }
  }, [articulos]);
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Card productos={articulos} />
      </div>
    </div>
  );
};

export default List;
