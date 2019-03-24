import axios from 'axios';

const ServerUrl = 'http://numbersapi.com/';

class ApiService {
  constructor() {
    this.service = axios.create({
      baseURL: ServerUrl
    });
  }

  getQuote(result) {
    return this.service.get(result).then(res => res.data);
  }
}

export { ServerUrl as default, ApiService };
