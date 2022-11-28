import styled from 'styled-components'

export const ContentStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  color: ${({ theme }) => theme.light};

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 70%;

    ul {
      margin: 0;
      padding-left: 20px;
      list-style-type: none;

      b {
        color: ${({ theme }) => theme.green};
      }
    }

    & > ul {
      padding: 18px;
      border-radius: 4px;
      border: 2px solid ${({ theme }) => theme.pink};

      ul {
        list-style-type: '→ ';
      }
    }

    p {
      font-size: 18px;
      max-width: 50%;
      text-align: justify;
    }

    h2 {
      margin: 12px 0;
      color: ${({ theme }) => theme.green};
    }

    h1 {
      font-size: 48px;
      margin: 0;

      b {
        &:nth-of-type(1) {
          color: ${({ theme }) => theme.green};
        }

        &:nth-of-type(2) {
          color: ${({ theme }) => theme.pink};
        }
      }
    }
  }

  aside {
    width: 30%;

    h2 {
      margin: 12px 0;
      color: ${({ theme }) => theme.pink};
    }

    ul {
      border-radius: 4px;
      padding: 18px;
      margin: 0;
      list-style: none;
      border: 2px solid ${({ theme }) => theme.green};

      li:not(:first-child) {
        margin-top: 12px;
      }

      b {
        color: ${({ theme }) => theme.pink};
      }
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;

    section {
      width: 100%;

      h1 {
        font-size: 24px;
      }

      p {
        max-width: 100%;
      }
    }

    aside {
      width: 100%;
    }
  }
`
