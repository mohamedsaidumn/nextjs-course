import { EventType } from "@/data/types";
import EventItem from "./event-item";

type EventListProp = { items: EventType[] };
const EventList = (props: EventListProp) => {
  const { items } = props;

  return (
    <ul>
      {items.map((event: EventType) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export { EventList };
