import styles from "./QuestionCard.module.css";

const STATUS_LABELS = {
   CONFIDENT: "Уверенно",
   DOUBT: "Сомневаюсь",
   DONT_KNOW: "Не знаю",
   NOT_ANSWERED: "Ещё не отвечал"
};
const GRADES_LABELS = {
   JUNIOR: "J",
   MIDDLE: "M",
   SENIOR: "S"
};

const QuestionCard = ({ question }) => {
   const { type, topic, content: text, userStatus, grade } = question;

   return (
      <div className={styles.card}>
         <div className={styles.meta}>
            {type} | {topic.name}
         </div>

         <div className={styles.question}>{text}</div>

         <div className={styles.footer}>
            <span
               className={`${styles.status} ${styles[userStatus.lastAnswer]}`}
            >
               {STATUS_LABELS[userStatus.lastAnswer]}
            </span>

            <div className={styles.grades}>
               <span className={`${styles.grade} ${styles[grade]}`}>
                  {GRADES_LABELS[grade]}
               </span>
            </div>
         </div>
      </div>
   );
};

export default QuestionCard;
