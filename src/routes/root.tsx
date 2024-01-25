import { Outlet } from 'react-router-dom'
import Header from '../layout/Header/Header'
import { GlobalStyle } from '../styles/global'

export default function Root() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
