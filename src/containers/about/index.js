import h from 'react-hyperscript';

function About() {
  return h('div', [
    h('h1', 'About Page'),
    h('p', 'Did you get here via Redux?')
  ]);
}

export default About;
