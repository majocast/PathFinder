window.onload = function createElements() {
  console.log(container.width);
  console.log(container.height);
  var numElemWidth = screen.width/50;
  var numElemHeight = screen.height/50;
  for(let i = 0; i < numElemWidth; i++) {
    for(let j = 0; j < numElemHeight; j++) {
      //creates the elements top down for each row
      var gridElement = document.createElement('a');
      divProductPhoto.className = "grid-item";
      divProductPhoto.setAttribute("id", "cartItemPhoto");
      productPhoto = document.createElement('img');
      productPhoto.setAttribute("id", "cart-item");
      var src = "images/" + cartItems[i].ProductName + ".jpg";
      productPhoto.setAttribute("src", src);
      divProductPhoto.appendChild(productPhoto);
      document.getElementById('cartDisplay').appendChild(divProductPhoto);
    }
  }
}
