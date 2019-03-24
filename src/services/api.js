import axios from 'axios';

const serverUrl = 'http://numbersapi.com/';

class ApiService {
  constructor() {
    this.service = axios.create({
      baseURL: serverUrl
    });
  }

  getQuote(result) {
    return this.service.get(result + '').then(res => res.data);
  }
}

export default ApiService;
