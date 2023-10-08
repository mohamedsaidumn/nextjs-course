import { Fragment } from "react";
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { useRouter } from "next/router";
import { getEventById } from "@/data/dummy-data";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  console.log(eventId);
  const event = getEventById(eventId);
  console.log(event);

  if (!event) {
    return <p> No event found</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.imageAlt}
      />
      <EventContent>
        <p>{eventId.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
