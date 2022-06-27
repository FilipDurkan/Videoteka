let allTotal = 0;
function addToCart(element) {
  let mainEl = element.closest('.single-movie');
  let price = mainEl.querySelector('span').innerText;
  let name = mainEl.querySelector('h3').innerText;
  let cartItems = document.querySelector('.cart-items');

  price = parseInt(price);

  allTotal += price;

  cartItems.innerHTML += `<div class = "cart-single-item">
                          <h3><span class="ime">${name}</span>:  $<span class="cijena">${price}</span></h3>
                          <button onClick="removeFromCart(this)" class="remove-item">❌</button>
                          </div>`;
document.querySelector('.total').innerText = `Total: $${allTotal}`;
element.innerText = "Pogledano";
element.setAttribute('disabled','true');
}

function removeFromCart(element) {
  let mainEl = element.closest('.cart-single-item');
  let price = mainEl.querySelector(".cijena").innerText;
  let name = mainEl.querySelector(".ime").innerText;
  let movies = document.querySelectorAll('.single-movie');


  price = parseInt(price);


  allTotal -= price;
  mainEl.remove();
  document.querySelector('.total').innerText = `Total: $${allTotal}`;

  movies.forEach(function (film) {
    let movieName = film.querySelector('.si-content h3').innerText;
    if (name === movieName) {
      film.querySelector('.actions button').removeAttribute('disabled');
      film.querySelector('.actions button').innerText = "Pogledaj";

    }
  });

}
