import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
   if (totalPages <= 1) return null;

   const pages = [];

   let start = Math.max(1, currentPage - 2);
   let end = Math.min(totalPages, currentPage + 2);

   if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push("...");
   }

   for (let i = start; i <= end; i++) {
      pages.push(i);
   }

   if (end < totalPages) {
      if (end < totalPages - 1) pages.push("...");
      pages.push(totalPages);
   }
   return (
      <div className={styles.pagination}>
         {/* Назад */}
         {currentPage > 1 && (
            <button
               className={styles.navText}
               onClick={() => onPageChange(currentPage - 1)}
            >
               <span className={styles.arrow}>← Назад</span>
            </button>
         )}

         {/* Страницы */}
         {pages.map((page, index) =>
            page === "..." ? (
               <span key={`dots-${index}`} className={styles.dots}>
                  …
               </span>
            ) : (
               <button
                  key={`page-${page}`}
                  className={
                     page === currentPage
                        ? `${styles.page} ${styles.active}`
                        : styles.page
                  }
                  onClick={() => onPageChange(page)}
               >
                  {page}
               </button>
            )
         )}

         {/* Вперёд */}
         {currentPage < totalPages && (
            <button
               className={styles.navText}
               onClick={() => onPageChange(currentPage + 1)}
            >
               Вперёд →
            </button>
         )}
      </div>
   );
};

export default Pagination;
