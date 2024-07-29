const menu = [
  {
    id: 1,
    title: "Soup of the day",
    category: "starters",
    price: "$5",
    description: "Freshly made soup with seasonal ingredients",
    img: "https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    title: "Bruschetta",
    category: "starters",
    price: "$7",
    description:
      "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and mozzarella",
    img: "https://www.allrecipes.com/thmb/kt9t899s87rKleitZiaUwWOoNJI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3605381-b506207e5f494e44a7cf5c1bbe488748.jpg",
  },
  {
    id: 3,
    title: "Chicken Parmesan",
    category: "mains",
    price: "$12",
    description:
      "Crispy chicken topped with tomato sauce and mozzarella, served with spaghetti",
    img: "https://media.gettyimages.com/id/1358831517/photo/crispy-chicken-parmesan.jpg?s=612x612&w=0&k=20&c=izCK6IforZt1WU1f467NXB-PPR0TAfEw0aoJ6d8imB0=",
  },
  {
    id: 4,
    title: "Steak Frites",
    category: "mains",
    price: "$18",
    description: "Grilled steak served with french fries and salad",
    img: "https://media.gettyimages.com/id/463889403/photo/rib-eye-steak.jpg?s=612x612&w=0&k=20&c=igQuEqd2hEwHnwIcuMbiUnQRm5T9Mwk1ASFanAq6iOk=",
  },
  {
    id: 5,
    title: "Chocolate Lava Cake",
    category: "desserts",
    price: "$8",
    description:
      "Warm chocolate cake with a gooey molten chocolate center, served with vanilla ice cream",
    img: "https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.webp?b=1&s=170667a&w=0&k=20&c=6NPIcP8XUG4WwbJU-qfLOEP07aU79doAIsqZ8wic478=",
  },
  {
    id: 6,
    title: "Apple Pie",
    category: "desserts",
    price: "$6",
    description:
      "Classic apple pie with a flaky crust, served with whipped cream",
    img: "https://plus.unsplash.com/premium_photo-1666353535417-c86616951727?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBwaWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    title: "Vegan Burger",
    category: "mains",
    price: "$10",
    description: "Plant-based burger served with fries",
    img: "https://plus.unsplash.com/premium_photo-1664648063589-76b97669bc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnYW4lMjBidXJnZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 8,
    title: "Caesar Salad",
    category: "starters",
    price: "$6",
    description:
      "Fresh romaine lettuce with Caesar dressing, parmesan, and croutons",
    img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Vhc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 9,
    title: "Spaghetti Carbonara",
    category: "mains",
    price: "$14",
    description:
      "Classic carbonara with pancetta, egg, hard cheese, and pepper",
    img: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwYWdoZXR0aSUyMGNhcmJvbmFyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 10,
    title: "Tiramisu",
    category: "desserts",
    price: "$7",
    description:
      "Italian dessert made of savoiardi dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese",
    img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 11,
    title: "Iced Coffee",
    category: "beverages",
    price: "$4",
    description: "Chilled coffee served with ice and cream",
    img: "https://media.istockphoto.com/id/170428990/photo/iced-mocha.webp?b=1&s=170667a&w=0&k=20&c=ItUVpbetBvrKaKcJySbepwehwa2JIJjSOqzHulpvJY0=",
  },
  {
    id: 12,
    title: "Mango Lassi",
    category: "beverages",
    price: "$5",
    description: "Refreshing Indian drink made with mango and yogurt",
    img: "https://media.istockphoto.com/id/1217751214/photo/fresh-mango-lassi-and-mango-fruit.webp?b=1&s=170667a&w=0&k=20&c=Jt0J70BwVkGdirVAu78hKb-MiMzN3_GUbCz8SmGUdS8=",
  },
  {
    id: 13,
    title: "Green Tea",
    category: "beverages",
    price: "$3",
    description: "Traditional green tea with antioxidants",
    img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjB0ZWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    id: 14,
    title: "Mongolian Beef",
    category: "mains",
    price: "$15",
    description:
      "Mongolian beef is a popular Chinese-American restaurant dish that consists of tender, crispy beef in a savory-sweet brown sauce.",
    img: "https://www.onceuponachef.com/images/2023/01/Mongolian-Beef-1-768x561.jpg",
  },

  {
    id: 15,
    title: "Canadian Ham",
    category: "starters",
    price: "$12",
    description:
      "The Canadian Ham tastes moderately salty and has a slightly more chewy mouthfeel compared to the Pork Sandwich Ham because it is smoked. This causes the water content to decrease and gives the ham a darker outer layer.",
    img: "https://www.allrecipes.com/thmb/uIapUWJQuVM5qUBy89RMXAnf0aU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Canadian-bacon-vs-ham-3x2-1-6a76cd77da4c4ad7b1dd6e6dc4b72a26.jpg",
  },
  {
    id: 16,
    title: "Paneer Tikka",
    category: "starters",
    price: "$12",
    description:
      "Paneer tikka or Paneer Soola or Chhena Soola is an Indian dish made from chunks of paneer/ chhena marinated in spices and grilled in a tandoor.",
    img: "https://myfoodstory.com/wp-content/uploads/2017/02/Oven-Baked-Tandoori-Paneer-Tikka-2.jpg",
  },
  {
    id: 17,
    title: "Imarti",
    category: "desserts",
    price: "$4",
    description:
      "In India, this sweet is served during the meal and also popular at weddings and festivals. In particular, Jaunpur in Uttar Pradesh is famous for its imarti.",
    img: "https://as1.ftcdn.net/v2/jpg/07/42/45/60/1000_F_742456097_EDaDklVjngpk4Nug9Wi9ANTEVw7SgzBr.jpg",
  },
  {
    id: 18,
    title: "Pav Bhaji",
    category: "mains",
    price: "$12",
    description:
      "Pav bhaji is a spiced mixture of mashed vegetables in a thick gravy served with bread.",
    img: "https://www.cookwithmanali.com/wp-content/uploads/2018/05/Best-Pav-Bhaji-Recipe-1014x1536.jpg",
  },
  {
    id: 19,
    title: "Chole Bhature",
    category: "mains",
    price: "$17",
    description:
      "It is a combination of chana masala (spicy white chickpeas) and bhatura/puri, a deep-fried bread made from maida. Chole bhature is often eaten as a breakfast dish, sometimes accompanied with lassi.",
    img: "https://media.vogue.in/wp-content/uploads/2020/08/chole-bhature-recipe.jpg",
  },
  {
    id: 20,
    title: "Dhokla",
    category: "starters",
    price: "$14",
    description:
      "Dhokla is a savoury sponge dish that is native to the Indian state of Gujarat and parts of adjacent states, and is popular throughout the country.",
    img: "https://www.endofthefork.com/wp-content/uploads/2018/01/1200x1200-khaman-dhokla.jpg",
  },
];

function displayItems() {
  let menuArray = menu.map((item) => {
    return `<div class="menu-item  col-4 col-md-6 col-lg-4">
  <div class="card">
    <img src="${item.img}" class="card-img-top" alt="${item.title}">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
      <p class="card-text">${item.description}</p>
      <p class="card-text"><small class="text-muted">Category: ${item.category}</small></p>
    </div>
  </div>
  </div>
`;
  });

  /* JS TO BRING DATA FROM MENU ARRAY TO THE MENU DIVISION ***************** */
  const arr = Array.from(document.getElementsByClassName("row"));
  let container = arr[0];

  container.innerHTML = menuArray.join("");
}
displayItems();

function changeItems(category) {
  console.log("change items has been called for category :", category);
  let menuArray = menu.map((item) => {
    if (item.category == category) {
      return `<div class="menu-item  col-4 col-md-6 col-lg-4">
  <div class="card">
    <img src="${item.img}" class="card-img-top" alt="${item.title}">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
      <p class="card-text">${item.description}</p>
      <p class="card-text"><small class="text-muted">Category: ${item.category}</small></p>
    </div>
  </div>
  </div>
`;
    }
  });

  const arr = Array.from(document.getElementsByClassName("row"));
  let container = arr[0];
  console.dir(container);

  container.innerHTML = menuArray.join("");
}

const showSideBar = () => {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "flex";
};

const hideSideBar = () => {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "none";
};
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeButton");

closeIcon.addEventListener("click", () => {
  hideSideBar();
});
menuIcon.addEventListener("click", () => {
  showSideBar();
});

// ********************************************************************
const all = document.getElementById("All");
const starters = document.getElementById("Starters");
const mains = document.getElementById("Mains");
const beverages = document.getElementById("Beverages");
const desserts = document.getElementById("Desserts");

// Code for Button Functionality **********************************
all.addEventListener("click", () => {
  displayItems();
});
starters.addEventListener("click", () => {
  changeItems("starters");
});
mains.addEventListener("click", () => {
  changeItems("mains");
});
beverages.addEventListener("click", () => {
  changeItems("beverages");
});
desserts.addEventListener("click", () => {
  changeItems("desserts");
});

//**************************************************************** */

// IMPLEMENTING THE SEARCH FUNCTIONALITY ******************

const searchbar = document.getElementById("search-input");
searchbar.addEventListener("mouseenter", () => {
  searchbar.style.backgroundColor = "#d7d0d0";
});

searchbar.addEventListener("mouseleave", () => {
  searchbar.style.backgroundColor = "white";
});
