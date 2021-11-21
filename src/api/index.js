export const api = (uri, options = {}) => {
    let headers = { "Content-Type": "application/json", ...(options.headers || {}) };
    const token = window.localStorage.getItem("token");
    if (token && !options.annonymous) {
        headers = { "Authorization": `Token ${token}`, ...headers }
    }
    return fetch(`${process.env.REACT_APP_API_URL}${uri}`, { ...options, headers }).then(r => options.method === "DELETE" ? r : r.json())
}