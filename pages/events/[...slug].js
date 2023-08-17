import { useRouter } from "next/router";

import { getFilteredEvents} from "@/helpers/api-util";

import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/UI/Button";
import ErrorAlert from "@/components/UI/error-alert";
import Head from "next/head";

function FilteredEventsPage({ hasError, events, propsDate }) {

  const router = useRouter();

  // const filterData = router.query.slug;
  //
  // if (!filterData) {
  //   return <p className="center">loading...</p>
  // }
  //
  // const filteredYear = +filterData[0];
  // const filteredMonth = +filterData[1];

  if (hasError) {
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

const filteredEvents = events;

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

const date = new Date(propsDate.year, propsDate.month - 1)

  return (
      <>
        <Head>
          <title>Filtered Events</title>
          <meta name="description" content={`All events for ${propsDate.month}/${propsDate.year}`} />
        </Head>
        <ResultsTitle date={date}/>
        <EventList items={filteredEvents} />
      </>
  );
}

export async function getServerSideProps(context) {

  const {params} = context;

  const filterData = params.slug;

  if (!filterData) {
    return <p className="center">loading...</p>
  }

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  if (isNaN(filteredYear) || isNaN(filteredMonth) || filteredMonth < 1 || filteredMonth > 12) {
    return {
      props: {
        hasError: true
      }
      // notFound: true,
      // redirect: {
      //   destination: "/events"
      // }
    }
  }

  const filteredEvents = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  return {
    props: {
      events: filteredEvents,
      propsDate: {
        year: filteredYear,
        month: filteredMonth
      }
    }
  }
}

export default FilteredEventsPage;