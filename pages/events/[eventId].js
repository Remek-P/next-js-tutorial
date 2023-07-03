import { useRouter } from "next/router";
import { getEventById } from "@/data/dummy-data";
import EventSummary from "@/components/eventDetail/event-summary";
import EventLogistics from "@/components/eventDetail/event-logistics";
import EventContent from "@/components/eventDetail/event-content";
import ErrorAlert from "@/components/UI/error-alert";
import Button from "@/components/UI/Button";

function EventDetailPage() {

  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

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

export default EventDetailPage;