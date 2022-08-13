//
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../redux/cartRedux";

import { ShoppingCart, Search, FavoriteBorder } from "@mui/icons-material";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  /* &:hover {
    transform: scale(1.1);
    opacity: 1;
  } */
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  padding: 10px;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgb(221, 242, 242);
    transform: scale(1.1);
    opacity: 1;
  }
`;

const Product = ({ item }) => {
  const dispatch = useDispatch();
  // console.log(item);

  const handleAddToCart = () => {
    dispatch(
      cartActions.addToCart({ ...item, quantity: 1, size: item.size[0] })
    );
  };

  return (
    <Container>
      <Circle />
      <Image src={item.image} />
      <Info>
        <Icon>
          <ShoppingCart onClick={handleAddToCart} />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <Search />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorder />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
