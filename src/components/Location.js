import { useEffect, useState } from "react";

const Location = () => {
  const [location, setLocation] = useState("");
  const [fetchedLocations, setFetchedLocations] = useState([]);
  let count = 0;

  useEffect(() => {}, []);
  const handleChange = (value) => {
    const locationData = fetchData(value);
  };
  const fetchData = async (value) => {
    console.log(value);
    let locations;
    const data = await fetch(
      "https://www.swiggy.com/dapi/misc/place-autocomplete?input=" + value
    );
    locations = await data.json();
    // console.log(locations.data);
    setFetchedLocations(locations.data);
    // console.log(++count, fetchedLocations);

    return locations;
  };
  const handleClick = async (place_id) => {
    const locationData = await fetch(
      "https://www.swiggy.com/dapi/misc/address-recommend?place_id=" + place_id
    );
    const location = await locationData.json();

    const restarants = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.data[0].geometry.location.lat}&lng=${location.data[0].geometry.location.lng}`
    );
    const resCards = await restarants.json();
    console.log("location", location);
    console.log("Rescards", resCards);
  };
  return (
    <div className="relative">
      <label>Location</label>
      <input
        className="border-black border"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
          handleChange(e.target.value);
        }}
      ></input>
      <div className="location absolute z-10  w-48 flex flex-col">
        {fetchedLocations.length != 0
          ? fetchedLocations.map((location) => (
              <div
                onClick={() => handleClick(location.place_id)}
                className="w-full border border-black mb-2 "
                key={location.place_id}
              >
                {location.description}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Location;
