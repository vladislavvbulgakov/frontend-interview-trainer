import styles from "./RecommendationsCard.module.css";

const RecommendationsCard = ({ recommendations }) => {
   return (
      <div className={styles.card}>
         <h3 className={styles.title}>Рекомендации</h3>

         <ul className={styles.list}>
            {recommendations.map((rec, idx) => (
               <li key={idx}>{rec}</li>
            ))}
         </ul>
      </div>
   );
};

export default RecommendationsCard;
