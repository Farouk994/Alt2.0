/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
   getSchools: function () {
      return axios.get("http://localhost:5050/api/school/");
   },
   getSchool: function (id) {
      return axios.get(`http://localhost:5050/api/school/${id}`);
   },
   searchSchool: function (query) {
      return axios.get(
         `http://localhost:5050/api/school/search-school/${query}`
      );
   },
};