import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PrivateLayout from "./layouts/PrivateLayout/PrivateLayout";
import Dashboard from "./components/page/Dashboard/Dashboard";
import KnowledgeBase from "./components/page/KnowledgeBase/KnowledgeBase";
import StartInterview from "./components/page/StartInterview/StartInterview";
import { TopicProvider } from "./hooks/useTopics";
import { QuestionsProvider } from "./hooks/useQuestions";
import MyInterviews from "./components/page/MyInterviews/MyInterviews";

const Placeholder = ({ title }) => <div style={{ fontSize: 20 }}>{title}</div>;

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<PrivateLayout />}>
               <Route path="/" element={<Navigate to="/dashboard" />} />
               <Route path="/dashboard" element={<Dashboard />} />
               <Route
                  path="/start-interview"
                  element={
                     <TopicProvider>
                        <StartInterview />
                     </TopicProvider>
                  }
               />
               <Route path="/interviews" element={<MyInterviews />} />
               <Route
                  path="/knowledge-base"
                  element={
                     <QuestionsProvider>
                        <TopicProvider>
                           <KnowledgeBase />
                        </TopicProvider>
                     </QuestionsProvider>
                  }
               />
               <Route
                  path="/progress"
                  element={<Placeholder title="Прогресс" />}
               />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
