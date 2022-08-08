//
// import { popularProducts } from "../data";
import Product from "./Product";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  ${mobile({ flexDirection: "column" })}
`;

const Products = ({ category, sort, filters }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      // console.log(category);
      try {
        const res = await axios.get(
          category
            ? `https://the-store-backend.vercel.app/api/products?category=${category}`
            : "https://the-store-backend.vercel.app/api/products"
        );
        // console.log(res.data);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, [category]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  return (
    <Container>
      {filters
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products.map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
