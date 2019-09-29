import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = url => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await axios.get(url);
    let { data } = res;
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return data;
};

export { useFetch };
