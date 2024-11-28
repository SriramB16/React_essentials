import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import ErrorPage from "./ErrorPage.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch places");
        }

        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch places, Please try again later",
        });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if(error) {
    return <ErrorPage title='An Error occured' message={error.message} />;
  }

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
      loadingText={"Fetching Place Data..."}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
