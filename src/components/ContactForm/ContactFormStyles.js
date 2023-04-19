import styled from "styled-components"

  export const Form = styled.form`
  width: 40%;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin: 3rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    width: 65%;
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
  `;

  export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
  `;

  export const Button = styled.button`
  grid-column: 1 / 3;
  color:#fff;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover{
    background: #801414;

}

  `;