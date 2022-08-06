//
import styled from "styled-components";

import { mobile } from "../responsive";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import mStyled from "@mui/material/styles/styled";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = mStyled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Container = styled.div`
  height: 60px;
  margin-bottom: 20px;

  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "13px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "11px", marginLeft: "5px" })}
`;

const NavBar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <MdSearch color="gray" />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            {" "}
            <Link className="link" to={"/"}>
              THE STORE.
            </Link>{" "}
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link className="link" to={"/register"}>
              Register
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="link" to={"/login"}>
              LogIn
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="link" to={"/cart"}>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={quantity} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>{" "}
    </Container>
  );
};

export default NavBar;
