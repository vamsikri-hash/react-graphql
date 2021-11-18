import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import "./App.css";
import { DogPhoto } from "./DogPhoto";
//import { DogPhoto } from "./DogPhoto";

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

export const App = () => {
  const [selectedDog, setSelectedDog] = useState("");
  const { data, loading, error } = useQuery(GET_DOGS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.info(selectedDog);

  return (
    <div style={{ marginLeft: "40%" }}>
      <h3>Dog Selection</h3>
      <select
        name="dog"
        onChange={(e) => setSelectedDog(e.target.value)}
        value={selectedDog}
      >
        {data.dogs.map((dog) => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))}
      </select>
      <div style={{marginTop: "50px"}}>
        <DogPhoto breed={selectedDog}/>
      </div>
    </div>
  );
};

export default App;
