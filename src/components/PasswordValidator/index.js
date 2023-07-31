import {useState} from 'react'

import {
  BgContainer,
  PasswordValidatorContainer,
  PasswordValidatorHeading,
  Description,
  PasswordInput,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, addPassword] = useState('')
  const changePassword = event => {
    addPassword(event.target.value)
  }
  const passwordLength = password.length

  return (
    <BgContainer>
      <PasswordValidatorContainer>
        <PasswordValidatorHeading>Password Validator</PasswordValidatorHeading>
        <Description>Check how strong and secure is your password</Description>
        <PasswordInput
          type="password"
          value={password}
          onChange={changePassword}
        />
        {passwordLength < 8 && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </PasswordValidatorContainer>
    </BgContainer>
  )
}

export default PasswordValidator
