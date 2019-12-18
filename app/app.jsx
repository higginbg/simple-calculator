("use strict");

const React    = require("react");
const ReactDOM = require("react-dom");

const Calculator = require("./components/calculator");
const Header     = require("./components/header");
const Footer     = require("./components/footer");

const App = () => (
  <div id='wrapper' className='container-fluid'>
    <Header />
    <Calculator />
    <Footer />
  </div>
)

ReactDOM.render(<App />, document.getElementById("main"));