import * as React from 'react'
import clsx from 'clsx'

import { InputsPropsType } from '@/types'
import Container from './Container'

const Inputs: React.FC<InputsPropsType> = ({
  id,
  type,
  name,
  label,
  value,
  error,
  disabled,
  onChange,
  placeholder,
  errorClassName,
  labelClassName,
  inputWrapperClassName,
  ...delegatedProps
}) => {
  if (!label) {
    return (
      <Container as={'div'} className={clsx(inputWrapperClassName)}>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          {...delegatedProps}
        />

        {error && (
          <small
            role="alert"
            className={clsx(
              `text-small text-red-600 ${errorClassName ? errorClassName : null} `
            )}
          >
            {error}
          </small>
        )}
      </Container>
    )
  }

  return (
    <div className={clsx(inputWrapperClassName)}>
      <label htmlFor={id} className={clsx(labelClassName)}>
        {label}
      </label>

      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        {...delegatedProps}
      />
    </div>
  )
}

export default Inputs
