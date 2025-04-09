import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='header'>
        <h1>The Juice Laundry</h1>
      </div>
      <div className='menu'>
        <div className='category'>
          <h2 class="category-heading">Superfood Smoothies</h2>
          <div className="item">
            <img></img>
            <h3>Coco Verde</h3>
            <p>kale, spinach, mango, banana, dates, coconut oil, coconut water</p>
          </div>
          <div className="item">
            <h3>Bradley's CB&J</h3>
            <p>strawberry, banana, cashew butter, dates, dragonfruit, house cashew milk</p>
          </div>
          <div className="item">
            <h3>Superman</h3>
            <p>blueberries, goji berries, banana, dates, dragonfruit, house almond milk</p>
          </div>
          <div className="item">
            <h3>The Braze</h3>
            <p>strawberry, mango, banana, dates, ginger, cayenne, house cashew milk</p>
          </div>
          <div className="item">
            <h3>Tropic Energy</h3>
            <p>mango, banana, dates, dragonfruit, brewed guayusa</p>
          </div>
          <div className="item">
            <h3>Basil Bomb</h3>
            <p>strawberry, banana, basil, dates, house almond milk</p>
          </div>
          <div className="item">
            <h3>Blended Brew</h3> 
            <p>banana, cashew butter, coldbrew coffee, cacao (optional)</p>
          </div>
          <div className="item">
            <h3>Cacao Monster</h3>
            <p>banana, cashew butter, cacao, house almond milk</p>
          </div>
          <div className="item">
            <h3>Kid Dynamite</h3>
            <p>banana, dragonfruit, house cashew milk</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
