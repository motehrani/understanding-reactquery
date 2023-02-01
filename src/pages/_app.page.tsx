import { FC } from 'react'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { RecoilRoot } from 'recoil'

import Layout from '../shared/components/layout'

import '@src/shared/styles/_ant.less'
import '@src/shared/styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
