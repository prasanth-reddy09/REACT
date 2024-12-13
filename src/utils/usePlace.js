const usePlace = async (placeId) => {
  const locationData = await fetch(
    "https://www.swiggy.com/dapi/misc/address-recommend?place_id=" + placeId
  );
  const location = await locationData.json();

  return location.data[0].geometry.location;
};

export default usePlace;
