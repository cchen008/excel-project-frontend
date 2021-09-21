import axios from "axios";

const PROFILE_REST_API_URL = "http://localhost:8080/api/v1/profiles";

class ProfileService {

    getProfiles() {
        return axios.get(PROFILE_REST_API_URL);
    }
}

export default new ProfileService();