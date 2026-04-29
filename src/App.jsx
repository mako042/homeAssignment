import { useState } from 'react'
import Footer from './components/footer'
import Header from './components/header'
import Content from './components/content'
import './App.css'

function App() {
  const [pageType, setPageType] = useState('tv')
  const [cart, setCart] = useState({})

  return (
    <>
      <Header 
        pageType={pageType} 
        setPageType={setPageType} 
        cart={cart} 
      />
      <main className='flex-1 px-5'>
        <Content 
          pageType={pageType} 
          setPageType={setPageType} 
          cart={cart} 
          setCart={setCart} 
        />
      </main>
      <Footer />
    </>
  )
}

export default App