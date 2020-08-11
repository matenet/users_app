import axios from 'axios';

const handleError = error => (
  error.response
    ? {
      error: {
        error: error.response.status,
        message: error.response.data,
      },
    }
    : { error }
);

const handleSuccess = response => ({
  data: response.data,
  headers: response.headers,
});

/**
 * Make HTTP POST call
 * @param {string} url
 * @param {string} query
 * @param {string} token
 *
 * @returns {{json: Object|undefined, error: Object|undefined}} response
 * @returns {Object|undefined} response.json
 * @returns {{status: Object, message: Object}|Object|undefined} response.error
 *
 * @example
 * get("http://management-api", "?search=bonus", "asd32eD5F");
 */
export const get = (url, query, token) => {
  const req = axios
    .get(
      encodeURI(url + (query || '')),
      token && {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

  return req.then(handleSuccess).catch(handleError);
};

export const post = (url, data, token ) => {
  console.log(data.data.firstName);
    const req = axios
    .post(url,
        {

                firstName: data.data.firstName,
                lastName: data.data.lastName,
                email: data.data.email,

      },
        token && {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );

  return req.then(handleSuccess).catch(handleError);
};
