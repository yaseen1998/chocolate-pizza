let form = document.getElementById('cart2') // id for form
let div = document.getElementById('cart-container') // id place for the table
let table = document.createElement('table')
table.id = 'cart' // create element table
div.appendChild(table)
//#######################################################################
//#######################################################################
function product(name, quantitiy,src = 0) {//constructor function 
  
    this.location = name; // name of product 
    this.quantitiy = quantitiy // quantity of product 
    this.image =src // img src of product
    product.all.push(this);
}
product.all = [];




product.prototype.render = function () {
    let row_2 = document.createElement('tr') //create row
    table .appendChild(row_2).classList.add("ta1")

let td1 = document.createElement('td') // create first column contain 'remove'
td1.textContent = 'remove'
row_2.appendChild(td1)


let td2 = document.createElement('td') // create second column contain 'name of product'
td2.textContent = this.location
row_2.appendChild(td2)

let td4 = document.createElement('td') // create third column contain 'img of product'
let imag = document.createElement('img')
imag.src = 'img/' + this.image
td4.appendChild(imag)
row_2.appendChild(td4)

let td3 = document.createElement('td')//  create fourth column contain 'quantity of product'
td3.textContent = this.quantitiy
row_2.appendChild(td3)
}
//#######################################################################
//#######################################################################
checkdata() // to check data in localstorage


cart2.addEventListener('submit',submitHandler);

function submitHandler  (event) {
    event.preventDefault(); // Stop refreshing
let nameproduct = event.target.product.value // take a value from option
productname = nameproduct.split(' ') // split the data in value to name of product and img of product 
let quantityproduct = event.target.quantity.value // take a value from quantity input

let newcart = new product(productname[0],quantityproduct,productname[1]) // make new costructor
newcart.render() // print the new costructor
cart2.reset();

localStorage.cart3 = JSON.stringify(product.all) // store the data in all to localstorag
}

//#######################################################################
//#######################################################################

function checkdata(){
    let local = JSON.parse(localStorage.getItem('cart3')) || [] // if the localstorage is exist store in local(any var)
    let len = local.length
    console.log(local)
    for(let i = 0;i<len;i++){
        
        let newm = new product(local[i].location,local[i].quantitiy,local[i].image) //print the old costructor
        newm.render()
        }
}
//#######################################################################
//#######################################################################
table.addEventListener('click',removeitem)
function removeitem(event){
    event.preventDefault();
    let target = event.target.innerText// select the text in td 
    if(target == 'remove'){ 
        let child = parseInt(event.target.parentElement.rowIndex) // take the index of row 
        event.target.parentElement.remove() // remove the row
product.all.splice(child,1) // remove the index from the constructor
localStorage.cart3 = JSON.stringify(product.all) // return store the data in local storage after remove item
    }
}