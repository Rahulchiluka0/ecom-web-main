import Footer from "./component/Footer"
import Header from "./component/Header"
import React from "react"
import { categories } from "./data"
import Category from "./component/Category"
import Products from "./component/Products"
import Offers from "./component/Offers"

function App() {

  return (
    <>
      <Header />
      <section id="hero">
        <div className="hero-content">
          <h2>
            New Summer
          </h2>
          <h2 className="shoes-content">Shoes Collection</h2>
          <p>Competently expedite alternative benefits whereas leading- <br />
            edge catalysts for change. Globally leverage existing an <br />
            expanded array of leadership.
          </p>
          <button>Show Now {`->`} </button>
        </div>
      </section>
      <Category />
      <Products />
      <Offers />
      <Footer />
    </>
  )
}

export default App
