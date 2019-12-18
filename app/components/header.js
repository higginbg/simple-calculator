const React = require('react');
const Theme = require('./theme')

const Header = () => (
  <header id='header' className={'animated fadeIn delay-1s'}>
    <Theme />
  </header>
);

module.exports = Header;