import axios from "axios";

export default {

    saveLead: function (leadData){
        return axios.post("/api/leads", leadData);
    }
};