import Button from "@/components/UI/Button";

import DateIcon from "@/components/UI/date-icon";
import AddressIcon from "@/components/UI/address-icon";
import ArrowRightIcon from "@/components/UI/arrow-right-icon";

import classes from "./eventItem.module.css"

function EventItem({ item }) {

  const { title, image, date, location, id } = item;

  const refinedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const constructedLink = `/events/${id}`

  const refinedAddress = location.replace(", ", "\n");

  return (
      <li className={classes.item}>
        <img src={"/" + image} alt={title} />
        <div className={classes.content}>
          <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.date}>
              <DateIcon />
              <time>{refinedDate}</time>
            </div>
            <div className={classes.address}>
              <AddressIcon />
              <address>{refinedAddress}</address>
            </div>
          </div>
          <div className={classes.actions}>
            <Button link={constructedLink}>
              <span>Explore Event</span>
              <span className={classes.icon}><ArrowRightIcon /></span>
            </Button>
          </div>
        </div>
      </li>
  );
}

export default EventItem;