// import logo from './logo.svg';
import './App.css';
import foodimg from './assets/food-img.png';
// import recipe from './data/recipeprompts.json';

function App() {
  return (
    <div className="App">
      <div className='licious'>
        <header className='d-flex justify-content-center align-items-center'>
          <div>
            <h3>Licious AI Recipe Generator</h3>
          </div>
        </header>
        <section className='recipe-prompt'>
          <div class="container">
            <div className='d-flex justify-content-center'>
              <input type="text" id="inputBox" placeholder="Enter your prompt" />
              <button>Submit</button>
              <p id="output"></p>
            </div>
          </div>
        </section>
        <section className='recipes-section'>
          <div className='container-fluid'>
            <div className='recipes-content'>
              <div className='recipe'>
                <div className='recipe-info d-flex'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <img src={foodimg} />
                  </div>
                  <div className='d-flex flex-column align-items-center w-full'>
                    <div className='text-center'>
                      <h3>Chicken Curry</h3>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center h-full'>
                      <h5>A flavorful and aromatic chicken curry that's perfect for any occasion.</h5>
                      <div className='recipe-points d-flex justify-content-around'>
                        <p>Servings: 4</p>
                        <p>Difficulty: Medium</p>
                        <p>Time: 40min</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='recipe-desc-section d-flex justify-content-around'>
                  <div className='ingridients-content'>
                    <h5>Ingredients:</h5>
                    <ul>
                      <li>1 kg chicken, cut into pieces</li>
                      <li>2 onions, finely chopped</li>
                      <li>2 tomatoes, pureed</li>
                      <li>1 cup yogurt</li>
                      <li>3 cloves garlic, minced</li>
                      <li>1-inch ginger, grated</li>
                      <li>2 green chilies, slit</li>
                      <li>1 tablespoon curry powder</li>
                      <li>1 teaspoon turmeric powder</li>
                      <li>1 teaspoon cumin seeds</li>
                      <li>2 tablespoons oil</li>
                      <li>Salt to taste</li>
                      <li>Fresh coriander for garnish</li>
                    </ul>
                  </div>
                  <div className='steps-content'>
                    <h5>Steps:</h5>
                    <ol>
                      <li>Heat oil in a pan and add cumin seeds.</li>
                      <li>Once they splutter, add chopped onions and sauté until golden brown.</li>
                      <li>Add garlic, ginger, and green chilies, cooking for another minute.</li>
                      <li>Stir in the pureed tomatoes and cook until the mixture thickens.</li>
                      <li>Add curry powder, turmeric powder, and salt; mix well.</li>
                      <li>Add chicken pieces and cook until they are browned.</li>
                      <li>Stir in the yogurt and cook for 15-20 minutes until the chicken is fully cooked.</li>
                      <li>Garnish with fresh coriander and serve hot.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
