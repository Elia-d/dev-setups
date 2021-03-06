export const getSavedUser = async (username) => {
    try {
        const res = await fetch(
            `/.netlify/functions/getUser?username=${username}`
        );
        if (res.status !== 200) {
            throw new Error('Failed to get user');
        }
        const data = await res.json();
        return data;
    } catch (err) {
        throw new Error('Failed to get user');
    }
};

export const getLoggedInUser = async (token) => {
    return await (
        await fetch(`/.netlify/functions/me`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
    ).json();
};
