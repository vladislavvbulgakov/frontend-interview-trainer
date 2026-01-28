import styles from "./Header.module.css";
import NavProfile from "../../ui/navProfile/navProfile";

const Header = () => {
   return (
      <div className={styles.header}>
         {/* Левая часть намеренно пустая */}
         <div className={styles.left} />

         {/* Правая часть */}
         <div className={styles.right}>
            <button className={styles.link}>О Loop Score</button>

            <button className={styles.link}>Наш блог</button>

            <NavProfile />
         </div>
      </div>
   );
};

export default Header;
