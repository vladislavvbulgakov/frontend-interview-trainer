import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import topicService from "../services/topic.service";
import PropTypes from "prop-types";

const TopicsContext = React.createContext();
export const useTopics = () => {
   return useContext(TopicsContext);
};

export const TopicProvider = ({ children }) => {
   const [topics, setTopics] = useState([]);
   const [error, setError] = useState(null);
   const [isLoading, setLoading] = useState(true);
   useEffect(() => {
      getTopics();
   }, []);
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
   async function getTopics() {
      try {
         const content = await topicService.get();
         setTopics(content);
         setLoading(false);
      } catch (error) {
         errorCatcher(error);
      } finally {
         setLoading(false);
      }
   }

   return (
      <TopicsContext.Provider value={{ isLoading, topics }}>
         {children}
      </TopicsContext.Provider>
   );
};
TopicProvider.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
   ])
};
