import React from 'react'
import './index.css'
function MenuCategories(props) {
  const {categories}=props
  return (
    <div className='menu-categories'>
      {categories.map((item)=>(
        <div className='menu-categories-items' key={item.id}>
          <a href={`#${item.key}`}>{item.label}</a>
        </div>
      ))}
    </div>
  )
}

export default MenuCategories