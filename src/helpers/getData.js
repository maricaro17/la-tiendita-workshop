import { url } from "./url";

const getData = async () => {
    const resp = await fetch(url);
    const data = resp.json();
    return data;
  };
  
  export default getData;