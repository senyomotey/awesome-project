import React from 'react';
import axios from 'axios'

class App extends React.Component {
  componentDidMount() {
    var formData = new FormData();
    formData.set('product_unique_id', '574ed359ce2e18.82356240');
    //formData.append('product_unique_id', '574ed359ce2e18.82356240');

    axios({
      method: 'post',
      url: 'http://localhost:80/okukus/public_html/api_call/get_book.php',
      data: formData,
      headers: {'Content-Type': 'multipart/form-data'}
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error)
    });

    axios({
      method: 'post',
      url: 'http://localhost:80/okukus/public_html/api_call/get_book.php?product_unique_id=574ed359ce2e18.82356240:',
      data: {
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error)
    });
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default App;