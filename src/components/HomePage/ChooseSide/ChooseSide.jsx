import React from "react";
import cn from "classnames";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
} from "../../../context/ThemeProvider";
import imgAvengers from "./img/avengers.jpg";
import imgThanos from "./img/thanos.jpg";
import imgDeadpool from "./img/deadpool.jpg";
import styles from "./ChooseSide.module.css";
import PropTypes from "prop-types";

const ChooseSideItem = ({ classes, theme, text, img }) => {
  const isTheme = useTheme();

  return (
    <div
      className={cn(styles.item, classes)}
      onClick={() => isTheme.change(theme)}
    >
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  );
};

ChooseSideItem.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  classes: PropTypes.string,
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "True Avenger",
      img: imgAvengers,
      classes: styles.item__light,
    },
    {
      theme: THEME_DARK,
      text: "Pure Evil",
      img: imgThanos,
      classes: styles.item__dark,
    },
    {
      theme: THEME_NEUTRAL,
      text: "I`m Deadpool, chill bruh",
      img: imgDeadpool,
      classes: styles.item__neutral,
    },
  ];

  return (
    <div className={styles.container}>
      {elements.map(({ theme, text, img, classes }, index) => (
        <ChooseSideItem
          key={index}
          theme={theme}
          text={text}
          img={img}
          classes={classes}
        />
      ))}
    </div>
  );
};

export default ChooseSide;
