/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: 40.71455, lon: -74.007118 },
  });

  const onSuccess = (loc) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: loc.coords.latitude,
        lon: loc.coords.longitude,
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
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      if (result.state === "granted") {
        navigator.geolocation.getCurrentPosition(onSuccess, onError, {
          enableHighAccuracy: true,
        });
      }

      // eslint-disable-next-line no-param-reassign
      result.onchange = function () {
        if (result.state !== "granted") {
          setLocation({
            loaded: false,
            coordinates: { lat: 40.71455, lon: -74.007118 },
          });
        }
      };
    });
  }, [location.coordinates.lat, location.coordinates.lon]);

  return location;
};

export default useLocation;
