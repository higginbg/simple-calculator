const React = require('react');

// Button layout
const Buttons = ({ initialize, handleOperator, handleNumber, handleEval, handleDecimal }) => (
  <div id='buttons'>
    <button id='clear'    className='editor'   value='AC' onClick={initialize}     >AC</button>
    <button id='divide'   className='operator' value='/'  onClick={handleOperator} >÷</button>
    <button id='multiply' className='operator' value='×'  onClick={handleOperator} >×</button>
    <button id='seven'    className='number'   value='7'  onClick={handleNumber}   >7</button>
    <button id='eight'    className='number'   value='8'  onClick={handleNumber}   >8</button>
    <button id='nine'     className='number'   value='9'  onClick={handleNumber}   >9</button>
    <button id='subtract' className='operator' value='-'  onClick={handleOperator} >-</button>
    <button id='four'     className='number'   value='4'  onClick={handleNumber}   >4</button>
    <button id='five'     className='number'   value='5'  onClick={handleNumber}   >5</button>
    <button id='six'      className='number'   value='6'  onClick={handleNumber}   >6</button>
    <button id='add'      className='operator' value='+'  onClick={handleOperator} >+</button>
    <button id='one'      className='number'   value='1'  onClick={handleNumber}   >1</button>
    <button id='two'      className='number'   value='2'  onClick={handleNumber}   >2</button>
    <button id='three'    className='number'   value='3'  onClick={handleNumber}   >3</button>
    <button id='equals'   className='equals'   value='='  onClick={handleEval}     >=</button>
    <button id='zero'     className='number'   value='0'  onClick={handleNumber}   >0</button>
    <button id='decimal'  className='number'   value='.'  onClick={handleDecimal}  >.</button>
  </div>
);

module.exports = Buttons;