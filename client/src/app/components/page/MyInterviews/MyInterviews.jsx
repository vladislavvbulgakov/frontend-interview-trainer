import { useMemo, useState } from "react";
import styles from "./MyInterviews.module.css";
import InterviewsCard from "../../ui/InterviewsCard/InterviewsCard";
import { useNavigate } from "react-router-dom";
import MOCK_INTERVIEWS from "../../../mockData/mockInterviews";
import SECTION_OPTIONS from "../../../utils/sectionOptions";
import SORT_OPTIONS from "../../../utils/sortOptions";
const MyInterviews = () => {
   const navigate = useNavigate();

   const [searchQuery, setSearchQuery] = useState("");
   //    const [section, setSection] = useState(SECTION_OPTIONS[0]);
   const [sortOrder, setSortOrder] = useState(SORT_OPTIONS[0].value);
   const [viewMode, setViewMode] = useState("GRID");

   const interviews = useMemo(() => {
      let list = [...MOCK_INTERVIEWS];

      //will switch to server logic
      if (searchQuery.trim()) {
         const q = searchQuery.toLowerCase();
         list = list.filter((i) => i.title.toLowerCase().includes(q));
      }

      //   if (section.value !== "ALL") {
      //      list = list.filter((i) => i.type === section.value);
      //   }

      list.sort((a, b) => {
         const aDate = new Date(a.createdAt);
         const bDate = new Date(b.createdAt);
         return sortOrder === "NEW" ? bDate - aDate : aDate - bDate;
      });

      return list;
   }, [searchQuery, sortOrder]);

   return (
      <div className={styles.page}>
         <h1 className={styles.title}>Мои интервью</h1>

         <input
            className={styles.searchQuery}
            placeholder="⛶ ⌕ Поиск по интервью..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
         />

         <div className={styles.toolbar}>
            <div className={styles.leftControls}>
               <div className={styles.sortGroup}>
                  <button
                     className={`${styles.sortBtn} ${
                        sortOrder === "NEW" ? styles.sortActive : ""
                     }`}
                     onClick={() => setSortOrder("NEW")}
                  >
                     <span>
                        <i
                           className="fa fa-sort-amount-asc"
                           aria-hidden="true"
                        ></i>
                     </span>
                     <span>Сначала новые</span>
                  </button>

                  <button
                     className={`${styles.sortBtn} ${
                        sortOrder === "OLD" ? styles.sortActive : ""
                     }`}
                     onClick={() => setSortOrder("OLD")}
                  >
                     <span>
                        <i
                           className="fa fa-sort-amount-desc"
                           aria-hidden="true"
                        ></i>
                     </span>
                     <span>Сначала старые</span>
                  </button>
               </div>
               <div className={styles.viewSwitch}>
                  <button
                     className={`${styles.viewBtn} ${
                        viewMode === "GRID" ? styles.viewActive : ""
                     }`}
                     onClick={() => setViewMode("GRID")}
                     title="Сетка"
                  >
                     <i className="fa fa-th-large" />
                  </button>

                  <button
                     className={`${styles.viewBtn} ${
                        viewMode === "LIST" ? styles.viewActive : ""
                     }`}
                     onClick={() => setViewMode("LIST")}
                     title="Список"
                  >
                     <i className="fa fa-bars" />
                  </button>
               </div>
               <button
                  className={styles.createBtn}
                  onClick={() => navigate("/start-interview")}
               >
                  <span>
                     <i className="fa fa-plus" aria-hidden="true" />
                  </span>
                  <span>Начать новое</span>
               </button>
            </div>
         </div>

         <div
            className={`${styles.grid} ${
               viewMode === "LIST" ? styles.list : ""
            }`}
         >
            {interviews.map((interview) => (
               <InterviewsCard
                  key={interview.id}
                  interview={interview}
                  onContinue={() => console.log("continue", interview.id)}
                  onDelete={() => console.log("delete", interview.id)}
                  viewMode={viewMode}
               />
            ))}
         </div>
      </div>
   );
};

export default MyInterviews;
