const recipes = [{
    "name": "Veggie Delight",
    "imageSrc": "https://source.unsplash.com/random?veggies",
    "time": "30 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.2
},
{
    "name": "Chicken Grill",
    "imageSrc": "https://source.unsplash.com/random?chicken",
    "time": "45 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.5
},
{
    "name": "Cheese Pizza",
    "imageSrc": "https://source.unsplash.com/random?pizza",
    "time": "40 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.1
},
{
    "name": "Steak",
    "imageSrc": "https://source.unsplash.com/random?steak",
    "time": "60 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.7
},
{
    "name": "Grilled Salmon",
    "imageSrc": "https://source.unsplash.com/random?salmon",
    "time": "50 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.6
},
{
    "name": "Tomato Pasta",
    "imageSrc": "https://source.unsplash.com/random?pasta",
    "time": "35 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.0
},
{
    "name": "Vegan Salad",
    "imageSrc": "https://source.unsplash.com/random?salad",
    "time": "20 min",
    "type": "veg",
    "isLiked": false,
    "rating": 3.9
},
{
    "name": "Fried Chicken",
    "imageSrc": "https://source.unsplash.com/random?friedChicken",
    "time": "55 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.3
},
{
    "name": "Mushroom Risotto",
    "imageSrc": "https://source.unsplash.com/random?risotto",
    "time": "45 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.5
},
{
    "name": "Burger",
    "imageSrc": "https://source.unsplash.com/random?burger",
    "time": "30 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.2
},
{
    "name": "Paneer Tikka",
    "imageSrc": "https://source.unsplash.com/random?paneerTikka",
    "time": "40 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.4
},
{
    "name": "BBQ Ribs",
    "imageSrc": "https://source.unsplash.com/random?ribs",
    "time": "70 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.6
},
{
    "name": "Caesar Salad",
    "imageSrc": "https://source.unsplash.com/random?caesarSalad",
    "time": "25 min",
    "type": "veg",
    "isLiked": false,
    "rating": 3.8
},
{
    "name": "Fish Tacos",
    "imageSrc": "https://source.unsplash.com/random?fishTacos",
    "time": "35 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.3
},
{
    "name": "Chocolate Cake",
    "imageSrc": "https://source.unsplash.com/random?chocolateCake",
    "time": "90 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.9
}];
const recipeContainer = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const showAllButton = document.getElementById("showAll");
const showVegButton = document.getElementById("showVeg");
const showNonVegButton = document.getElementById("showNonVeg");
const above4_5 = document.querySelector("#above4_5");
const below4_0 = document.querySelector("#below4_0");


// creating a card and append into the recipeContainer

function renderRecipes(recipes) {
    recipeContainer.innerHTML = '';
    recipes.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card"; // Add CSS class for styling

        card.innerHTML = `
    <div class="recipe-image">
        <img src="${recipe.imageSrc}" alt="${recipe.name}">
    </div>
    <div class="recipe-details">
        <p class="types">${recipe.type}</p>
        <div class="name">
            <h2>${recipe.name}</h2>
            <p>&#11088; ${recipe.rating}</p>
        </div>
        
        <div class="time">
            <p>${recipe.time}</p>
            <button class="like-button">
            ${recipe.isLiked ? '❤️' : '♡'} 
            </button>
        </div>

    </div>
  
`;

        recipeContainer.appendChild(card);

        // Add event listener for the like button
        const likeButton = card.querySelector(".like-button");
        likeButton.addEventListener("click", () => {
            // Toggle the isLiked property and update the UI
            recipe.isLiked = !recipe.isLiked;
            likeButton.innerHTML = recipe.isLiked ? '❤️' : '♡';
        });
    });
}

// creating a function onInput for rendering only those item we will searching into the serch box

function filterRecipes() {
    const searchQuery = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(searchQuery);
        return nameMatch;
    });
    renderRecipes(filteredRecipes);
}

searchInput.addEventListener("input", filterRecipes);

// creating a onClick function to filterate the recipes which types we will be selected

function filterByType(type) {
    const filteredRecipes = recipes.filter(recipe => {
        return type === "all" || recipe.type === type;
    });
    renderRecipes(filteredRecipes);
}

// Example usage in buttons' click events
showAllButton.addEventListener("click", () => filterByType("all"));
showVegButton.addEventListener("click", () => filterByType("veg"));
showNonVegButton.addEventListener("click", () => filterByType("non-veg"));


// creating a onChange function into the radio button to filtering the minimum or maximum ratings

function filterByRating(minRating, maxRating) {
    const filteredRecipes = recipes.filter(recipe => {
        return recipe.rating >= minRating && recipe.rating <= maxRating;
    });
    renderRecipes(filteredRecipes);
}

// Example usage in radio buttons' change events
above4_5.addEventListener("change", () => filterByRating(4.5, 5.0));
below4_0.addEventListener("change", () => filterByRating(0, 4.0));


// Initial rendering of all recipes
renderRecipes(recipes);