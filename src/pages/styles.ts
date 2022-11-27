import styled from 'styled-components'

export const ContentStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  color: ${({theme}) => theme.light};

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 70%;

    ul {
      margin: 0;
      padding-left: 18px;
      list-style: none;

      b {
        color: ${({theme}) => theme.green};
      }
    }

    & > ul {
      padding: 18px;
      border-radius: 4px;
      border: 2px solid ${({theme}) => theme.pink};
    }

    p {
      font-size: 18px;
      max-width: 50%;
      text-align: justify;
    }

    h2 {
      color: ${({theme}) => theme.green};
    }

    h1 {
      font-size: 48px;
      margin: 0;

      b {

        &:nth-of-type(1) {
          color: ${({theme}) => theme.green};
        }

        &:nth-of-type(2) {
          color: ${({theme}) => theme.pink};
        }
      }
    }
  }
`
