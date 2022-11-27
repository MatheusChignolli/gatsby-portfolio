import { Link } from 'gatsby'
import React from 'react'
import { HeaderStyled } from './styles'

const links = [
  {
    title: 'Projetos',
    url: 'https://google.com',
  },
  {
    title: 'Contato',
    url: 'https://google.com',
  },
  {
    title: 'Github',
    url: 'https://github.com',
  },
]

export const Header = () => (
  <HeaderStyled>
    <nav>
      <ul>
        {links.map(({ title, url }, index) => (
          <Link to={url} key={`link-${index}`}>
            <li>{title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  </HeaderStyled>
)
