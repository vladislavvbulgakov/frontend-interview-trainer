import { Outlet } from "react-router-dom";
import styles from "./PrivateLayout.module.css";

import Sidebar from "../../components/common/Sidebar/Sidebar";
import Header from "../../components/common/Header/Header";

const PrivateLayout = () => {
   return (
      <div className={styles.layout}>
         <aside className={styles.sidebar}>
            <Sidebar />
         </aside>

         <div className={styles.main}>
            <header className={styles.header}>
               <Header />
            </header>

            <main className={styles.content}>
               <Outlet />
            </main>
         </div>
      </div>
   );
};

export default PrivateLayout;
