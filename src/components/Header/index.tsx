import { Link } from 'gatsby'
import React from 'react'
import { HeaderStyled } from './styles'

const links: { title: string; url: string }[] = [
  // {
  //   title: 'Projetos',
  //   url: 'https://google.com',
  // },
  // {
  //   title: 'Contato',
  //   url: 'https://google.com',
  // },
  // {
  //   title: 'Github',
  //   url: 'https://github.com',
  // },
]

export const Header = () => (
  <HeaderStyled>
    {!!links?.length && (
      <nav>
        <ul>
          {links?.map(({ title, url }, index) => (
            <li key={`link-${index}`}>
              {url.includes('http') ? (
                <a href={url} target="_blank">
                  {title}
                </a>
              ) : (
                <Link to={url}>{title}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    )}
  </HeaderStyled>
)
