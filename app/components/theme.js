const React = require('react');
const { useState } = React;

// To change to dark theme
// Additional themes can be added later
const Theme = () => {
  
  // States
  const [prevTheme, setPrevTheme] = useState('none')
  const [currentTheme, setCurrentTheme] = useState('default')
  
  // Add classes to body and html
  const addRemoveClasses = (add, remove) => {
    const htmlClasses = document.querySelector('html').classList
    const bodyClasses = document.body.classList
    
    htmlClasses.remove(remove)
    bodyClasses.remove(remove)

    htmlClasses.add(add)
    bodyClasses.add(add)
  }

  // Change to new theme
  const toggleTheme = newTheme => {
    const finalTheme = newTheme === currentTheme ? 'default' : newTheme

    setPrevTheme(currentTheme)
    setCurrentTheme(finalTheme)
    addRemoveClasses(finalTheme, currentTheme)
  }
  
  return (
    <div id='themes'>
      <button
        id='toggle-dark'
        onClick={() => toggleTheme('dark')}
        ><i className={currentTheme == 'dark' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'}></i>
      </button>
    </div>
  )
}

module.exports = Theme;