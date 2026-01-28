import { useState } from "react";
import styles from "./StartInterview.module.css";
import InterviewTypeCard from "../../ui/InterviewTypeCard/InterviewTypeCard";
import TopicsSelector from "../../ui/TopicsSelector/TopicsSelector";
import hrSectionIcon from "../../../assets/icons/hr-section.svg";
import techSectionIcon from "../../../assets/icons/tech-section.svg";
import fullSectionIcon from "../../../assets/icons/full-section.svg";
// import MOCK_TOPICS from "../../../mockData/mockTopics";  mock-topics для теста
import { useTopics } from "../../../hooks/useTopics";

const StartInterview = () => {
   const [section, setSection] = useState(null);
   const [selectedTopics, setSelectedTopics] = useState([]);
   const { topics, isLoading: topicsLoading } = useTopics();

   const isTech = section === "TECH";

   const handleStart = () => {
      if (!section) {
         alert("Сначала выберите формат интервью");
         return;
      }

      if (isTech && selectedTopics.length < 5) {
         alert("Выберите минимум 5 тем");
         return;
      }

      // interview logic
   };

   return (
      <div className={styles.page}>
         <h1 className={styles.title}>Интервью-тренажёр</h1>
         <p className={styles.subtitle}>
            Выбери секцию и запусти mock-интервью со случайно подобранными
            вопросами. Это поможет тебе подготовиться к реальным собеседованиям.
         </p>

         <div className={styles.step}>
            <span className={styles.stepNumber}>1</span>
            <span className={styles.stepTitle}>Выберите формат интервью</span>
         </div>

         <div className={styles.cards}>
            <InterviewTypeCard
               image={hrSectionIcon}
               title="HR-интервью"
               subtitle="Soft skills и опыт работы"
               active={section === "HR"}
               onClick={() => setSection("HR")}
            />

            <InterviewTypeCard
               image={techSectionIcon}
               title="Техническая секция"
               subtitle="Интервью по hard-skills с выбором тем"
               active={section === "TECH"}
               onClick={() => setSection("TECH")}
            />

            <InterviewTypeCard
               image={fullSectionIcon}
               title="Full (HR + TECH)"
               subtitle="Полный цикл собеседования"
               active={section === "FULL"}
               onClick={() => setSection("FULL")}
            />
         </div>

         {isTech ? (
            !topicsLoading ? (
               <>
                  <div className={styles.step}>
                     <span className={styles.stepNumber}>2</span>
                     <span className={styles.stepTitle}>Темы интервью</span>
                  </div>

                  <div className={styles.topicsBlock}>
                     <p className={styles.topicsHint}>
                        Выберите минимум 5 тем или «Все темы»
                     </p>

                     <TopicsSelector
                        selected={selectedTopics}
                        onChange={setSelectedTopics}
                        topics={topics}
                     />
                     {selectedTopics.length > 0 &&
                        selectedTopics.length < 5 &&
                        !selectedTopics.includes("ALL") && (
                           <div className={styles.topicsWarning}>
                              Необходимо выбрать минимум 5 тем для начала
                              интервью
                           </div>
                        )}
                  </div>
               </>
            ) : (
               <p>Загрузка технических топиков...</p>
            )
         ) : null}

         <div className={styles.step}>
            <span className={styles.stepNumber}>{isTech ? 3 : 2}</span>
            <span className={styles.stepTitle}>Уровень вопросов</span>
         </div>

         <div className={styles.footer}>
            <div className={styles.gradeBox}>
               <span className={styles.gradeLabel}>Грейд вопросов:</span>
               <span className={styles.gradeBadge}>Middle</span>
            </div>

            <button className={styles.startBtn} onClick={handleStart}>
               ▶ Запустить интервью
            </button>
         </div>
      </div>
   );
};

export default StartInterview;
