import { forwardRef } from "react";
import styles from "./style.module.css";
import FramerMagnetic from "../framer";

const Header = forwardRef(function index(props, ref) {
  return (
    <div className={styles.header}>
      <FramerMagnetic>
        <div className={styles.burger}>
          <div ref={ref} className={styles.bounds}></div>
        </div>
      </FramerMagnetic>
    </div>
  );
});

export default Header;
