import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./Home.module.css";
import cooking from "./../../assets/img/benefits/cooking.png";
import taste from "./../../assets/img/benefits/taste.png";
import delivery from "./../../assets/img/benefits/delivery.png";

const Benefits = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      flag: cooking,
      title: "Quality Food",
      body:
        "Kepp Health food readily available when you get hungry, you're more likely to eat the first",
    },
    {
      id: 2,
      flag: taste,
      title: "Super Taste",
      body:
        "Kepp Health food readily available when you get hungry, you're more likely to eat the first",
    },
    {
      id: 3,
      flag: delivery,
      title: "Fast Delivery",
      body:
        "Kepp Health food readily available when you get hungry, you're more likely to eat the first",
    },
  ]);
  return (
    <div className={classes.benefitsContainer}>
      <div className={`container`}>
        <div className={`bg-title text-center ${classes.benefitsTitle}`}>
          Our Awesome Services
        </div>
        <div className={classes.benefitsGrid}>
          {rows.map((row, index) => {
            return (
              <div key={index} className={classes.benefitCard}>
                <img
                  src={row.flag}
                  className={`img-fluid ${classes.benefitCardFlag}`}
                />
                <div className={classes.benefitCardTitle}>{row.title}</div>
                <div className={classes.benefitCardText}>{row.body}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Benefits };
