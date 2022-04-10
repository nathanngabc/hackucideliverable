import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class App extends React.Component{


  submitFormHandler = async (event) => {
    event.preventDefault();
    var u_to_fetch = "https://hack-tech-app-endpoint.herokuapp.com/test?name="+event.target.elements.username.value;
    u_to_fetch+="&email="+event.target.elements.email.value+"&funfact="+event.target.elements.funfact.value;
    let response = await fetch(u_to_fetch);
    console.log(response.status)
    if (response.status == 200){
      document.getElementById("main form").reset();
      window.alert("Success!")
    }
    else {
      var msg = "Unsuccessful: " + new TextDecoder().decode((await response.body.getReader().read()).value);

      document.getElementById("errormsg").textContent=msg
    }
  };

  render(){
    return (
      <body>
        <div className="container">
          <Form id = "main form" onSubmit = {this.submitFormHandler}>
          Hack UCI Application
            <Form.Group className="formone">
              <Form.Label>Name</Form.Label>
              <Form.Control name="username" type="text" 
                            placeholder="Name" required />
            </Form.Group>
            <Form.Group className="formtwo">
              <Form.Label>Email</Form.Label>
              <Form.Control name = "email" type="email" 
                            placeholder="Email" required />
            </Form.Group>
            <Form.Group className="formthree">
              <Form.Label>Fun Fact</Form.Label>
              <Form.Control as="textarea" name = "funfact" placeholder="Fun Fact" rows={2} required />
            </Form.Group>
            <div className="submitbutton">
            <Button variant="primary" type="submit">
              Click here to submit form
            </Button>
            <div id="errormsg"></div>
            </div>
          </Form>
          <img className = "amogimage" src="amoug.png"/>
        </div>
      </body>
    );
  }
}

export default App;
