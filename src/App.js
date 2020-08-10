import React from 'react';
import axios from 'axios'

class App extends React.Component {
  componentDidMount() {
    axios({
      method: 'post',
      url: 'https://okukus.com/api_call/get_books.php',
    }).then(response => {
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