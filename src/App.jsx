import Nav from './components/Nav'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'
import GlobalStyles from './css/GlobalStyles';

function App() {


  return (
    <>
      <GlobalStyles/>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
