import Link from "next/link";
import classes from "./button.module.css";


function Button({ children, link, onClick }) {

  if (link) {
    return (
        <Link href={link} className={classes.btn}>
          {children}
        </Link>
    );
  } else {
    return <button onClick={onClick} className={classes.btn}>{children}</button>
  }


}

export default Button;