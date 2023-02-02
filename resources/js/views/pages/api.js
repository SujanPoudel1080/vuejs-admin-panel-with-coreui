import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "XSRF-TOKEN";

const { API_URL } = import.meta.env;

/**
 * LOGIN
 */

export const apiLogin = (email , password) =>
    axios.post(
        `${API_URL}/api/login`,
        {
            email: email,
            password: password,
        },
        {
            headers: {
                Accept: "application/json",
            },
        }
    );
export const apiLogout = () => axios.get(`${API_URL}/api/logout`, {
    headers: {
        Accept: "application/json",
    },
});
export const apiCsrfCookie = () =>
    axios.get(`${API_URL}/sanctum/csrf-cookie`, {
        headers: {
            Accept: "application/json",
        },
    });
export const apiUser = () => axios.get(`${API_URL}/api/user`);
