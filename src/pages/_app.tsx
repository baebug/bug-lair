import 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-java.js'
import 'prismjs/components/prism-kotlin.js'
import 'prismjs/components/prism-docker.js'
import 'prismjs/components/prism-diff.js'
import 'prismjs/components/prism-python.js'
import 'prismjs/components/prism-yaml.js'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'
import '@styles/globals.css'
import '@styles/notion.css'
import useThemeEffect from '@hooks/useThemeEffect'
import useGtagEffect from '@hooks/useGtagEffect'
import Scripts from '@components/Scripts'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { AppProps } from 'next/app'

export type NextPageWithLayout<PageProps = {}> = NextPage<PageProps> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  useThemeEffect()
  useGtagEffect()

  return (
    <>
      <Scripts />
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
