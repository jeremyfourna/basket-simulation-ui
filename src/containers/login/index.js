import h from 'react-hyperscript';

function Login() {
  return h('div', [
    h('h1', 'Login Page'),
    h('form#login-form', [
      h('div', [
        h('label', { htmlFor: 'login-email' }, 'Email'),
        h('input#login-email', { type: 'email', required: true })
      ]),
      h('div', [
        h('label', { htmlFor: 'login-password' }, 'Password'),
        h('input#login-password', { type: 'password', required: true })
      ]),
      h('button', { type: 'button' }, 'Connect')
    ])
  ]);
}

export default Login;
