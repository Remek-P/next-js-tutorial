import Button from "@/components/UI/Button";
import classes from "./eventsSearch.module.css";
import { useRef } from "react";

function EventsSearch({ onSearch }) {

  const monthRef = useRef();
  const yearRef = useRef();

  const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const yearArray = [2021, 2022, 2023];

  let iterator = 1;
  const displayDate = (arr) => {
    return arr.map((date) => <option key={date} value={typeof date[0] !== "string" ? date : iterator++}>{date}</option>)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedMonth = monthRef.current.value;
    const selectedYear = yearRef.current.value;

    onSearch(selectedMonth, selectedYear)
  }

  return (
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="year">Year</label>
            <select ref={yearRef} name="year" id="year" required>
              <option value="" hidden>Choose Year</option>
              {displayDate(yearArray)}
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="month">Month</label>
            <select ref={monthRef} name="month" id="month" required>
              <option value="" hidden>Choose Month</option>
              {displayDate(monthArray)}
            </select>
          </div>
        </div>
        <Button>Find Events</Button>
      </form>
  );
}

export default EventsSearch;