const fetchLocalUser = () => {
    const token = localStorage.getItem('token');
    const userJSON = localStorage.getItem('user');
    const localUser = userJSON ? JSON.parse(userJSON) : null;

    return {
        token,
        localUser
    };
};

export default fetchLocalUser;
