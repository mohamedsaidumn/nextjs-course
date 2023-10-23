import { Fragment } from "react";
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { useRouter } from "next/router";
import ErrorAlert from "@/components/ui/error-alert";
import { getEventById, getFeaturedEvents } from "@/helpers/api-util";

function EventDetailPage(props) {
  const { selectedEvent: event } = props;
  if (!event) {
    return (
      <ErrorAlert>
        <p> No event found</p>
      </ErrorAlert>
    );
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
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  console.log(eventId);

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  console.log(paths);

  return {
    paths: paths,
    fallback: "blocking",
  };
}
export default EventDetailPage;
