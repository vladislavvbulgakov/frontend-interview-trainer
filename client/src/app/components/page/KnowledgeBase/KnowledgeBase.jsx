import { useEffect, useState, useRef, useMemo } from "react";
import styles from "./KnowledgeBase.module.css";

import QuestionCard from "../../ui/QuestionCard/QuestionCard";
import KnowledgeFilters from "../../ui/KnowledgeFilters/KnowledgeFilters";
import Pagination from "../../ui/Pagination/pagination";

import STATUS_OPTIONS from "../../../utils/statusOptions";
import GRADE_OPTIONS from "../../../utils/gradeOptions";
// import MOCK_QUESTIONS from "../../../mockData/mockQuestions"; mock-questions для теста
import { useTopics } from "../../../hooks/useTopics";
import { useQuestions } from "../../../hooks/useQuestions";

const KnowledgeBase = () => {
   const PAGE_SIZE = 21;
   const [searchQuery, setSearchQuery] = useState("");
   const [debouncedSearch, setDebouncedSearch] = useState("");
   const isSearchActive = searchQuery.length >= 2;

   const [selectedSection, setSelectedSection] = useState("ALL");

   const [selectedTopic, setSelectedTopic] = useState({
      label: "Все темы",
      value: "ALL"
   });

   const [selectedGrade, setSelectedGrade] = useState({
      label: "Все грейды",
      value: "ALL"
   });

   const [selectedStatus, setSelectedStatus] = useState({
      label: "Все статусы",
      value: "ALL"
   });

   const [debouncedFilters, setDebouncedFilters] = useState({
      topic: selectedTopic,
      grade: selectedGrade,
      status: selectedStatus,
      section: selectedSection
   });

   const prevFiltersRef = useRef(debouncedFilters);

   const [currentPage, setCurrentPage] = useState(1);
   const {
      questions,
      meta,
      isLoading: questionsLoading,
      loadQuestions
   } = useQuestions();
   const { topics, isLoading: topicsLoading } = useTopics();

   const uiTopics = useMemo(() => {
      if (!topics?.length || topicsLoading) {
         return [{ label: "Все темы", value: "ALL" }];
      }

      return [
         { label: "Все темы", value: "ALL" },
         ...topics.map((t) => ({
            label: t.name,
            value: t.id,
            type: t.type
         }))
      ];
   }, [topics, topicsLoading]);

   const filteredTopics = useMemo(() => {
      if (selectedSection === "ALL") return uiTopics;

      return uiTopics.filter(
         (t) => t.value === "ALL" || t.type === selectedSection
      );
   }, [uiTopics, selectedSection]);

   const buildQueryParams = () => {
      const params = {
         limit: PAGE_SIZE,
         offset: (currentPage - 1) * PAGE_SIZE
      };

      const { topic, grade, status, section } = debouncedFilters;

      if (grade.value !== "ALL") {
         params.grade = grade.value;
      }

      if (topic.value !== "ALL") {
         params.topicId = topic.value;
      }

      if (status.value !== "ALL") {
         params.answerStatus = status.value;
      }

      if (section !== "ALL") {
         params.type = section;
      }

      if (isSearchActive) {
         params.search = debouncedSearch;
      }

      return params;
   };

   // Search debounce
   useEffect(() => {
      const handler = setTimeout(() => {
         setDebouncedSearch(searchQuery.trim());
         setCurrentPage(1);
      }, 1000);

      return () => clearTimeout(handler);
   }, [searchQuery]);

   // Filters debounce
   useEffect(() => {
      const prev = prevFiltersRef.current;

      const hasChanged =
         prev.topic.value !== selectedTopic.value ||
         prev.grade.value !== selectedGrade.value ||
         prev.status.value !== selectedStatus.value ||
         prev.section !== selectedSection;

      if (!hasChanged) return;

      const handler = setTimeout(() => {
         const nextFilters = {
            topic: selectedTopic,
            grade: selectedGrade,
            status: selectedStatus,
            section: selectedSection
         };

         setDebouncedFilters(nextFilters);
         prevFiltersRef.current = nextFilters;
         setCurrentPage(1);
      }, 500);

      return () => clearTimeout(handler);
   }, [selectedTopic, selectedGrade, selectedStatus, selectedSection]);

   useEffect(() => {
      loadQuestions(buildQueryParams());
   }, [currentPage, debouncedFilters, debouncedSearch]);

   const handlePageChange = (pageIndex) => {
      setCurrentPage(pageIndex);
   };

   const handleSearchChange = (value) => {
      setSearchQuery(value);
      setCurrentPage(1);
   };

   const handleTopicSelect = (item) => {
      setSelectedTopic(item);
   };

   const handleGradeSelect = (item) => {
      setSelectedGrade(item);
   };

   const handleStatusSelect = (item) => {
      setSelectedStatus(item);
   };

   const handleSectionChange = (section) => {
      setSelectedSection(section);

      if (
         selectedTopic.value !== "ALL" &&
         section !== "ALL" &&
         selectedTopic.type !== section
      ) {
         setSelectedTopic({ label: "Все темы", value: "ALL" });
      }
   };
   const totalPages = Math.ceil(meta.total / PAGE_SIZE);
   return (
      <div className={styles.page}>
         <h1 className={styles.title}>База знаний</h1>
         <p className={styles.subtitle}>
            База знаний представляет собой список популярных вопросов с
            собеседований. Вопросы имеют персональный статус для каждого
            пользователя.
         </p>
         <KnowledgeFilters
            section={selectedSection}
            onSectionChange={handleSectionChange}
            filteredTopics={topicsLoading ? [] : filteredTopics}
            selectedTopic={selectedTopic}
            onTopicSelect={handleTopicSelect}
            grades={GRADE_OPTIONS}
            grade={selectedGrade}
            onGradeChange={handleGradeSelect}
            statuses={STATUS_OPTIONS}
            status={selectedStatus}
            onStatusChange={handleStatusSelect}
            search={searchQuery}
            onSearchChange={handleSearchChange}
         />
         {questionsLoading && <div>Загрузка вопросов…</div>}
         {!questionsLoading && (
            <div className={styles.list}>
               {questions.map((q) => (
                  <QuestionCard key={q.questionId} question={q} />
               ))}
            </div>
         )}
         <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
         />
         {/* comment pagination if u use mock-questions*/}
      </div>
   );
};

export default KnowledgeBase;
