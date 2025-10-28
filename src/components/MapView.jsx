import {
  MapContainer,
  useMap,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapAutoZoom from "./MapAutoZoom";
import { useEffect } from "react";

function ZoomToQuake({ quake }) {
  const map = useMap();
  useEffect(() => {
    if (quake) {
      const [lon, lat] = quake.geometry.coordinates;
      map.setView([lat, lon], 6, { animate: true });
    }
  }, [quake, map]);
  return null;
}

const MapView = ({ earthquakes, selectedQuake, darkMode }) => {
  const lightTile = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const darkTile =
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
  return (
    <div className="flex-1 h-full">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          url={darkMode ? darkTile : lightTile}
          attribution="&copy; OpenStreetMap contributors"
        />

        <MapAutoZoom earthquakes={earthquakes} />
        <ZoomToQuake quake={selectedQuake} />

        {earthquakes.map((quake) => {
          const [lon, lat] = quake.geometry.coordinates;
          const magnitude = quake.properties.mag;
          const place = quake.properties.place;
          const time = new Date(quake.properties.time).toLocaleString();
          const color =
            magnitude < 3 ? "green" : magnitude < 5 ? "orange" : "red";
          const radius = Math.max(magnitude * 3, 4);

          return (
            <CircleMarker
              key={quake.id}
              center={[lat, lon]}
              radius={radius}
              color={color}
              fillColor={color}
              fillOpacity={0.6}
            >
              <Popup>
                <div className="text-sm">
                  <p className="font-semibold">{place}</p>
                  <p>Magnitude: {magnitude}</p>
                  <p className="text-gray-500">{time}</p>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapView;
