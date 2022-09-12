// Write your JS code here

import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    submitSuccessFull: false,
    firstNameRequired: false,
    lastNameRequired: false,
    message: '',
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  onBlurFirstName = () => {
    const validFirstName = this.validateFirstName()
    this.setState({firstNameRequired: !validFirstName})
  }

  onBlurLastName = () => {
    const validLastName = this.validateLastName()
    this.setState({lastNameRequired: !validLastName})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()
    if (isValidFirstName && isValidLastName) {
      this.setState({submitSuccessFull: true})
    } else {
      this.setState({
        firstNameRequired: !isValidFirstName,
        lastNameRequired: !isValidLastName,
        submitSuccessFull: false,
      })
    }
  }

  submitAnother = () => {
    this.setState({submitSuccessFull: false, firstName: '', lastName: ''})
  }

  renderForm = () => {
    const {firstNameRequired, lastNameRequired, message} = this.state
    return (
      <form className="form-container" onSubmit={this.submitForm}>
        <div className="label-input-container">
          <label className="label" htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            type="text"
            id="firstName"
            className="inputs"
            placeholder="First name"
            onBlur={this.onBlurFirstName}
            onChange={this.onChangeFirstName}
          />
          {firstNameRequired ? (
            <p className="error-msg">Required</p>
          ) : (
            <p>{message}</p>
          )}
        </div>

        <div className="form-container">
          <label className="label" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            type="text"
            id="lastName"
            className="inputs"
            placeholder="Last name"
            onBlur={this.onBlurLastName}
            onChange={this.onChangeLastName}
          />
          {lastNameRequired ? (
            <p className="error-msg">Required</p>
          ) : (
            <p>{message}</p>
          )}
        </div>
        <div className="button-container">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    )
  }

  renderSuccess = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="submited-desc">Submitted Successfully</p>
      <button
        type="button"
        onClick={this.submitAnother}
        className="add-response"
      >
        Add Another Response
      </button>
    </div>
  )

  render() {
    const {submitSuccessFull} = this.state
    return (
      <div className="reg-form-container">
        <h1 className="reg-heading">Registration</h1>
        {submitSuccessFull ? this.renderSuccess() : this.renderForm()}
      </div>
    )
  }
}
export default RegistrationForm
