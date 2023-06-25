import { useRouter } from "next/router";
import { getFilteredEvents } from "@/data/dummy-data";
import EventList from "@/components/events/EventList";

function FilteredEventsPage() {

  const router = useRouter();

const filterData = router.query.slug;

if (!filterData) {
  return <p className="center">loading...</p>
}

const filteredYear = +filterData[0];
const filteredMonth = +filterData[1];

if (isNaN(filteredYear) || isNaN(filteredMonth) || filteredMonth < 1 || filteredMonth > 12) {
  return <p>Invalid filter, please adjust your search</p>
}

const filteredEvents = getFilteredEvents({
  year: filteredYear,
  month: filteredMonth,
});

if (!filteredEvents || filteredEvents.length === 0) {
  return <p>No events found</p>
}

  return (
      <div>
        <EventList items={filteredEvents} />
      </div>
  );
}

export default FilteredEventsPage;