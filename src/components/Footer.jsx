//
import styled from "styled-components";
import { mobile } from "../responsive";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const Container = styled.div`
  display: flex;

  ${mobile({ display: "block", backgroundColor: "wheat" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>THE STORE.</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
          cupiditate debitis quis ad officiis reiciendis!
        </Description>

        <SocialContainer>
          <SocialIcon color="E4405F">
            <BsInstagram />
          </SocialIcon>

          <SocialIcon color="3B5999">
            <BsFacebook />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <BsTwitter />
          </SocialIcon>

          <SocialIcon color="E60023">
            <BsPinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms and Conditions</ListItem>
          <ListItem>Home</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <BiMap />
          1/3 lorem ipsum dolor,loreDolorem ratione is
        </ContactItem>
        <ContactItem>
          <BsFillTelephoneFill />
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <AiOutlineMail />
          michaeljunior794@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
