import { useEffect } from "react";
import { useMap } from "react-leaflet";

const MapAutoZoom = ({ earthquakes }) => {
  const map = useMap();

  useEffect(() => {
    if (earthquakes.length > 0) {
      const bounds = earthquakes.map((q) => [
        q.geometry.coordinates[1],
        q.geometry.coordinates[0],
      ]);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [earthquakes, map]);

  return null;
}


export default MapAutoZoom;