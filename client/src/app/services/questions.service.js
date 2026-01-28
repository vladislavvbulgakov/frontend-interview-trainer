import httpService from "./http.service";
const questionsEndPoint = "questions/";

const questionService = {
   get: async (params = {}) => {
      const { data } = await httpService.get(questionsEndPoint, {
         params
      });
      return data;
   }
};

export default questionService;
