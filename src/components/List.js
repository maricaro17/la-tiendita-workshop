import React, { useEffect, useState } from "react";
import getData from "../helpers/getData";
import { url } from "../helpers/url";
import Card from "./Card";

const List = () => {
  const [articulos, setArticulos] = useState([]);
  useEffect(() => {
    if (articulos.length === 0) {
      getData(url).then((data) => {
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