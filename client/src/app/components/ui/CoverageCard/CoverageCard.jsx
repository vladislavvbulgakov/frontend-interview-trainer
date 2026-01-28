import styles from "./CoverageCard.module.css";

const CoverageCard = ({ completeness }) => {
   const { hr, technical, coverage } = completeness;

   return (
      <div className={styles.card}>
         <h3 className={styles.title}>Целостность </h3>

         <div className={styles.items}>
            <div className={styles.item}>
               <span>HR</span>
               <span className={hr ? styles.ok : styles.fail}>
                  {hr ? "✔" : "✖"}
               </span>
            </div>

            <div className={styles.item}>
               <span>Technical</span>
               <span className={technical ? styles.ok : styles.fail}>
                  {technical ? "✔" : "✖"}
               </span>
            </div>
         </div>

         <div className={styles.coverage}>
            Общее покрытие: <strong>{Math.round(coverage * 100)}%</strong>
         </div>
      </div>
   );
};

export default CoverageCard;
