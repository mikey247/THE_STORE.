import { useState, useMemo } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { mobile, tablet } from "../responsive";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/authRedux";
// import axios from "axios";

const Container = styled.div`
  height: 50rem;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 30px;
  background-color: white;
  ${mobile({ width: "70%", marginTop: "10px" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;

  ${tablet({})}
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const PasswordDiv = styled.div`
  display: flex;
`;

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const validEmail = useMemo(
    () =>
      new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$").test(email),
    [email]
  );

  const validPassword = useMemo(
    () =>
      new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
      ).test(password),
    [password]
  );

  // console.log(confirmPassword);

  // const passwordConfirm = useMemo(()=>{
  //   if (password===confirmPassword){
  //     return true
  //   }else{
  //     return false
  //   }
  // },[password,confirmPassword])

  // console.log(validEmail, validPassword);

  const form = {
    fullName: firstName + " " + lastName,
    email: email,
    username: userName,
    password,
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // console.log({ email: emailErr, password: pwdError });

    if (validEmail && validPassword) {
      fetch("https://the-store-backend.vercel.app/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);

          dispatch(authActions.login({ ...data }));
        })
        .catch((err) => {
          console.log("My", err);
        });
    }
  };

  return (
    <>
      <NavBar />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={handleRegister}>
            <Input
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              required
              type={"text"}
            />
            <Input
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              required
              type={"text"}
            />
            <Input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
            <Input
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
              type="text"
            />
            <Input
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "" : "password"}
              required
            />
            <Input
              placeholder="Confirm Password"
              // onChange={(e) => setConfirmPassword(e.target.value)}
              type={showPassword ? "" : "password"}
              required
            />
            <PasswordDiv>
              <input
                type="checkbox"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
              <p>Show Password</p>
            </PasswordDiv>
            <div>
              {!validEmail && <p>Your email is invalid</p>}
              {!validPassword && (
                <p>
                  Your password must contain one upper case letter, lower case
                  letter, number and special symbol
                </p>
              )}
            </div>
            <Agreement>
              By creating an account, I consent to the processing of my
              personald data in accordance with <b>PRIVACY AND POLICY</b>
            </Agreement>
            <Button>Register</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
