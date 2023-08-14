import { getEventById, getFeaturedEvents } from "@/helpers/api-util";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import ErrorAlert from "@/components/UI/error-alert";
import Button from "@/components/UI/Button";

function EventDetailPage({ selectedEvent }) {

  const event = selectedEvent;

  if (!event) {
    return (
        <>
          <ErrorAlert>
            <p>No such event found</p>
          </ErrorAlert>
          <div>
            <Button link="/events">Show All Events</Button>
          </div>
        </>
    )
  }

  return (
      <>
        <EventSummary title={event.title}/>
        <EventLogistics date={event.date}
                        address={event.location}
                        image={event.image}
                        imageAlt={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </>
  )
}

export async function getStaticProps(context) {

  const eventID = context.params.eventId;

  const event = await getEventById(eventID)

  return {
    props: {
      selectedEvent: event
    },
    revalidate: 300
  }
}

export async function getStaticPaths() {

  const events = await getFeaturedEvents();

  const paths = events.map(event => ({params: { eventId: event.id }}))
  return {
    paths,
    fallback: "blocking"
  }
}

export default EventDetailPage;