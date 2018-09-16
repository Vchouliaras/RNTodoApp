// https://facebook.github.io/react-native/docs/textinput
// https://reactjs.org/docs/forms.html

import React from 'react'
import { TextInput } from 'react-native'
import PropTypes from 'prop-types'

import Styles from './Input.styles'

class Input extends React.Component {

  state = {
    text: ''
  }

  onChangeText = text => this.setState({text})

  onSubmitEditing = () => {
    const { text } = this.state

    if (!text) {
      return
    }

    this.props.addTodoHandler(text)
    this.setState({text: ''})
  }

  render() {
    return (
      <TextInput
        style={Styles.input}
        value={this.state.text}

        clearTextOnFocus={true}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}

        maxLength={this.props.maxLength}
        placeholder={this.props.placeholder}
        selectionColor={this.props.selectionColor}
        placeholderTextColor={this.props.placeholderTextColor}
        underlineColorAndroid={this.props.underlineColorAndroid}
      />
    )
  }
}

Input.defaultProps = {
  placeholder: 'Type a todo and press Enter!',
  selectionColor: 'white',
  placeholderTextColor: 'white',
  underlineColorAndroid: 'transparent',
  maxLength: 30
}

Input.propTypes = {
  addTodoHandler: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
}

export default Input