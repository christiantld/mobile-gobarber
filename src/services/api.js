import axios from 'axios';

const api = axios.create({
  basURL: 'http://10.0.3.2:3333',
});

export default api;
