import { getAllEvents } from "@/data/dummy-data";
import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import {useRouter} from "next/router";

function AllEvents() {

  const router = useRouter();

  const events = getAllEvents();

  const findEventsHandler = (month, year) => {

    const fullPath = `/events/${year}/${month}`

    router.push(fullPath);
  };

  return (
      <>
        <EventsSearch onSearch={findEventsHandler}/>
        <EventList items={events} />
      </>
  );
}

export default AllEvents;