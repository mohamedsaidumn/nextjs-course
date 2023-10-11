import { useRouter } from "next/router";
import { Fragment } from "react";
import Button from "@/components/ui/Button";
import { getFilteredEvents } from "@/data/dummy-data";
import { EventList } from "@/components/events/event-list";
function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;
  console.log(filterData);

  if (!filterData) {
    return (
      <Fragment>
        <p className="center">Loading...</p>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <p>Invalid filter. Please adjust your values!</p>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <p>No events found for the chosen filter!</p>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
