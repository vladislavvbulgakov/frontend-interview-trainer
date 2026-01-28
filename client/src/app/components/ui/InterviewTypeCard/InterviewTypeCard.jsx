import styles from "./InterviewTypeCard.module.css";

const InterviewTypeCard = ({ title, subtitle, active, image, onClick }) => {
   return (
      <div
         className={`${styles.card} ${active ? styles.active : ""}`}
         onClick={onClick}
      >
         {" "}
         <div className={styles.iconWrapper}>
            <img src={image} alt="" className={styles.icon} />
         </div>
         <div className={styles.text}>
            <h3>{title}</h3>
            <p>{subtitle}</p>
         </div>
      </div>
   );
};

export default InterviewTypeCard;
