//app.js에서 함수를 가져와서 Custom hook을 만들어 봅시다.
//hooks.js의 이름도 알맞게 바꿔주세요.
import { useState, useEffect } from "react";

const useFetchData = (fetchUrl) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(fetchUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setData(myJson);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data;
};

export default useFetchData;
