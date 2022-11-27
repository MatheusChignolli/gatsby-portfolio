import styled from 'styled-components'

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding: 48px 0px 32px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    gap: 32px;

    li {
      font-size: 18px;
      color: ${({theme}) => theme.light};
    }
  }
`
