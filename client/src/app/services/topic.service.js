import httpService from "./http.service";
const topicEndpoint = "topics/";

const topicService = {
   get: async (params = {}) => {
      const { data } = await httpService.get(topicEndpoint, { params });
      return data;
   }
};

export default topicService;
