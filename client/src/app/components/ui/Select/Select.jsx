import { useState, useRef, useEffect } from "react";
import styles from "./Select.module.css";

const Select = ({ value, options, defaultOption, onChange }) => {
   const [open, setOpen] = useState(false);
   const ref = useRef(null);

   useEffect(() => {
      const handleClickOutside = (e) => {
         if (ref.current && !ref.current.contains(e.target)) {
            setOpen(false);
         }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   return (
      <div className={styles.wrapper} ref={ref}>
         <button
            type="button"
            className={styles.trigger}
            onClick={() => setOpen((prev) => !prev)}
         >
            {value?.label || defaultOption}
            <span className={styles.arrow}>▾</span>
         </button>

         {open && (
            <ul className={styles.dropdown}>
               {options.map((opt) => (
                  <li
                     key={opt.value}
                     className={`${styles.option} ${
                        value?.value === opt.value ? styles.optionActive : ""
                     }`}
                     onClick={() => {
                        onChange(opt);
                        setOpen(false);
                     }}
                  >
                     {opt.label}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default Select;
