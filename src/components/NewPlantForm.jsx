import React from "react";
import {useState} from "react";

function NewPlantForm({onAddPlant}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant ={
      name,
      image,
      price,
    }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPlant)
    })
    .then((response) => {
      if(!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }
      return response.json();
    })
    .then((data) => {
      onAddPlant(data)
      setName("");
      setPrice("");
      setImage("");
    })
    
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"value={name} onChange={(e) => setName(e.target.value)} placeholder="Plant name"/>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;