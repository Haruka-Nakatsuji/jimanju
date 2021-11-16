import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { setStatusContext } from "../App";
import UserData from "../data.json";

const SignUp = () => {
  const [newEmail, setNewEmail] = useState("");
  const [newId, setNewId] = useState("");
  const [newPass, setNewPass] = useState("");
  const {isSignUp, setIsSignUp} = useContext(setStatusContext);

  const inputNewValues = () => {
    const newValues = {
      "name": newEmail,
      "id": newId,
      "pass": newPass
    }
    UserData.users = [...UserData.users, newValues];
    setIsSignUp(false);
  }

  return(
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={newEmail} onChange={e => setNewEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Enter ID" value={newId} onChange={e => setNewId(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={newPass} onChange={e => setNewPass(e.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={inputNewValues}>
        新規登録
      </Button>
    </Form>
  )
}

export default SignUp;