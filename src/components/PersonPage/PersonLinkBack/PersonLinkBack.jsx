import React from "react";
import { useNavigate, useLocation } from "react-router";
import iconBack from "./img/back_arrow_icon.svg";
import styles from "./PersonLinkBack.module.css";

const PersonLinkBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate("/characters", {
      state: { offset: location.state ? location.state.offset : 0 },
    });
  };

  return (
    <a href="#" onClick={handleGoBack} className={styles.link}>
      <img className={styles.link__img} src={iconBack} alt="Go back" />
      <span>Go back</span>
    </a>
  );
};

export default PersonLinkBack;
