export const fetchData = config => {
    const { fail, options, success, url } = config;

    return fetch(url, options).then(response => {
        if (!response.ok || response.status >= 400) {
            return fail(response);
        }
        return response.json().then(success);
    }, fail);
};