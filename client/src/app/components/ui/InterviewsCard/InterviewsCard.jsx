import { displayDate } from "../../../utils/displayDate";
import styles from "./InterviewsCard.module.css";

const InterviewsCard = ({ interview, onContinue, onDelete }) => {
   const { title, userName, grade, questionsCount, createdAt, status } =
      interview;

   const isCompleted = status === "COMPLETED";

   return (
      <div className={styles.card}>
         <div className={styles.header}>
            <span
               className={`${styles.status} ${
                  isCompleted ? styles.completed : styles.inProgress
               }`}
            >
               {isCompleted ? "Завершено" : "В процессе"}
            </span>

            <span className={styles.date}>{displayDate(createdAt)}</span>
         </div>

         <span className={styles.title}>{title}</span>
         <div className={styles.name}>{userName}</div>

         <div className={styles.meta}>
            <span className={styles.badge}>{grade}</span>
            <span>{questionsCount} вопросов</span>
         </div>

         <div className={styles.actions}>
            <button className={styles.primary} onClick={onContinue}>
               {isCompleted ? "📈 Результаты" : "⚙️ Продолжить"}
            </button>

            <button className={styles.delete} onClick={onDelete}>
               🗑 Удалить
            </button>
         </div>
         <div className={styles.footer}>
            Создано: {displayDate(createdAt, true)}
         </div>
      </div>
   );
};

export default InterviewsCard;
