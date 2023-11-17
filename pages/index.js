import { EventList } from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helpers/api-util";
import Head from "next/head";
import NewsletterRegistration from "@/components/input/newsletter-registration";
function HomePage(props) {
  const { events } = props;

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <NewsletterRegistration />
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
