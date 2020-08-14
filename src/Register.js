import React from 'react';
import axios from 'axios'

class App extends React.Component {
  componentDidMount() {
    var formData = new FormData();
    formData.set('email', 'moteyrakim@gmail.com');
    formData.set('firstname', 'rakim');
    formData.set('lastname', 'motey');
    formData.set('password0', '1234asdf');
    formData.set('password1', '1234asdf');
    //formData.append('product_unique_id', '574ed359ce2e18.82356240');

    axios({
      method: 'post',
      url: 'http://localhost:80/okukus/public_html/api_call/user_register.php',
      data: formData,
      headers: {'Content-Type': 'multipart/form-data'}
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