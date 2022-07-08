//
import { popularProducts } from "../data";
import Product from "./Product";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${mobile({ flexDirection: "column" })}
`;

const Products = ({ item }) => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Link to={"/product"}>
          <Product item={item} key={item.id} />
        </Link>
      ))}
    </Container>
  );
};

export default Products;
