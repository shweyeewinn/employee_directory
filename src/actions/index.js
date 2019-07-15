import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

axios.defaults.baseURL = REACT_APP_API_URL;

export * from './setNameActions';
export * from './searchEmployeeActions';
