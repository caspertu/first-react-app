import React from 'react'
import './Menu.css'
// import { render } from 'react-dom'
// import data from './data/recipes'

// render(
//     <Menu recipes={data} />,
//     document.getElementById("react-container")
// )

const Menu = ({ recipes }) => (
  <article>
    <header>
      <h1>Delicious Recipes</h1>
    </header>
    <div className="recipes">
      {recipes.map((recipe, i) => (
        <Recipe key={i} {...recipe} />
      ))}
    </div>
  </article>
);

Menu.displayName = 'Menu'

export default Menu

const Recipe = ({ name, ingredients, steps}) =>
  <section id={name.toLowerCase().replace(/ /g, '-')}>
    <h1>{name}</h1>
    <IngredientsList list={ingredients} />
    <Instructions 
      title="Cooking Instructions"
      steps={steps} />
  </section>

Recipe.displayName = 'Recipe'

const Instructions = ({ title, steps }) =>
    <section className="instructions">
        <h2>{title}</h2>
        {steps.map((s, i) =>
            <p key={i}>{s}</p>
        )}
    </section>

Instructions.displayName = 'Instructions'

const IngredientsList = ({ list }) =>
    <ul className="ingredients">
        {list.map((ingredient, i) =>
            <Ingredient key={i} {...ingredient} />
        )}
    </ul>

IngredientsList.displayName = 'IngredientsList'

const Ingredient = ({ amount, measurement, name }) =>
    <li>
        <span className="amount">{amount} </span>
        <span className="measurement">{measurement} </span>
        <span className="name">{name}</span>
    </li>

Ingredient.displayName = 'Ingredient'