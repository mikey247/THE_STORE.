//
import styled from "styled-components";
import { mobile } from "../responsive";
import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { GrFormSubtract, GrFormAdd } from "react-icons/gr";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;

  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "white" : "black")};
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;

  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;

const ProductAmount = styled.p`
  font-size: 24px;
  margin: 5px;

  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.p`
  font-size: 30px;
  font-weight: 200;

  ${mobile({ marginBottom: "20px" })}
`;
const HR = styled.hr`
  background-color: #eee;
  border: none;
  height: 1.5px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 40px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  // const navigate = useNavigate();

  const handlePayment = () => {
    console.log("Paystack Abeg");
    fetch("https://the-store-backend.vercel.app/api/payment/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: auth.userEmail,
        full_name: auth.userFullName,
        amount: cart.total,
      }),
    })
      .then((res) => {
        // console.log(res);yyyyyy
        res.json();
      })
      .then((data) => {
        console.log("ssssssssssssss", data, "ssssssssssssss");
        // window.location.replace(data);
      });
  };

  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({cart.quantity})</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>

        <Bottom>
          <Info>
            {cart.products.map((item) => (
              <Product key={item._id}>
                <ProductDetail>
                  <Image src={item.image} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {item.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {item._id}
                    </ProductId>
                    <ProductColor color={item.color} />
                    <ProductSize>
                      <b>Size:</b>
                      {item.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>

                <PriceDetail>
                  <ProductAmountContainer>
                    <GrFormSubtract />
                    <ProductAmount>{item.quantity}</ProductAmount>
                    <GrFormAdd />
                  </ProductAmountContainer>

                  <ProductPrice>₦{item.price * item.quantity}</ProductPrice>
                </PriceDetail>
              </Product>
            ))}

            <HR />
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₦ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              {cart.products.length > 1 ? (
                <SummaryItemPrice> ₦ 7000 </SummaryItemPrice>
              ) : (
                <SummaryItemPrice> ₦ 0 </SummaryItemPrice>
              )}
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              {/*  */}
              {cart.total > 50000 ? (
                <SummaryItemPrice>-₦ 7000</SummaryItemPrice>
              ) : (
                <SummaryItemPrice>₦ 0</SummaryItemPrice>
              )}
              {/*  */}
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              {/*  */}
              {cart.total > 50000 ? (
                <SummaryItemPrice>₦ {cart.total - 7000}</SummaryItemPrice>
              ) : (
                <SummaryItemPrice>₦ {cart.total}</SummaryItemPrice>
              )}
              {/*  */}
            </SummaryItem>
            <Button onClick={handlePayment}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
