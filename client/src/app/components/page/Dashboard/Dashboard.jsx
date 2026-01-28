import styles from "./Dashboard.module.css";
import { dashboardMock } from "../../../mockData/mockDashboard";

import LoopScoreCard from "../../ui/LoopScoreCard/LoopScoreCard";
import CoverageCard from "../../ui/CoverageCard/CoverageCard";
import StabilityCard from "../../ui/StabilityCard/StabilityCard";
import WeakTopicsCard from "../../ui/WeakTopicsCard/WeakTopicsCard";
import RecommendationsCard from "../../ui/RecommendationsCard/RecommendationsCard";

const Dashboard = () => {
   const { loopScore, breakdown, grade } = dashboardMock;

   return (
      <div className={styles.dashboard}>
         <h1 className={styles.title}>Добрый вечер, John Doe!🧑🏻‍💻</h1>

         <p className={styles.subtitle}>
            Добро пожаловать в твой дэшборд. Здесь указана метрика Loop Score и
            другие показатели.
         </p>
         <div className={styles.mainContent}>
            <LoopScoreCard
               score={loopScore}
               breakdown={breakdown}
               grade={grade}
            />

            <div className={styles.gridTwo}>
               <CoverageCard completeness={breakdown.completeness} />
               <StabilityCard stability={breakdown.stability} />
            </div>

            <WeakTopicsCard topics={breakdown.stability.weak_topics} />

            <RecommendationsCard recommendations={breakdown.recommendations} />
         </div>
      </div>
   );
};

export default Dashboard;
