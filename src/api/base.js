import axios from 'axios';

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export default class APIBase {

  constructor(endpoint, headers = {}) {
    this.axios = axios.create({
      baseURL: endpoint,
      headers: { ...defaultHeaders, ...headers },
      timeout: 10000,
    });
  }


  get(url, params = {}) {
    return this.send('get', `/${url}`, params);
  }

  send(method, url, data) {

    const param = method === 'get' ? data : null;
    if (param) {
      Object.keys(param).forEach(key => {
        if (param[key] instanceof Array) {
          param[key] = param[key].join(',');
        }
      });
    }

    return this.axios.request({
      data: method !== 'get' ? data : null,
      headers: this.headers,
      method,
      params: method === 'get' ? data : null,
      url,
    });
  }
}
