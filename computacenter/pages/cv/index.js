import styled from "styled-components";
import Link from "next/link";
import { HeaderWrapper, HeaderText } from "..";
import Image from "next/image";



export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px; /* Abstand zum unteren Rand */
  right: 20px; /* Abstand zum rechten Rand */
  text-align: center;
`;

export const StyledButton = styled(Link)`
  text-decoration: none;
  background-color: darkorange;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: red;
  }
`;


const MeinBild = () => (
  <div>
    <Image
      src="/brauerei.jpg"
      alt="Brauerei Bild"
      width={100}
      height={100}
    />
  </div>
);

export default function cv() {
  return (
    <>
     
     <HeaderWrapper>
      <HeaderText>This is me - Christoph Leuker</HeaderText>
      </HeaderWrapper>
      <MeinBild/>
<ButtonContainer>
  <StyledButton href={"/"}> Back </StyledButton>
</ButtonContainer>
    </>
  );
}
