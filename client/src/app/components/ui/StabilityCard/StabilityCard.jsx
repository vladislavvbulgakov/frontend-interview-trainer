import styles from "./StabilityCard.module.css";

const StabilityCard = ({ stability }) => {
   const percent = Math.round(stability.average_confidence * 100);

   return (
      <div className={styles.card}>
         <h3 className={styles.title}>Стабильность знаний</h3>

         <div className={styles.value}>{percent}%</div>

         <p className={styles.caption}>Средняя уверенность по ключевым темам</p>
      </div>
   );
};

export default StabilityCard;
