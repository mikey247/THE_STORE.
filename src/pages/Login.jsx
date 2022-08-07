//
import styled from "styled-components";
import { mobile } from "../responsive";
import NavBar from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/authRedux";
import { useState } from "react";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 30px;
  background-color: white;

  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 10px 0px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const form = {
    username: userName,
    password,
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...form }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(authActions.login({ ...data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <NavBar />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form onSubmit={handleLogin}>
            <Input
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <Input
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button>Sign In</Button>
            <Link>DO NOT REMEMBER YOUR PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
