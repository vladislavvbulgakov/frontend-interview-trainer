import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./Sidebar.module.css";

import navigationArray from "../../../utils/navigationArray";

import feedbackIcon from "../../../assets/icons/feedback.svg";
import collapseIcon from "../../../assets/icons/collapse.svg";

const Sidebar = () => {
   const [collapsed, setCollapsed] = useState(false);

   return (
      <nav className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
         <div className={styles.logo}>
            <span className={styles.logoText}>
               {collapsed ? "FL" : "FrontendLoop"}
            </span>
         </div>

         <ul className={styles.nav}>
            {navigationArray.map(([to, icon, label]) => (
               <li key={to}>
                  <NavLink
                     to={to}
                     className={({ isActive }) =>
                        isActive ? styles.active : styles.link
                     }
                     title={collapsed ? label : undefined}
                  >
                     <img src={icon} alt="" />
                     {!collapsed && <span>{label}</span>}
                  </NavLink>
               </li>
            ))}
         </ul>

         <div className={styles.bottom}>
            <button className={styles.feedback} title="Обратная связь">
               <img src={feedbackIcon} alt="" />
               {!collapsed && <span>Обратная связь</span>}
            </button>

            <button
               className={styles.collapse}
               onClick={() => setCollapsed((v) => !v)}
               title={collapsed ? "Развернуть" : "Свернуть"}
            >
               <img src={collapseIcon} alt="" />
            </button>
         </div>
      </nav>
   );
};

export default Sidebar;
