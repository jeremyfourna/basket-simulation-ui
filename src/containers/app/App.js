import h from 'react-hyperscript';
import {
  Route,
  Link
} from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Login from '../login';
import './App.css';

export function App() {
  return h('div', [
    h('header', [
      h(Link, { to: '/' }, 'Home'),
      h(Link, { to: '/about-us' }, 'About'),
      h(Link, { to: '/login' }, 'Log in')
    ]),
    h('main', [
      h(Route, { exact: true, path: '/', component: Home }),
      h(Route, { exact: true, path: '/about-us', component: About }),
      h(Route, { exact: true, path: '/login', component: Login })
    ])
  ]);
}
