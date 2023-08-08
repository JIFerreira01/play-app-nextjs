/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import './globals.css'

import { GlobalContextProvider, GlobalPlayerContextProvider } from './context'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="pt-BR">
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600;700&family=Koh+Santepheap:wght@400;700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,700;1,800&display=swap" rel="stylesheet"/>        </Head>
        <body className="bg-[#F6F6F6] flex justify-center w-screen h-screen items-center">
          <GlobalContextProvider>
            <GlobalPlayerContextProvider>
              {children}
            </GlobalPlayerContextProvider>
          </GlobalContextProvider>
        </body>
      </html>
  )
}
