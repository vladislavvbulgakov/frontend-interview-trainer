import styles from "./KnowledgeFilters.module.css";
import Select from "../Select/Select";

const KnowledgeFilters = ({
   section,
   onSectionChange,
   filteredTopics,
   selectedTopic,
   onTopicSelect,
   grades,
   grade,
   onGradeChange,
   statuses,
   status,
   onStatusChange,
   search,
   onSearchChange
}) => {
   return (
      <div className={styles.filters}>
         <div className={styles.left}>
            <div className={styles.section}>
               <button
                  className={`${styles.sectionBtn} ${
                     section === "ALL" ? styles.active : ""
                  }`}
                  onClick={() => onSectionChange("ALL")}
               >
                  Все
               </button>

               <button
                  className={`${styles.sectionBtn} ${
                     section === "TECHNICAL" ? styles.active : ""
                  }`}
                  onClick={() => onSectionChange("TECHNICAL")}
               >
                  Технические
               </button>

               <button
                  className={`${styles.sectionBtn} ${
                     section === "HR" ? styles.active : ""
                  }`}
                  onClick={() => onSectionChange("HR")}
               >
                  HR
               </button>
            </div>

            <Select
               value={selectedTopic}
               options={filteredTopics}
               onChange={onTopicSelect}
               defaultOption="Все темы"
               name="topic"
            />

            <Select
               value={grade}
               options={grades}
               onChange={onGradeChange}
               defaultOption="Все уровни"
               name="grade"
            />

            <Select
               value={status}
               options={statuses}
               onChange={onStatusChange}
               defaultOption="Все статусы"
               name="status"
            />
         </div>

         <div className={styles.right}>
            <input
               type="text"
               placeholder="Поиск по вопросам..."
               className={styles.search}
               value={search}
               onChange={(e) => onSearchChange(e.target.value)}
            />
         </div>
      </div>
   );
};

export default KnowledgeFilters;
