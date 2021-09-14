import React, { useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

const API = "https://api.github.com/users/john-smilga/repos?per_page=10";
const minObject = { name: "joakim", age: 12, sex: "male" };
const minArray = ["joakim", 2, "female", "bajs"];

const Reduce = () => {
  const [names, setNames] = useState([]);
  const [errors, setErrors] = useState([]);

  //easy way to use ...rest operator to get the rest of the object or array
  //const { name, ...rest } = minObject;
  //console.log(name, rest);
  const { first, ...rest } = minArray;
  console.log(first, rest);

  //easy way to use the ...spread operator on arrays
  const girls = ["lina", "malin"];
  const boys = ["jocke", "patrik"];
  const katt = ["sören"];
  const friends = [...girls, ...boys, ...katt];
  //console.log(friends);

  //easy way to use the ...spread operator on objects, important fact is that i only copy the object or array, not change the reference
  const person = { person: "jocke", color: "green", height: "medium" };
  const newPerson = { ...person, person: "jeppe" };
  //console.log(person, newPerson);

  const getNames = () => {
    axios
      .get(`${API}`)
      .then((response) => setNames(response.data))
      .catch((e) => {
        const error = e.response.status;
        setErrors(error);
      });
  };

  return (
    <>
      <Button onClick={getNames} variant="contained" color="secondary">
        GET API
      </Button>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "5rem",
        }}
      >
        {names.map((value) => {
          const { name, id } = value;
          return (
            <span>
              <li style={{ marginTop: "10px" }}>{name}</li>
              <li style={{ marginTop: "10px" }}>{id}</li>
            </span>
          );
        })}
      </ul>
    </>
  );
};

export default Reduce;
