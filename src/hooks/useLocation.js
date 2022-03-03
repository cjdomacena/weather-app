/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: 40.71455, lang: -74.007118 },
  });

  const onSuccess = (loc) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: loc.coords.latitude,
        lng: loc.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported.",
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useLocation;
