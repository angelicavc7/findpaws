import axios from "axios";
const API = {
  getAllLostPets: function () {
    return axios.get("http://localhost:3001/api/lost");
  },
  getAllFoundPets: function () {
    return axios.get("http://localhost:3001/api/found");
  },
  createLostPet: function (data) {
    return axios.post("http://localhost:3001/api/lost", data);
  },
  deleteLostPet: function (data) {
    return axios.delete("http://localhost:3001/api/lost", data);
  },
  deleteFoundPet: function (data) {
    return axios.delete("http://localhost:3001/api/found", data);
  },
};
export default API;
