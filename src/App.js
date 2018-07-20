import React, { Component } from 'react'
import styles from './App.css'
import styled from 'styled-components'

export default class App extends Component {
  state = {
    message: 'Welcome'
  }

  handleToggleMessage = (message) => {
    this.setState({ message })
  }

  render() {
    return (
      <Wrapper>
        <div className={styles.container}>
          <h1>{this.state.message}</h1>
          <button 
            className={styles.buttonSuccess} 
            onClick={() => this.handleToggleMessage('Hello World!!! :D')}>Hello</button>
          <button 
            className={styles.buttonPrimary} 
            onClick={() => this.handleToggleMessage('Bye World!!! :(')}>Bye</button>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background-color: #00002b;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`