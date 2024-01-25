import { useEffect } from 'react';
import Places from './Places.jsx';
import { useState } from 'react';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {

  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadPlaces();
  },[])

  const loadPlaces = async() => {
    setIsLoading(true)
    try {
     const places = await fetchAvailablePlaces();
      navigator.geolocation.getCurrentPosition((position) => {
        const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude)
        setAvailablePlaces(sortedPlaces);
        setIsLoading(false)
      })
    } catch(err) {
      console.log(err);
    }
   
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      isLoading={isLoading}
      onSelectPlace={onSelectPlace}
    />
  );
}
