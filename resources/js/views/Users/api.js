import '../../axios';
const url = 'users';

const getUsers = async () => {
    await axios
    .get(`${url}`)
    .then((res) => response.data)
    .catch((error) => {
        return error.response.data
    });
};

export {getUsers};
