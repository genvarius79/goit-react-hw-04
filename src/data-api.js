import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "Nj55OICODi_12b9y-MIoxcRFNAACCVH8GcJF8bAvTIY";

export const fetchData = async (searchQuery, currentPage) => {
  // const response = await axios.get(`/search?query=${searchQuery}`);

  const response = await axios.get("/search/photos", {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 12,
      client_id: ACCESS_KEY,
      orientation: "landscape",
    },
  });

  return response.data.results;
};
