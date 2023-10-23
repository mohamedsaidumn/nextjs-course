import { EventList } from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helpers/api-util";
function HomePage(props) {
  const { events } = props;

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}
export async function getStaticProps(context) {
  // Call an external API endpoint to get posts.
  console.log("getStaticProps is running HomePage");
  const featuredEvents = await getFeaturedEvents();

  return {
    props: { events: featuredEvents },
  };
}

export default HomePage;
