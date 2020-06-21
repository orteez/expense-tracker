import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

import {Input, FormGroup, Form, Label, Container} from 'reactstrap'

export const SignUp = () => {
  const {signUp} = useContext(GlobalContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onUsernameChange = (e) => {setUsername(e.target.value)};
  const onPasswordChange = (e) => {setPassword(e.target.value)};

  const onSignUp = (e) => {
    e.preventDefault();
    const userInfo = {
        username,
        password
    }
    console.log(userInfo)
    signUp(userInfo);
    setUsername("")
    setPassword("")
  }

  return (
    <Container className="col-sm-12 col-md-6">
      <Form className="form" onSubmit={onSignUp}>
      <h3>Sign In</h3>
        <FormGroup>
          <Label>Username (email)</Label>
          <Input type="email" placeholder="Enter an email" value={username} onChange={onUsernameChange} />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Enter a password" value={password} onChange={onPasswordChange} />
        </FormGroup>
        <button className="btn">Add transaction</button>
      </Form>
    </Container>
  )
}
