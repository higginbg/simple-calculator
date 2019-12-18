const React = require('react');
const CopyToClipboard = require("react-copy-to-clipboard");

// Main calc display
const Display = ({ formula, currentVal, message, displayMessage }) => (
  <CopyToClipboard // Copy value to clipboard when the display is clicked
    onCopy={() => displayMessage("Value copied")}
    text={currentVal != 0 ? currentVal : null}
  >
    <div
      id="screen"
      onMouseEnter={() => currentVal != 0 && displayMessage("Click to copy value", 0) }
      onMouseLeave={() => displayMessage("", 0)}
    >
      <div id="formulaDisplay">{(message || formula).toLowerCase()}</div>
      <div id="display">{currentVal}</div>
    </div>
  </CopyToClipboard>
);

module.exports = Display;