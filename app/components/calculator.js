const React = require("react");

const { useState, useEffect } = React;

const Buttons = require("./components/buttons");
const Display = require("./components/display");

// Constants
const isOperator = /[×/+-]/;
const endsWithOperator = /[×+-/]$/;
const endsWithNegative = /[×/+]-$/;

// Main calculator functions
const Calculator = () => {
  
  // States
  const [currentVal, setCurrentVal] = useState('0')
  const [prevVal, setPrevVal] = useState('0')
  const [formula, setFormula] = useState('')
  const [message, setMessage] = useState('')
  const [lastClicked, setLastClicked] = useState('')
  const [evaluated, setEvaluated] = useState(false)
  const [maxDigits, setMaxDigits] = useState(15)
  
  // On AC click
  const initialize = () => {
    setCurrentVal('0')
    setPrevVal('0')
    setFormula('')
    setMessage('')
    setLastClicked('')
    setEvaluated(false)
    displayMessage('Cleared')
  }
  
  // Check and alert max digits
  const maxDigitsMet = () => {
    const met = currentVal.length > maxDigits
    met && displayMessage('Digit Limit Met')
    return met
  }

  // Number input
  const handleNumber = ({ target: {value} }) => {
    setEvaluated(false)

    if (!maxDigitsMet()) {
      if (evaluated) {
        setCurrentVal(value)
        setFormula(value !== '0' ? value : '')

      } else {
        setCurrentVal(
          currentVal === '0' || isOperator.test(currentVal) ?
          value
          : currentVal + value
        )

        setFormula(
          currentVal === '0' && value === '0' ? formula
          : (/([^.0-9]0)$/).test(formula) ? formula.slice(0, -1) + value
          : formula + value
        )
      }
    }
  }
  
  // Operator input
  const handleOperator = ({ target: {value} }) => {
    
    // Don't allow operators without previous number input
    if ((formula !== '' && currentVal !== '0') || value === '-') {
      setCurrentVal(value)
      setEvaluated(false)

      if (evaluated) {
        setFormula(prevVal + value)

      } else if (!endsWithOperator.test(formula)) {
        setPrevVal(formula)
        setFormula(formula + value)

      } else if (!endsWithNegative.test(formula)) {
        setFormula((endsWithNegative.test(formula + value) ? formula : prevVal) + value)

      } else if (value !== '‑') {
        setFormula(prevVal + value)
      }
    }
  }

  // Decimal input
  const handleDecimal = () => {
    if (evaluated === true) {
      setCurrentVal('0.')
      setFormula('0.')
      setEvaluated(false)

    } else if (!currentVal.includes('.') && !maxDigitsMet()) {
      setEvaluated(false)

      if (endsWithOperator.test(formula) || (currentVal === '0' && formula === '')) {
        setCurrentVal('0.')
        setFormula(formula + '0.')

      } else {
        setCurrentVal(formula.match(/(-?\d+\.?\d*)$/)[0] + '.')
        setFormula(formula + '.')
      }
    }
  }
  
  // Equal sign input
  const handleEval = () => {
    
    // Don't evaluate if there is no input
    if (formula !== '' && currentVal !== '0') {
      let expression = formula

      while (endsWithOperator.test(expression)) {
        expression = expression.slice(0, -1)
      }

      const answer = Math.round(1000000000000 * eval(expression.replace(/×/g, '*'))) / 1000000000000

      setCurrentVal(answer.toString())
      setFormula(`${expression}=${answer}`)
      setPrevVal(answer)
      setEvaluated(true)
    }
  }
  
  // Display messages on screen
  let messageTimeout // To clear timeout
  const displayMessage = (text, timeOut = 1000) => {
    clearTimeout(messageTimeout)
    setMessage(text)

    if (timeOut != 0) {
      messageTimeout = setTimeout(() => setMessage(''), timeOut)
    }
  }
  
  return (
    <div id='calc'>
      <Display
        currentVal={currentVal}
        formula={formula}
        message={message}
        displayMessage={displayMessage}
        />
      <Buttons
        initialize={initialize}
        handleNumber={handleNumber}
        handleOperator={handleOperator}
        handleDecimal={handleDecimal}
        handleEval={handleEval}
        />
    </div>
  )
}