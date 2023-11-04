import { EventList } from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { useRouter } from "next/router";
import { getAllEvents } from "@/helpers/api-util";
import Head from "next/head";

function AllEventsPage(props) {
  const { events } = props;
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps(context) {
  // Call an external API endpoint to get posts.
  console.log("getStaticProps is running AllEventsPage");
  const events = await getAllEvents();

  return {
    props: { events: events },
    revalidate: 60,
  };
}

export default AllEventsPage;
