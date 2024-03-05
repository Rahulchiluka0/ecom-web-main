import React from 'react'
import { categories } from '../data'
import "./Category.css"

function Category() {
  return (
    <section id="collections-category">
      <div className="categories">
        {categories.map((item) => (
          <div className="category-item" style={{ backgroundImage: `url(${item.pic})` }} key={item.id}>
            <h2>{item.name}</h2>
            <button>Explore All</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Category