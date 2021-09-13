import React, { useEffect, useState } from "react";
import axios from "axios";
import Text from "./Text";

//setting up state to check if there is a error, loading time on getting the data or just display data
const TextList = () => {
  const API = "https://jsonplaceholder.typicode.com/users";
  const [getUser, setGetUser] = useState([]);
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);

  //getting the data through axios and catching the error if there is one
  useEffect(() => {
    axios
      .get(`${API}`)
      .then((response) => setGetUser(response.data))
      .catch((e) => {
        const error = e.response.status;
        setErrors(error);
      });
  }, []);

  //displaying different data depending on states
  return (
    <>
      {loading ? (
        <div style={{ height: "500px", width: "500px", color: "red" }}>
          <h1>LOADING...</h1>
        </div>
      ) : (
        <div className="text-container">
          {errors ? (
            <h1 style={{ textAlign: "center", margin: "auto" }}>
              There is an error! :( {errors}{" "}
            </h1>
          ) : (
            getUser.map((user) => {
              return <Text getUser={user} />;
            })
          )}
        </div>
      )}
    </>
  );
};

export default TextList;
