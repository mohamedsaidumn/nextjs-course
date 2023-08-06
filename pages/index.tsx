import { getAllEvents } from "@/data/dummy-data";
import { EventList } from "@/components/events/event-list";
function HomePage() {
  const events = getAllEvents();

  return (
    <div>
      <h1>The Home Page</h1>
      <EventList items={events} />
    </div>
  );
}

export default HomePage;
