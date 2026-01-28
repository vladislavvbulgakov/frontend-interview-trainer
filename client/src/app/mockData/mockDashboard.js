export const dashboardMock = {
   grade: "MIDDLE",

   loopScore: 72,

   breakdown: {
      completeness: {
         hr: true,
         technical: false,
         coverage: 0.6
      },

      stability: {
         average_confidence: 0.72,
         weak_topics: ["Async JS", "Performance"]
      },

      interviewConsistency: {
         lastN: 5,
         full: 1,
         hrOnly: 2,
         technicalOnly: 2
      },

      recommendations: [
         "Пройди ещё 2 FULL интервью",
         "Повтори темы: Async JS, Performance"
      ]
   }
};
