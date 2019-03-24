import React, { Component } from 'react';
import ApiService from '../services/api';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ''
    };

    this.apiService = new ApiService();
  }

  updateQuote(result) {
    this.apiService.getQuote(result).then(response => {
      this.setState({
        quote: response
      });
    });
  }

  render() {
    return <div className="quote">{this.state.quote}</div>;
  }
}

export default Quote;
