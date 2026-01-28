import styles from "./TopicsSelector.module.css";

const ALL_VALUE = "ALL";

const TopicsSelector = ({ selected, onChange, topics }) => {
   const isAllSelected = selected.includes(ALL_VALUE);

   const topicsList = topics
      .filter((t) => t.type === "TECHNICAL")
      .map((t) => ({
         label: t.name,
         value: t.id
      }));

   const toggleTopic = (value) => {
      if (value === ALL_VALUE) {
         onChange([ALL_VALUE]);
         return;
      }

      if (isAllSelected) {
         onChange([value]);
         return;
      }

      if (selected.includes(value)) {
         onChange(selected.filter((t) => t !== value));
      } else {
         onChange([...selected, value]);
      }
   };

   return (
      <div className={styles.wrapper}>
         <button
            type="button"
            className={`${styles.topic} ${isAllSelected ? styles.active : ""}`}
            onClick={() => toggleTopic(ALL_VALUE)}
         >
            Все темы
         </button>

         {topicsList.map((topic) => {
            const isActive = selected.includes(topic.value);

            return (
               <button
                  key={topic.value}
                  type="button"
                  className={`${styles.topic} ${isActive ? styles.active : ""}`}
                  onClick={() => toggleTopic(topic.value)}
               >
                  {topic.label}
               </button>
            );
         })}
      </div>
   );
};

export default TopicsSelector;
