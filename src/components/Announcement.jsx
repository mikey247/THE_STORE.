//
import styled from "styled-components";

const Container = styled.div`
  height: 35px;
  background-color: teal;
  color: wheat;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return (
    <>
      <Container>Super Deal! Free shipping on Orders Over ₦500,000</Container>
    </>
  );
};

export default Announcement;
