import { FC } from 'react'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import Layout from '../shared/components/layout'

import '@src/shared/styles/_ant.less'
import '@src/shared/styles/index.scss'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
