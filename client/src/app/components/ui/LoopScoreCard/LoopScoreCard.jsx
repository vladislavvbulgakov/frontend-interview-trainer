import styles from "./LoopScoreCard.module.css";

const LoopScoreCard = ({ score, grade, breakdown }) => {
   return (
      <div className={styles.card}>
         <div className={styles.header}>
            <div className={styles.titleGroup}>
               <h2 className={styles.title}>Loop Score</h2>

               <div className={styles.tooltip}>
                  ?
                  <div className={styles.tooltipContent}>
                     <p>
                        <strong>Loop Score</strong> — показатель уверенности,
                        основанный на результатах ваших недавних собеседований.
                     </p>
                     <a href="#">Подробнее о Loop Score →</a>
                  </div>
               </div>
            </div>

            <span className={styles.grade}>Грейд: {grade}</span>
         </div>

         <div className={styles.score}>{score}%</div>

         <div className={styles.progress}>
            <div className={styles.fill} style={{ width: `${score}%` }} />
         </div>

         {breakdown.completeness.coverage < 1 && (
            <p className={styles.limit}>
               Loop Score ограничен покрытием грейда
            </p>
         )}
      </div>
   );
};

export default LoopScoreCard;
