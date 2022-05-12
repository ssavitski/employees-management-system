import axios from 'axios';

const {
  REACT_APP_API_HOST: host,
  REACT_APP_API_PROTOCOL: protocol,
  REACT_APP_API_NAMESPACE: namespace,
} = process.env;

let baseURL = `${protocol}://${host}`;
baseURL += namespace ? `/${namespace}` : '';

export default axios.create({
  baseURL,
});
