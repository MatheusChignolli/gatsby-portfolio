import * as React from 'react'
import { HeadFC, Link, PageProps } from 'gatsby'
import { Header, Layout } from '../components'
import { ContentStyled } from './styles'
import { contacts, technologies } from '../commons/constants'

const IndexPage: React.FC<PageProps> = ({ navigate }) => {
  return (
    <Layout>
      <Header />
      <ContentStyled>
        <section>
          <h1>
            Olá! <br />
            Sou <b>Matheus Chignolli</b> <br />
            <b>Desenvolvedor Front-end</b>
          </h1>
          <p>
            Gosto de resolver problemas, enfrentar desafios e poder colaborar com o
            conhecimento que tenho, além de aprender e conhecer muitas coisas que
            ainda não tive contato 👀
          </p>
          {technologies?.length && (
            <>
              <h2>Tecnologias</h2>
              <ul>
                {technologies.map(({ principal, libs }, technologyIndex) => (
                  <li key={`technology-${technologyIndex}`}>
                    <b>{principal + (libs?.length ? ': ' : '')}</b>
                    {libs?.length && typeof libs[0] === 'string' ? (
                      libs.map((lib, libIndex) => (libIndex !== 0 ? ', ' : '') + lib)
                    ) : (
                      <ul>
                        {libs?.map((lib, libIndex) => {
                          if (typeof lib !== 'string') {
                            const { info, list } = lib
                            return (
                              <li key={`lib-${libIndex}`}>
                                <b>{info + (list?.length ? ': ' : '')}</b>
                                {list?.length &&
                                  list.map(
                                    (item, index) => (index !== 0 ? ', ' : '') + item
                                  )}
                              </li>
                            )
                          }
                        })}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
        <aside>
          <h2>Contato</h2>
          <ul>
            {contacts.map(({ url, info, title }, index) => (
              <li key={`contact-${index}`}>
                {title}: <br />
                {info}
                <Link target="_blank" to={url}>
                  Link
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </ContentStyled>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Portfólio - Matheus Chignolli</title>
