import styles from "./style.module.css";
import { useRef } from "react";
import Header from "../../components/header/header";
import StickyCursor from "../../components/stickyCursor/stickyCursor";

export default function Home() {
  const stickyElement = useRef(null);
  return (
    <main className={styles.main}>
      <Header ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
    </main>
  );
}
