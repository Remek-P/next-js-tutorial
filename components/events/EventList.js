import EventItem from "@/components/events/EventItem";

import classes from "./eventList.module.css";

function EventList({ items }) {
  return (
      <ul className={classes.list}>
        {items.map(item => <EventItem key={item.id} item={item}/>)}
      </ul>
  );
}

export default EventList;