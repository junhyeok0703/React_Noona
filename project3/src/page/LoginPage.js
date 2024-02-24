import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
const LoginPage = ({ setAuthenticate }) => {
  const Navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    Navigate("/");
  };

  return (
    <Form onSubmit={(event) => loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="success" type="submit">
        {/* onSubmit으로 이벤트를 줘야함 이벤트클릭이아니라 */}
        로그인
      </Button>
    </Form>
  );
};

export default LoginPage;
