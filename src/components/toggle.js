import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import './toggle.css'

class ToggleDark extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className="switch">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            <span className="slider round" />
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default ToggleDark
