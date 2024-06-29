import React from "react";
import styles from "./MenuBar.module.css"; // Import CSS module for styling

const MenuBar = () => {
  return (
    <>
      {/* Main section of the menu bar */}
      <section>
        {/* Display an image */}
        <img src="./public/Screenshot 2024-06-28 at 7.00.46 AM.png" alt="" />

        {/* Container for menu icons and titles */}
        <div className={styles.icons}>
          <h2>MENU</h2>

          {/* Each menu item with an icon and title */}
          <span className={styles.each}>
            <i className="fa-solid fa-address-book"></i> <h3>Contact</h3>
          </span>
          <span className={styles.each}>
            <i className="fa-solid fa-circle-dollar-to-slot"></i>
            <h3>Donation</h3>
          </span>
          <span className={styles.each}>
            <i className="fa-solid fa-graduation-cap"></i>
            <h3>Volunteer</h3>
          </span>
          <span className={styles.each}>
            <i className="fa-solid fa-video"></i>
            <h3>Video</h3>
          </span>
          <span className={styles.each}>
            <i className="fa-solid fa-newspaper"></i>
            <h3>News</h3>
          </span>
          <span className={styles.each}>
            <i className="fa-solid fa-parachute-box"></i>
            <h3>Rescue</h3>
          </span>
          <span className={styles.each}>
            <i className="fa-solid fa-right-from-bracket"></i>
            <h3>Log Out</h3>
          </span>
        </div>
      </section>
    </>
  );
};

export default MenuBar;
