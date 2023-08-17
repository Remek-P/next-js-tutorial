import LogisticsItem from './logistics-item';

import AddressIcon from "@/components/UI/address-icon";
import DateIcon from "@/components/UI/date-icon";

import Image from "next/image";

import classes from './event-logistics.module.css';

function EventLogistics({ date, address, image, imageAlt }) {

  const refinedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const refinedAddress = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} width={400} height={400} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{refinedDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{refinedAddress}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
