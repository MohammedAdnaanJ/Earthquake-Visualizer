# Aganitha Home-Test Earthquake Tracker

A React app to visualize recent earthquake events on a map, with filtering and details sidebar.

## Features

- **Interactive Map:** View earthquake locations with auto-zoom.
- **Sidebar List:** Browse recent earthquakes, see magnitude and details.
- **Filtering:** Filter events by magnitude.
- **Responsive UI:** Works on desktop and mobile, with hamburger menu for sidebar.
- **Loading Spinner:** Shows loading state while fetching data.

## Folder Structure

```
src/
  App.jsx                # Main app component
  main.jsx               # Entry point
  index.css              # Global styles
  components/
    Button.jsx           # Reusable button
    Filter.jsx           # Magnitude filter
    Header.jsx           # App header
    LoadingSpinner.jsx   # Spinner for loading state
    MapAutoZoom.jsx      # Map auto-zoom logic
    MapView.jsx          # Map display
    QuakeList.jsx        # Earthquake sidebar list
  hooks/
    useEarthquakeData.jsx # Custom hook for fetching earthquake data
```

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Customization

- **Earthquake Data Source:**  
  The app fetches data using the `useEarthquakeData` hook. You can change the API endpoint in `hooks/useEarthquakeData.jsx`.

- **Styling:**  
  Uses [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.  
  You can customize styles in `index.css` or component files.

## Dependencies

- React
- Tailwind CSS
- [lucide-react](https://lucide.dev/) (for icons)
- [react-leaflet](https://react-leaflet.js.org/) (if using maps)

**By Mohammed Adnaan**
