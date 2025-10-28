import { useEffect, useState } from "react";
import axios from "axios";

const useEarthquakeData = () => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
        );
        setEarthquakes(res.data.features);
      } catch (err) {
        setError("Failed to load data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { earthquakes, loading, error };
};

export default useEarthquakeData;
