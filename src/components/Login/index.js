import {useState} from 'react'
import './index.css'

function Login() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})

  const handleOnChangeInput = event => {
    const {name, value} = event.target
    setFormValues({...formValues, [name]: value})
  }

  const validate = values => {
    const error = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!values.username) {
      error.username = 'Username is required'
    }
    if (!values.email) {
      error.email = 'Email is required'
    } else if (!regex.test(values.email)) {
      error.email = 'Email is not valid'
    }
    if (!values.password) {
      error.password = 'Password is required'
    } else if (values.password.length < 4) {
      error.password = 'Password must be more than 4 characters'
    } else if (values.password.length > 10) {
      error.password = 'Password cannot exceed more than 10 characters'
    }

    return error
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    setFormErrors(validate(formValues))
  }

  return (
    <div className="app-container">
      <form className="login-form-container" onSubmit={handleOnSubmit}>
        <h1 className="text-center">Login form </h1>
        <div>
          <label htmlFor="username">Username</label>
          <input
            className="form-control my-3"
            name="username"
            type="text"
            id="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleOnChangeInput}
          />
          <p className="error">{formErrors.username}</p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="form-control my-2"
            name="email"
            type="text"
            id="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleOnChangeInput}
          />
          <p className="error">{formErrors.email}</p>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="form-control my-2"
            name="password"
            type="password"
            id="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleOnChangeInput}
          />
          <p className="error">{formErrors.password}</p>
        </div>
        <button type="submit" className="btn btn-primary my-4">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
