import { useRouter } from "next/router";

import { getFilteredEvents } from "@/data/dummy-data";
import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/UI/Button";
import ErrorAlert from "@/components/UI/error-alert";

function FilteredEventsPage() {

  const router = useRouter();

const filterData = router.query.slug;

if (!filterData) {
  return <p className="center">loading...</p>
}

const filteredYear = +filterData[0];
const filteredMonth = +filterData[1];

if (isNaN(filteredYear) || isNaN(filteredMonth) || filteredMonth < 1 || filteredMonth > 12) {
  return (
          <>
            <ErrorAlert>
              <p>Invalid filter, please adjust your search</p>
            </ErrorAlert>
            <div>
              <Button link="/events">Show All Events</Button>
            </div>
          </>
      )

}

const filteredEvents = getFilteredEvents({
  year: filteredYear,
  month: filteredMonth,
});

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
        <>
          <ErrorAlert>
            <p>No events found</p>
          </ErrorAlert>
          <div>
            <Button link="/events">Show All Events</Button>
          </div>
        </>
    )
  }

const date = new Date(filteredYear, filteredMonth - 1)

  return (
      <>
        <ResultsTitle date={date}/>
        <EventList items={filteredEvents} />
      </>
  );
}

export default FilteredEventsPage;