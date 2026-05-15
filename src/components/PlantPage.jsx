import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants]=useState([])
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((response) => {
      if(!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }
      return response.json();
    })
    .then(data => setPlants(data))
    .catch(error => console.error("Error fetching data:", error))

  }, [])

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;