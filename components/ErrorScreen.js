import styles from "@/styles/LoadingScreen.module.css";
import { theme } from "@nextui-org/react";
import React from "react";

function ErrorScreen() {

    React.useEffect(() => {
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    }, []);

  return (
    <div
      className={styles.container}
      style={{ background: theme.colors.error }}
    >
      <div className={styles.book}>
        <div className={styles.inner}>
          <div
            className={styles.left}
            style={{ background: theme.colors.accents9 }}
          ></div>
          <div
            className={styles.middle}
            style={{ borderColor: theme.colors.accents9 }}
          ></div>
          <div
            className={styles.right}
            style={{ background: theme.colors.accents9 }}
          ></div>
        </div>
        <ul>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
        </ul>
        <div className={styles.text}>
          <p style={{ color: theme.colors.accents9 }}>An Error Has Ocurred, Reloading!</p>
        </div>
      </div>

    </div>
  )
}

export default ErrorScreen