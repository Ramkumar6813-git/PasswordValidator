import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #24263c;
`
export const PasswordValidatorContainer = styled.div`
  background-color: #383a4e;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 18px 28px;
  border-radius: 8px;
  box-shadow: 0px 0px 2px #434451;
  @media screen and (min-width: 768px) {
    padding: 38px 45px;
  }
`
export const PasswordValidatorHeading = styled.h1`
  font-family: 'Roboto';
  margin-bottom: 0;
  margin-top: 5px;
  font-size: 25px;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const Description = styled.p`
  color: #f8fafc;
  margin-bottom: 40px;
  max-width: 280px;
`
export const PasswordInput = styled.input`
  background-color: #edeeff;
  outline: none;
  width: 100%;
  padding: 10px 10px;
`
export const ErrorMsg = styled.p`
  color: #ef4444;
  font-size: 13px;
  margin-top: 3px;
  font-weight: 500;
`
