import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  value:string='';
  i:number=1;
  freedelivery:boolean=true;
  productname:string='';
  productprice:number=0;
  productrating:number=0;
 
  a:any=[];


 
  products = [
    { name: 'mobile',  price: 10000, rating: 5 ,freedelivery:true},
    { name: 'laptop',  price: 50000, rating: 4.5 ,freedelivery:false},
    { name: 'tv',  price: 70000, rating: 4 ,freedelivery: true},
    { name: 'shirt',  price: 3000, rating: 3 ,freedelivery: false},
    { name: 'pant',  price: 4000, rating: 5 ,freedelivery:false},
    
]
search()
{
  this.products=this.products.filter(product=>(product.name.includes(this.value)));  
}
delete(i:number)
{
  this.products.splice(i,1);
}
free() {
  this.products = this.products.filter(product => product.freedelivery === true);
}
pricelh()
{
  this.products.sort((a,b)=>a.price-b.price);
}
pricehl()
{
  this.products.sort((a,b)=>b.price-a.price);

}
ratinglh()
{
  this.products.sort((a,b)=>a.rating-b.rating);
}
ratinghl()
{
  this.products.sort((a,b)=>b.rating-a.rating);

}
discount()
{
  this.products= this.products.map(product=>{
    product.price=product.price/2;
    return product;
  });
}
delivery()
{
  this.products= this.products.map(product=>{
    product.price=product.price+20;
    return product;
  });

}
add()
{
  let product=({
    i:this.i,
    name: this.productname,
    price: this.productprice,
    rating: this.productrating,
    freedelivery: this.freedelivery
  });

  this.products.push(product);
}

total()
{
  var total=this.products.reduce((sum,product)=>sum+ product.price,0);
  alert("total"+total);
}



}


