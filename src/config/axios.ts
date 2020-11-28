import axios from "axios";
import { BASE_URL } from "../global/globalConstants";

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;
