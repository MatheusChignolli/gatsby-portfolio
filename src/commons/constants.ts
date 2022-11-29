export const contacts = [
  {
    title: 'Github',
    info: 'MatheusChignolli',
    url: 'https://github.com/MatheusChignolli',
  },
  {
    title: 'E-mail',
    info: 'matheuschignolli@gmail.com',
    url: 'mailto:matheuschignolli@gmail.com',
  },
  {
    title: 'LinkedIn',
    info: 'matheus-chignolli-a0115b155',
    url: 'https://www.linkedin.com/in/matheus-chignolli-a0115b155/',
  },
] as const

export const technologies: {
  principal: string
  libs?: ({ info: string; list?: string[] } | string)[]
}[] = [
  {
    principal: 'Javascript',
  },
  {
    principal: 'Typescript',
  },
  {
    principal: 'React JS',
    libs: [
      {
        info: 'Estilização',
        list: ['Material UI', 'Styled components', 'Tailwind', 'CSS/SCSS/SASS/LESS'],
      },
      {
        info: 'Controle de estado',
        list: ['Context API', 'Redux', 'Easy-peasy', 'Zustand', 'Recoil'],
      },
      {
        info: 'Comunicação com APIs',
        list: ['React Query/TanStack Query', 'Axios', 'Fetch', 'GraphQl/Apollo'],
      },
      {
        info: 'Formulário',
        list: ['React Hook Form', 'Formik'],
      },
      {
        info: 'Testes',
        list: ['Jest', 'React testing library', 'Cypress'],
      },
    ],
  },
  {
    principal: 'Banco de Dados',
    libs: ['MySQL', 'Mongo', 'Postgres'],
  },
  {
    principal: 'Cloud',
    libs: [
      {
        info: 'AWS',
        list: [
          'S3',
          'IAM',
          'CDKs',
          'Lambda',
          'AppSync',
          'Cognito',
          'DynamoDB',
          'AppConfig',
          'CloudWatch',
          'SecretManager',
        ],
      },
    ],
  },
  {
    principal: 'CI',
    libs: [
      'Jest',
      'Cypress',
      'Flows tests',
      'Test coverage',
      'Github Actions',
      'React testing library',
    ],
  },
  {
    principal: 'CD',
    libs: ['Heroku', 'Vercel', 'Netlify', 'AWS AppSync', 'Github Actions'],
  },
]