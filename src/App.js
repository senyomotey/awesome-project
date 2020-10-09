import React from 'react';
import axios from 'axios';
import './index.css';
import All from './All';

class App extends React.Component {
  componentDidMount() {
    var cart = [{id:1, 
                  product_unique_id:538492.344434,
                  unit_price:40.99, 
                  quantity:2},
                  {id:1, 
                  product_unique_id:538492.344434,
                  unit_price:40.99, 
                  quantity:2}];
 
    localStorage.setItem("cart_items", JSON.stringify(cart));

    var retrievedData = localStorage.getItem("cart_items");

    //var movies2 = JSON.parse(retrievedData);

    //console.log(retrievedData);

    /*
    var formData = new FormData();
    formData.set('buyer_unique_id', '5da89e88db58c2.45358510');
    //formData.append('product_unique_id', '574ed359ce2e18.82356240');

    axios({
      method: 'post',
      url: 'http://localhost:80/okukus/public_html/api_call/get_cart_items.php',
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
    formData.set('product_unique_id', '574ed359ce2e18.82356240');

    axios({
      method: 'post',
      url: 'http://localhost:80/okukus/public_html/api_call/create_cart_item.php',
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
    formData.set('cart_item_unique_id', '5da89e88db58c2.45358901');
    formData.set('cart_item_quantity', '2');
    //formData.append('product_unique_id', '574ed359ce2e18.82356240');

    axios({
      method: 'post',
      url: 'http://localhost:80/okukus/public_html/api_call/update_cart_item.php',
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
    formData.set('cart_item_unique_id', '5da89e88db58c2.45358902');

    axios({
      method: 'post',
      url: 'http://localhost:80/okukus/public_html/api_call/delete_cart_item.php',
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
      url: 'https://okukus.com/api_call/create_order.php',
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
      url: 'https://okukus.com/api_call/get_order_history.php',
      //url: 'http://localhost:80/okukus/public_html/api_call/get_order_history.php',
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
    formData.set('search_phrase', 'the man');
    //formData.append('product_unique_id', '574ed359ce2e18.82356240');

    axios({
      method: 'post',
      url: 'https://okukus.com/api_call/search.php',
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
    formData.set('book_tag', 'History');
    //formData.append('product_unique_id', '574ed359ce2e18.82356240');

    axios({
      method: 'post',
      url: 'https://okukus.com/api_call_dev/get_book_tags.php',
      //url: 'http://localhost/okukus/public_html/api_call/get_book_tags.php',
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

    var formData = new FormData();
    formData.set('tag_title', 'Thriller');
    //formData.append('product_unique_id', '574ed359ce2e18.82356240');

    axios({
      method: 'post',
      //url: 'https://okukus.com/api_call_dev/get_book_tag.php',
      url: 'http://localhost/okukus/public_html/api_call/get_book_tag.php',
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


   var formData = new FormData();
   formData.set('product_unique_id', '574ed359ce2e18.82356240');
   //formData.append('product_unique_id', '574ed359ce2e18.82356240');

   axios({
     method: 'post',
     url: 'https://okukus.com/api_call/get_book.php',
     //url: 'http://localhost/okukus/public_html/api_call/get_book_tag.php',
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

  }

  /*
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
   */

  constructor(){
    super();
   
    this.state = {
      buyer_unique_id: '',
      email: '',
      password: '',
      ordernumber: '',
      current_password: '',
      new_password: '',
      confirm_password: '',
      result: '',
      redirectToReferrer: false
    };

    this.forgotPassword = this.forgotPassword.bind(this);
    this.userRegister = this.userRegister.bind(this);
    this.readBooks = this.readBooks.bind(this);
    this.updateBuyerProfile = this.updateBuyerProfile.bind(this);
    this.updateBuyerPassword = this.updateBuyerPassword.bind(this);
    this.readOrderDetails = this.readOrderDetails.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  userRegister() {
    var formData = new FormData();
    formData.set('email', 'moteyrakim@gmail.com');
    formData.set('firstname', 'rakim');
    formData.set('lastname', 'motey');
    formData.set('password0', '1ABIgail');
    formData.set('password1', '1ABIgail');
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

  readBooks() {
    axios({
      method: 'post',
      url: 'https://okukus.com/api_call_dev/get_books.php',
      headers: {'Content-Type': 'multipart/form-data'}
    })
    .then(response => {
      console.log(response.data);
      this.setState({[this.name.result]:response.data});
    })
    .catch(error => {
      console.log(error)
    });
  }

  readCartCount() {
    var formData = new FormData();
    formData.set('buyer_unique_id', '5da89e88db58c2.45358510');
    //formData.append('product_unique_id', '574ed359ce2e18.82356240');

    axios({
      method: 'post',
      url: 'http://localhost:80/okukus/public_html/api_call/get_cart_count.php',
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

  readOrderDetails() {
    if(this.state.ordernumber) {
      var formData = new FormData();
      formData.set('order_number', this.state.ordernumber);
      //formData.append('product_unique_id', '574ed359ce2e18.82356240');

      axios({
        method: 'post',
        url: 'http://localhost:80/okukus/public_html/api_call/get_order_details.php',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'}
      })
      .then(response => {
        console.log(response.data);
        this.setState({[this.name.result]:response.data});
      })
      .catch(error => {
        console.log(error)
      });
    } else {
      console.log("charley the thing no dey work")
    }
  }

  updateBuyerProfile() {
    if(this.state.ordernumber) {
      var formData = new FormData();
      formData.set('order_number', this.state.ordernumber);
      //formData.append('product_unique_id', '574ed359ce2e18.82356240');

      axios({
        method: 'post',
        url: 'http://localhost:80/okukus/public_html/api_call/get_order_details.php',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'}
      })
      .then(response => {
        console.log(response.data);
        this.setState({[this.name.result]:response.data});
      })
      .catch(error => {
        console.log(error)
      });
    } else {
      console.log("charley the thing no dey work")
    }
  }

  updateBuyerPassword() {
    if(!(this.state.current_password === '' || this.state.new_password === '' || this.state.confirm_password === '')) {
      var formData = new FormData();
      formData.set('buyer_unique_id', '5da89e88db58c2.45358510');
      formData.set('current_password', this.state.current_password);
      formData.set('new_password', this.state.new_password);
      formData.set('confirm_password', this.state.confirm_password);
      //formData.append('product_unique_id', '574ed359ce2e18.82356240');

      axios({
        method: 'post',
        url: 'http://localhost:80/okukus/public_html/api_call/update_buyer_password.php',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'}
      })
      .then(response => {
        console.log(response);
        //this.setState({[this.name.result]:response.data});
      })
      .catch(error => {
        console.log(error)
      });
    } else {
      console.log("please complete the form")
    }
  }

  forgotPassword() {
    if(!(this.state.email === '')) {
      var formData = new FormData();
      formData.set('buyer_email', this.state.email);
      //formData.append('product_unique_id', '574ed359ce2e18.82356240');

      axios({
        method: 'post',
        url: 'http://localhost:80/okukus/public_html/api_call_dev/create_password_reset_token.php',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'}
      })
      .then(response => {
        console.log(response);
        //this.setState({[this.name.result]:response.data});
      })
      .catch(error => {
        console.log(error)
      });
    } else {
      console.log("please complete the form")
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
          <h4>Forgot Password</h4>
          {/* <input type="text" name="buyer_unique_id" placeholder="unique id" onChange={this.onChange}/><br/><br/> */}
          {/* <input type="password" name="current_password"  placeholder="current password" onChange={this.onChange}/><br/> */}
          {/* <input type="password" name="new_password"  placeholder="new password" onChange={this.onChange}/><br/> */}
          {/* <input type="password" name="confirm_password"  placeholder="confirm password" onChange={this.onChange}/><br/> */}

          <input type="email" name="email"  placeholder="email" onChange={this.onChange}/><br/>
          <br/>
          <input type="submit" className="button success" value="SUBMIT" onClick={this.forgotPassword}/>
        </div>

        <br/><br/><br/>
        {/*<input className="button success" value="Read Books" onClick={this.userRegister}/>*/}
      </div>

      /*
      <div className="row" id="Body">
        <div className="medium-5 columns left">
          <h4>Get Order Details</h4>
          <input type="text" name="ordernumber" value="5887356789" placeholder="order number" onChange={this.onChange}/><br/><br/>
          <input type="submit" className="button success" value="SUBMIT" onClick={this.readOrderDetails}/>

          <p name="result"></p>
        </div>
      </div>
      */
    );
  }
}

export default App;