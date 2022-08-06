//
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { mobile } from "../responsive";
import { GrFormSubtract, GrFormAdd } from "react-icons/gr";
import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from ".././redux/cartRedux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  ${mobile({ height: "70vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

  ${mobile({ padding: "0px 10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.p`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsloading] = useState(true);
  const [product, setProduuct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  console.log(color, size);

  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const dispatch = useDispatch();

  const handleQuantity = (action) => {
    if (action === "add") {
      setQuantity((prev) => prev + 1);
    } else {
      quantity > 1 && setQuantity((prev) => prev - 1);
    }
  };

  const handleCart = () => {
    dispatch(
      cartActions.addToCart({ product, quantity, price: product.price })
    );
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products/find/${id}`
        );
        console.log(res.data);
        setProduuct(res.data);
        setIsloading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        <ImageContainer>
          <Image src={product.image} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>₦{product.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((i) => (
                <FilterColor color={i} key={i} onClick={() => setColor(i)} />
              ))}
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(event) => setSize(event.target.value)}>
                {product.size?.map((i) => (
                  <FilterSizeOption key={i}>{i}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <GrFormSubtract onClick={() => handleQuantity("subtract")} />
              <Amount>{quantity}</Amount>
              <GrFormAdd onClick={() => handleQuantity("add")} />
            </AmountContainer>
            <Button onClick={handleCart}>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductDetail;
