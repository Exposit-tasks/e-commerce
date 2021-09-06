import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

const FormInput = ({
  name,
  value,
  label,
  error,
  type,
  onChange,
  required,
  minLength,
  maxLength
}) => {
  const inputRef = useRef()

  useEffect(() => {
    const USER_NAME = 'userName'
    name === { USER_NAME } && inputRef.current.focus()
  }, [])

  return (
    <div className="form-input">
      <label htmlFor={name} className="form-input__label">
        {label}
      </label>
      {error ? <span className="form-input__error">{error}</span> : null}
      <input
        className="form-input__input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        ref={inputRef}
        autoComplete="off"
        placeholder={label}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  )
}

export default FormInput

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  focus: PropTypes.bool,
  minLength: PropTypes.number
}
