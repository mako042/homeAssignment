import Footer from './components/footer'
import Header from './components/header'
import Content from './components/content'

function App() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <Content />
      </main>
      <Footer />
    </>
  );
}

export default App
