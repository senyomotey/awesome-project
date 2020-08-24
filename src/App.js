import React from 'react';
import axios from 'axios';
import './index.css';

class App extends React.Component {
  componentDidMount() {
    /*
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
    */

    /*
    var formData = new FormData();
    formData.set('email', 'moteyrakim@gmail.com');
    formData.set('password', '1234asdf');

    axios({
      method: 'post',
      url: 'http://localhost:80/okukus/public_html/api_call/user_login.php',
      data: formData,
      headers: {'Content-Type': 'multipart/form-data'}
    })
    .then(response => {
      console.log(response);
      sessionStorage.setItem('userData', 'nfjnjd');
    })
    .catch(error => {
      console.log(error)
    });
    */

    /*
    var formData = new FormData();
    formData.set('buyer_unique_id', '5da89e88db58c2.45358510');
    formData.set('product_unique_id', '574ed359ce2e18.82356240');
    formData.set('location', 'llmklmmlmlkml');
    formData.set('digital_address', 'nidnsidns');
    formData.set('phone_number', '0259898934');
    formData.set('payment_method', 'momo');
    formData.set('momo_name', 'jdfkk');
    formData.set('momo_number', '0246644673');
    formData.set('momo_transaction_id', '8394384394789384');
    //formData.append('product_unique_id', '574ed359ce2e18.82356240');

    axios({
      method: 'post',
      url: 'http://localhost:80/okukus/public_html/api_call/create_order.php',
      data: formData,
      headers: {'Content-Type': 'multipart/form-data'}
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error)
    });
    */

    /*
    var formData = new FormData();
    formData.set('buyer_unique_id', '5da89e88db58c2.45358510');
    //formData.append('product_unique_id', '574ed359ce2e18.82356240');

    axios({
      method: 'post',
      url: 'http://localhost:80/okukus/public_html/api_call/get_order_history.php',
      data: formData,
      headers: {'Content-Type': 'multipart/form-data'}
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error)
    });
    */

    /*
    var formData = new FormData();
    formData.set('buyer_unique_id', '5da89e88db58c2.45358510');
    //formData.append('product_unique_id', '574ed359ce2e18.82356240');

    axios({
      method: 'post',
      url: 'http://localhost:80/okukus/public_html/api_call/get_buyer_account.php',
      data: formData,
      headers: {'Content-Type': 'multipart/form-data'}
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error)
    });
    */


    /*
    var formData = new FormData();
    //formData.set('book_tag', 'History');
    //formData.append('product_unique_id', '574ed359ce2e18.82356240');

    axios({
      method: 'post',
      url: 'https://okukus.com/api_call/get_book_tags.php',
      data: formData,
      headers: {'Content-Type': 'multipart/form-data'}
    })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .catch(error => {
      console.log(error)
    });
    */

  }

  constructor(){
    super();
   
    this.state = {
      email: '',
      password: '',
      redirectToReferrer: false
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  login() {
    if(this.state.email && this.state.password){
      var formData = new FormData();
      formData.set('email', this.state.email);
      formData.set('password', this.state.password);

      //console.log(this.state.email + " " + this.state.password);

      axios({
        method: 'post',
        //url: 'http://localhost:80/okukus/public_html/api_call/user_login.php',
        url: 'https://okukus.com/api_call/user_login.php',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'}
      })
      .then(response => {
        console.log(response);
        //sessionStorage.setItem('userData', 'nfjnjd');
      })
      .catch(error => {
        console.log(error)
      });
    }
   }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
  }

  render() {
    if (sessionStorage.getItem('userData')) {
      //return (<Redirect to={'/home'}/>)
    }

    return (
      <div className="row" id="Body">
        <div className="medium-5 columns left">
          <h4>Login</h4>
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" onChange={this.onChange}/>
          <label>Password</label>
          <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
          <input type="submit" className="button success" value="Login" onClick={this.login}/>
        </div>
      </div>
    );
  }
}

export default App;