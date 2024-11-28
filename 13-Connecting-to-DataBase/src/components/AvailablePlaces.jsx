import { useState, useEffect } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      const response = await fetch("http://localhost:3000/places");
      const resData = await response.json();
      setAvailablePlaces(resData.places);
      setIsFetching(false)
    }

    fetchPlaces();
  }, [])

  // useEffect( () => {
  //   fetch("http://localhost:3000/places")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((resData) => {
  //     setAvailablePlaces(resData.places);
  //   });
  // } , [])

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText={'Fetching Place Data...'}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
