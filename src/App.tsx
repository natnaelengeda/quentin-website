import React from 'react'
import { useEffect } from 'react'
import { GlobalStyle } from './styles/global'
import Header from './layout/Header/Header'
import { Hero } from './pages/Hero/Hero'
import { Main } from './pages/Main/Main'

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
    </>
  )
}

export default App;
