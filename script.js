const menuItems = {
    vegetarian: [
        {
            name: "Paneer Tikka",
            price: "$12",
            description: "Grilled paneer cubes marinated in spices.",
            imgSrc: "paneer-tikka.jpeg"
        },
        {
            name: "Vegetable Biryani",
            price: "$15",
            description: "Fragrant basmati rice cooked with mixed vegetables and spices.",
            imgSrc: "vegetable-biryani.jpeg"
        },
        {
            name: "Dal Makhani",
            price: "$10",
            description: "Slow-cooked black lentils in a creamy sauce.",
            imgSrc: "dal-makhani.jpeg"
        },
        {
            name: "Chana Masala",
            price: "$8",
            description: "Chickpeas cooked in a spicy tomato gravy.",
            imgSrc: "chana-masala.jpeg"
        },
        {
            name: "Aloo Gobi",
            price: "$9",
            description: "Potatoes and cauliflower cooked with turmeric and spices.",
            imgSrc: "aloo-gobi.jpeg"
        },
        {
            name: "Palak Paneer",
            price: "$11",
            description: "Paneer cubes cooked in a creamy spinach sauce.",
            imgSrc: "palak-paneer.jpeg"
        },
        {
            name: "Vegetable Pakoras",
            price: "$7",
            description: "Fried vegetable fritters served with chutney.",
            imgSrc: "vegetable-pakoras.jpeg"
        },
        {
            name: "Bhindi Masala",
            price: "$9",
            description: "Stir-fried okra with spices.",
            imgSrc: "bhindi-masala.jpeg"
        },
        
    ],
    nonVegetarian: [
        {
            name: "Butter Chicken",
            price: "$20",
            description: "Chicken cooked in a creamy tomato sauce.",
            imgSrc: "butter-chicken.jpeg"
        },
        {
            name: "Fish Curry",
            price: "$22",
            description: "Fish simmered in a spicy coconut curry.",
            imgSrc: "fish-curry.jpeg"
        },
        {
            name: "Lamb Rogan Josh",
            price: "$25",
            description: "Tender lamb cooked in aromatic spices.",
            imgSrc: "lamb-rogan-josh.jpeg"
        },
        {
            name: "Chicken Biryani",
            price: "$18",
            description: "Fragrant basmati rice with spiced chicken.",
            imgSrc: "chicken-biryani.jpeg"
        },
        {
            name: "Tandoori Chicken",
            price: "$16",
            description: "Marinated chicken grilled in a tandoor.",
            imgSrc: "tandoori-chicken.jpeg"
        },
        {
            name: "Mutton Korma",
            price: "$24",
            description: "Mutton cooked in a creamy, nutty sauce.",
            imgSrc: "mutton-korma.jpeg"
        },
        {
            name: "Prawn Masala",
            price: "$23",
            description: "Prawns cooked in a spicy masala sauce.",
            imgSrc: "prawn-masala.jpeg"
        },
        {
            name: "Chicken Tikka",
            price: "$18",
            description: "Grilled marinated chicken pieces.",
            imgSrc: "chicken-tikka.jpeg"
        }
        
    ],
    desserts: [
        {
            name: "Gulab Jamun",
            price: "$7",
            description: "Sweet dough balls soaked in rose-flavored syrup.",
            imgSrc: "gulab-jamun.webp"
        },
        {
            name: "Ras Malai",
            price: "$8",
            description: "Soft cheese dumplings in saffron milk sauce.",
            imgSrc: "ras-malai.jpeg"
        },
        {
            name: "Kheer",
            price: "$6",
            description: "Traditional Indian rice pudding flavored with cardamom and saffron.",
            imgSrc: "kheer.webp"
        },
        {
            name: "Jalebi",
            price: "$5",
            description: "Crispy spirals soaked in sugar syrup.",
            imgSrc: "jalebi.jpeg"
        },
        {
            name: "Barfi",
            price: "$7",
            description: "Indian fudge made with condensed milk and nuts.",
            imgSrc: "barfi.jpeg"
        },
        {
            name: "Chum Chum",
            price: "$6",
            description: "Soft paneer sweets soaked in sugar syrup.",
            imgSrc: "chum-chum.jpeg"
        },
        {
            name: "Peda",
            price: "$5",
            description: "Milk-based sweet delicacies.",
            imgSrc: "peda.jpeg"
        },
        {
            name: "Mysore Pak",
            price: "$7",
            description: "Sweet made from gram flour, ghee, and sugar.",
            imgSrc: "mysore-pak.jpeg"
        },
        
    ],
    beverages: [
        {
            name: "House Red Wine",
            price: "$8/glass",
            description: "Smooth and rich red wine, perfect for any meal.",
            imgSrc: "wine.jpeg"
        },
        {
            name: "House White Wine",
            price: "$8/glass",
            description: "Crisp and refreshing white wine, ideal for a light meal.",
            imgSrc: "white-wine.jpg"
        },
        {
            name: "Craft Beer",
            price: "$6",
            description: "Locally brewed craft beer with a variety of flavors.",
            imgSrc: "beer.jpeg"
        },
        {
            name: "Soft Drinks",
            price: "$3",
            description: "Classic sodas including cola, lemon-lime, and ginger ale.",
            imgSrc: "soft-drinks.jpeg"
        },
        {
            name: "Fresh Lemonade",
            price: "$4",
            description: "Refreshing lemonade made with fresh lemons.",
            imgSrc: "lemonade.jpeg"
        },
        {
            name: "Iced Tea",
            price: "$3",
            description: "Chilled tea brewed with fresh leaves.",
            imgSrc: "iced-tea.jpeg"
        },
        {
            name: "Mint Mojito",
            price: "$5",
            description: "Cool mint and lime drink with a hint of soda.",
            imgSrc: "mojito.jpeg"
        },
        {
            name: "Chai",
            price: "$2",
            description: "Traditional Indian spiced tea.",
            imgSrc: "chai.jpeg"
        },
        {
            name: "Coffee",
            price: "$3",
            description: "Freshly brewed coffee to kickstart your day.",
            imgSrc: "coffee.jpeg"
        }
        
    ]
};
// Function to create menu item HTML
function createMenuItem(item) {
    return `
        <div class="category-item">
            <img src="${item.imgSrc}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span>${item.price}</span>
        </div>
    `;
}


// Function to populate menu items
// Function to populate menu items

function populateMenu(category, container) {
    if (menuItems[category]) {
        menuItems[category].forEach(item => {
            container.innerHTML += createMenuItem(item);
        });
    } else {
        console.error(`Category "${category}" does not exist.`);
    }
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    const vegetarianContainer = document.querySelector('#menu-items-vegetarian .category-row');
    const nonVegetarianContainer = document.querySelector('#menu-items-non-vegetarian .category-row');
    const dessertsContainer = document.querySelector('#menu-items-desserts .category-row');
    const beveragesContainer = document.querySelector('#menu-items-beverages .category-row');

    populateMenu('vegetarian', vegetarianContainer);
    populateMenu('nonVegetarian', nonVegetarianContainer);
    populateMenu('desserts', dessertsContainer);
    populateMenu('beverages', beveragesContainer);
});