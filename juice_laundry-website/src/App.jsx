import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='header'>
        <h1>The Juice Laundry</h1>
        <div className='company-statement'>
          <h3>We are 100%</h3>
          <div className='values'>
            <p>Organic</p>
            <p>Non-GMO</p>
            <p>Vegan</p>
            <p>Gluten-Free</p>
            <p>Peanut-Free</p>
            <p>Soy-Free</p>
            <p>Dairy-Free</p>
          </div>
          <h3>100% of the time</h3>
        </div>
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
        <div className="category">

          <h2 class="category-heading">Boosters</h2>
          <div className='category-columns'>
            <div className='booster-column'>
              <div className="item-column">
                <h4>Acai</h4>
              </div>
              <div className="item-column">
                <h4>Chia Seeds</h4>
              </div>
              <div className="item-column">
                <h4>Hemp Protein</h4>
              </div>
              <div className="item-column">
                <h4>Spinach</h4>
              </div>
              <div className="item-column">
                <h4>Kale</h4>
              </div>
            </div>
            <div className='booster-column'>
            
              <div className="item-column">
                <h4>Cacao</h4>
              </div>
              <div className="item-column">
                <h4>Aloe Vera</h4>
              </div>
              <div className="item-column">
                <h4>Coconut Oil</h4>
              </div>
              <div className="item-column">
                <h4>Flax Seeds</h4>
              </div>
              <div className="item-column">
                <h4>Ginger</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='category'>
          <h2 class="category-heading">Acai Smoothie & More</h2>
          <div className="item">
            <img></img>
            <h3>Acai Smoothie Bowl</h3>
            <p>Pick any smoothie to use as the base for the bowl. Smoothie bowls come blended with acai and topped with fruit and house granola</p>
          </div>
          <div className="item">
            <h3>Gluten-Free Oats Bowl</h3>
            <p>Oats soaked in our house cashew milk, served cold, choice of two toppings included.</p>
          </div>
          <div className="item">
            <h3>Quinoa Bowl</h3>
            <p>Quinoa cooked in our house cashew milk, served cold, choice of two toppings included.</p>
          </div>
          <div className="item">
            <h3>Combination Bowl</h3>
            <p>Combination of oats and quinoa, served cold, choice of two toppings included.</p>
          </div>
          <div className="item">
            <h3>Vanilla Cashew Parfait</h3>
            <p>A vegan take on greek-style yogurt, loaded with probiotics and topped with berries and our house granola</p>
          </div>
          <div className="item">
            <h3>Chia Seeds Pudding</h3>
            <p>Available in strawberry, chocolate, vanilla Goji, and vanilla Macha flavors</p>
          </div>
          <div className="item">
            <h3>House Granola</h3>
            <p>You asked for it, so we have made our granola available in 16oz container.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
