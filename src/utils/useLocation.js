const useLocation = async (location) => {
  let locations;
  console.log("input", location);
  const data = await fetch(
    "https://www.swiggy.com/dapi/misc/place-autocomplete?input=" + location
  );
  locations = await data.json();

  console.log("hello", locations);

  return locations.data;
};

export default useLocation;
