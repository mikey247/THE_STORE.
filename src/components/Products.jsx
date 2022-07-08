//
import { popularProducts } from "../data";
import Product from "./Product";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
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
