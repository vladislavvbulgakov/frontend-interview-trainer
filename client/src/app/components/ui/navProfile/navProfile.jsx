import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../../hooks/useAuth";
import styles from "./NavProfile.module.css";

const NavProfile = () => {
   //    const { currentUser, logOut } = useAuth();
   const [isOpen, setIsOpen] = useState(false);
   const ref = useRef(null);

   const toggle = () => setIsOpen((prev) => !prev);

   useEffect(() => {
      const handleClickOutside = (e) => {
         if (ref.current && !ref.current.contains(e.target)) {
            setIsOpen(false);
         }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
         document.removeEventListener("mousedown", handleClickOutside);
   }, []);

   //    if (!currentUser) return null;

   return (
      <div className={styles.profile} ref={ref}>
         <button className={styles.trigger} onClick={toggle}>
            <div className={styles.name}>{"John Doe"}</div>
            <div className={styles.avatar}>JD</div>
         </button>

         {isOpen && (
            <div className={styles.menu}>
               <Link
                  //   to={`/users/${currentUser.id}`}
                  className={styles.item}
                  onClick={() => setIsOpen(false)}
               >
                  Профиль
               </Link>

               <button
                  className={`${styles.item} ${styles.logout}`}
                  //   onClick={logOut}
               >
                  Выйти
               </button>
            </div>
         )}
      </div>
   );
};

export default NavProfile;
