import { EventList } from "@/components/events/event-list";
import { getFeaturedEvents } from "@/data/dummy-data";
function HomePage() {
  const events = getFeaturedEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export default HomePage;
