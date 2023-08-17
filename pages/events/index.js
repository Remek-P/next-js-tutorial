import { getAllEvents} from "@/helpers/api-util";
import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import {useRouter} from "next/router";
import Head from "next/head";

function AllEvents({ events }) {

  const router = useRouter();

  const findEventsHandler = (month, year) => {

    const fullPath = `/events/${year}/${month}`

    router.push(fullPath);
  };

  return (
      <>
        <Head>
          <title>Next Events</title>
          <meta name="description" content="find intresting events around you"/>
        </Head>
        <EventsSearch onSearch={findEventsHandler}/>
        <EventList items={events} />
      </>
  );
}

export async function getStaticProps() {

  const events = await getAllEvents();

  return {
    props: {
      events
    },
    revalidate: 60
  }
}

export default AllEvents;