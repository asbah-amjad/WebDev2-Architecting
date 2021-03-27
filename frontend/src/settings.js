export const SERVER_HOST = process.env.NODE_ENV === "production" ? "https://" : "http://localhost:8000";

/**
 * Returns the full API url with query parameters and all.
 *
 * @param {string} url
 * @param {object} queryParams
 * @returns {string} the full url
 */
export const getApiUrl = (url, queryParams= {}) => {
    return `${SERVER_HOST}${url}`;
};
