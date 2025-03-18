import { styled } from "styled-components";

export const SearchBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 16px;
  margin-top: 25px;

  #searchBox {
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 3px;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 1px 4px 0px;
    color: ${({ theme }) => theme.colors.sup};
    flex-grow: 1;
    font-weight: 300;
    outline: none;
    padding: 8px 12px;
    transition: .5s;
    width: 100%;
  }

  #searchBox:focus{
    border: 1px solid ${({ theme }) => theme.colors.brand};
  }

  #searchBox::placeholder{
    color: ${({ theme }) => theme.colors.placeholder}
  }

  #searchButton {
    align-items: center;
    background-color: #7A29CA;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    display: flex;
    gap: 6px;
    justify-content: center;
    padding: 8px 12px;
    transition: .5s;
    width: 135px;
  }

  #searchButton:hover{
    background-color: #934cd9;
  }


  @media(max-width: ${({ theme }) => theme.dimensions.sm}){
    #searchButton {
      width: 100%;
    }
  }
`