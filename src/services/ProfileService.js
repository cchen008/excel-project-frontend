import axios from "axios";

const PROFILE_REST_API_URL = "https://excel-project-backend.herokuapp.com/api/v1/profiles";

class ProfileService {

    getProfiles() {
        return axios.get(PROFILE_REST_API_URL);
    }
}

export default new ProfileService();