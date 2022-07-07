//
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
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

  @media only screen and (max-width: 380px) {
  } ;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
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
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const NavBar = () => {
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
              Sign In
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="link" to={"/cart"}>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={2} color="secondary">
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
