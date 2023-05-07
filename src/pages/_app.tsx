/* prism theme */
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
/* prism language */
import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-java.js'
import 'prismjs/components/prism-kotlin.js'
import 'prismjs/components/prism-docker.js'
import 'prismjs/components/prism-diff.js'
import 'prismjs/components/prism-python.js'
import 'prismjs/components/prism-yaml.js'
/* prism plugin */
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/show-language/prism-show-language.js';
import 'prismjs/plugins/show-language/prism-show-language.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.css';
import 'prismjs/plugins/diff-highlight/prism-diff-highlight.js';
import 'prismjs/plugins/diff-highlight/prism-diff-highlight.css';
import 'prismjs/plugins/toolbar/prism-toolbar.js';
import 'prismjs/plugins/toolbar/prism-toolbar.css';

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
