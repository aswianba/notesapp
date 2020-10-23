import axios from "axios";

const callAxios = (url, params, method, reqbody = {}) => {
  //should be configured
  const endpoint = "http://localhost:3001" + url;

  const axiosInstance = axios.create({
    headers: { "Content-Type": "application/json" },
  });

  switch (method) {
    case "GET":
      return axiosInstance
        .get(endpoint, { params })
        .then((response) => response)
        .catch((error) => {
          throw error;
        });
    case "POST":
      return axiosInstance
        .post(endpoint, reqbody, { params })
        .then((response) => response)
        .catch((error) => {
          throw error;
        });
    case "PUT":
      return axiosInstance
        .put(endpoint, reqbody, { params })
        .then((response) => response)
        .catch((error) => {
          throw error;
        });
    case "DELETE":
      return axiosInstance
        .delete(endpoint)
        .then((response) => response)
        .catch((error) => {
          throw error;
        });
  }
};

export default callAxios;
