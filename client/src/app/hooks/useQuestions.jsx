import React, { useContext, useEffect, useState } from "react";
import questionsService from "../services/questions.service";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const QuestionsContext = React.createContext();

export const useQuestions = () => {
   return useContext(QuestionsContext);
};

export const QuestionsProvider = ({ children }) => {
   const [questions, setQuestions] = useState([]);
   const [meta, setMeta] = useState({ total: 0 });
   const [error, setError] = useState(null);
   const [isLoading, setLoading] = useState(false);

   useEffect(() => {
      if (error !== null) {
         toast(error);
         setError(null);
      }
   }, [error]);
   function errorCatcher(error) {
      const { message } = error.response.data;
      setError(message);
   }
   async function loadQuestions(params) {
      try {
         setLoading(true);
         const content = await questionsService.get(params);
         setQuestions(content.items);
         setMeta({ total: content.meta.total });
         return content;
      } catch (error) {
         errorCatcher(error);
      } finally {
         setLoading(false);
      }
   }
   return (
      <QuestionsContext.Provider
         value={{ questions, meta, isLoading, loadQuestions }}
      >
         {children}
      </QuestionsContext.Provider>
   );
};
QuestionsProvider.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
   ])
};
