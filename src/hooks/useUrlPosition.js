import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  // Read query string from URL
  // To set query we have to pass entire new object
  const [searchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat, lng];
}
