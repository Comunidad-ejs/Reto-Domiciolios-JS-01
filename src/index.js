const orders = (timeout, product, distric) => {
  console.log(`### Orden: ${product} para ${distric}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`==> su pedido con el producto ${product} 
      fue despachado y llegara a usted en ${time}ms al distrito ${distric}`)
    }, timeout);
  })
}
var options = {
  gaseosa: 'Gaseosa 1L',
  ceveza: 'Sixpack de cervezas',
  pizza: 'Pizza familiar',
  area: '6 arepas de queso',
  jugo: 'Jugo natural de manderia'
}

let distric = ['olaya', 'fontibon', 'kennedy']



const delivery = () => {
  options = {}
  orders(6000, options.pizza, distric[3])
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

delivery ();

