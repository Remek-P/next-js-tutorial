import { getFeaturedEvents } from "@/helpers/api-util";
import EventList from "@/components/events/EventList";
import Head from "next/head";


function HomePage({ events }) {

  return (
      <div>
        <Head>
          <title>Next Events</title>
          <meta name="description" content="find intresting events around you"/>
        </Head>
        <EventList items={events}/>
      </div>
  )
}

export async function getStaticProps() {

  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default HomePage;