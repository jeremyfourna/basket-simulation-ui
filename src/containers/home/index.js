import {
  __,
  prop
} from 'ramda';
import h from 'react-hyperscript';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync
} from '../../modules/counter';

function Home(props) {
  const p = prop(__, props);
  return h('div', [
    h('h1', 'Home'),
    h('p', `Count: ${p('count')}`),
    h('p', [
      h('button', { onClick: p('increment'), disabled: p('isIncrementing') }, 'Increment'),
      h('button', { onClick: p('incrementAsync'), disabled: p('isIncrementing') }, 'Increment Async')
    ]),
    h('p', [
      h('button', { onClick: p('decrement'), disabled: p('isDecrementing') }, 'Decrement'),
      h('button', { onClick: p('decrementAsync'), disabled: p('isDecrementing') }, 'Decrement Async')
    ]),
    h('p', [
      h('button', { onClick: () => props.changePage('/about-us') }, 'Go to about page via redux'),
    ])
  ])
}

function mapStateToProps(state) {
  const p = prop(__, prop('counter', state));
  return {
    count: p('count'),
    isIncrementing: p('isIncrementing'),
    isDecrementing: p('isDecrementing')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    changePage: (path) => push(path)
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
