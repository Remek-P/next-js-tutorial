import { useRouter } from "next/router";
import { getEventById } from "@/data/dummy-data";
import EventSummary from "@/components/eventDetail/event-summary";
import EventLogistics from "@/components/eventDetail/event-logistics";
import EventContent from "@/components/eventDetail/event-content";

function EventDetailPage() {

  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <div>No such event found</div>
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