const menu = [
    {
      id: 1,
      title: "Vigero ZX",
    //   category: "breakfast",
      price: `250zł/doba`,
      img: "./aPremium/comet-s2-cabrio.webp",
      desc: `Szybkie`,
    },
    {
      id: 2,
      title: "Vigero",
    //   category: "breakfast",
      price: `250zł/doba`,
      img: "./aPremium/comet-s2-cabrio.webp",
      desc: `Szybkie`,
    },
  ];
  
  
  const sectionCenter = document.querySelector('.flipper')
  const k4 = document.querySelector('.k4')
  const title = document.querySelector('.tytul')
  const container = document.querySelector('.btn-container')
  
  
  
  
  // load items
  window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu)
    displayMenuButtons()
  });
  
  // magic
  function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
  
    //   return //` <article class="menu-item">
    //   <img src="${item.img}" class="photo" alt="${item.title}">
    //   <div class="item-info">
    //     <header>
    //     <h4>${item.title}</h4>
    //     <h4 class="price">${item.price} zł</h4>
    //   </header>
    //      <p class="item-text">${item.desc}</p>
    //   </div>
    // </article>`

//    return `<div class="card bg-dark text-light" style="height:100%; background:-moz-element(#cardbg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
//         <img src="${item.img}" id="cardbg" alt="${item.title}">
//         <div class="card-body text-center">
//             <h3 class="card-title mb-3">
//             ${item.title}
//             </h3>
//         </div>
//         <div class="card-group justify-content-center mb-2 bg-transparent"><a href="#" class="btn btn-primary">Więcej</a></div>
//     </div>
//`
return`background:url(${item.img}); background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;`            
        });
   
    displayMenu = displayMenu.join("")
    // sectionCenter.innerHTML = displayMenu 
    k4.style = displayMenu 
  }

  function displayMenuItems(menuItems){
    let tytul = menuItems.map(function(item){
    return `<h3 id="tytul" class="card-title mb-3">
            ${item.title}
            </h3>
    `
    });
    tytul = tytul.join("")
    title.innerHTML = tytul
}