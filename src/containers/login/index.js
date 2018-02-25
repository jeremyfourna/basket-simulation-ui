import h from 'react-hyperscript';
import { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }


  render() {
    return h('div', [
      h('h1', 'Login Page'),
      h('form#login-form', { onSubmit: this.handleSubmit }, [
        h('div', [
          h('label', { htmlFor: 'login-email' }, 'Email'),
          h('input#login-email', {
            type: 'email',
            name: 'email',
            required: true,
            onChange: this.handleInputChange,
            value: this.state.email
          })
        ]),
        h('div', [
          h('label', { htmlFor: 'login-password' }, 'Password'),
          h('input#login-password', {
            type: 'password',
            name: 'password',
            required: true,
            onChange: this.handleInputChange,
            value: this.state.password
          })
        ]),
        h('button', { type: 'submit' }, 'Connect')
      ])
    ]);
  }
}

export default Login;
