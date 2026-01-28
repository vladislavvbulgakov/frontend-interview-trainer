import styles from "./WeakTopicsCard.module.css";

const WeakTopicsCard = ({ topics }) => {
   return (
      <div className={styles.card}>
         <h3 className={styles.title}>Слабые темы</h3>

         {topics.length === 0 ? (
            <p className={styles.empty}>Отлично! Слабых тем не найдено</p>
         ) : (
            <ul className={styles.list}>
               {topics.map((topic) => (
                  <li key={topic}>{topic}</li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default WeakTopicsCard;
