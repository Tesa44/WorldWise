import { useParams } from "react-router-dom";
import { useEffect } from "react";

import styles from "./City.module.css";
import { useCities } from "../contexts/CitiesContext";
import Spinner from "./Spinner";
import BackButton from "./BackButton";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  // Read data from URL
  const { id } = useParams();

  const { getCity, currentCity, isLoading } = useCities();

  useEffect(
    function () {
      getCity(id);
    },
    [id, getCity]

    // Missing dependency - getCity
    // If we pass getCity there, we will get infinite loop, because getCity function updates state (runs dispatch func in CitiesContext)
    // Every time the state is updated, the component (CitiesConxtex) is recreated and func getCity is also recreated, so it is updated
    // And every getCity update runs Effect. We need to make this function stable using useCallback hook.
  );

  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) return <Spinner></Spinner>;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton></BackButton>
      </div>
    </div>
  );
}

export default City;
