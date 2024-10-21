import { Component } from '@angular/core';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {

  category:string="";
  term:string="";
  name:string="";
  price:number=0;
  rating:number=0;
  deliverydate:any=0;
  freedelivery:boolean=true;



   products = [
    { name: 'mobile', category: 'gadgets', price: 10000, rating: 5 ,freedelivery:true,deliverydate:Date()},
    { name: 'laptop', category: 'gadgets', price: 50000, rating: 4.5,freedelivery:true,deliverydate:Date()},
    { name: 'tv', category: 'gadgets', price: 70000, rating: 4 ,freedelivery:false,deliverydate:Date()},
    { name: 'shirt', category: 'fashion', price: 3000, rating: 3 ,freedelivery:true,deliverydate:Date()},
    { name: 'pant', category: 'fashion', price: 4000, rating: 5 ,freedelivery:true,deliverydate:Date()},
    { name: 'saree', category: 'fashion', price: 5000, rating: 4 ,freedelivery:false,deliverydate:Date()},
    { name: 'flipflop', category: 'footware', price: 1000, rating: 3.5 ,freedelivery:false,deliverydate:Date()},
    { name: 'shoes', category: 'footware', price: 3000, rating: 4.2,freedelivery:true,deliverydate:Date()},
    { name: 'belt', category: 'accessories', price: 600, rating: 2.5 ,freedelivery:false,deliverydate:Date()},
    { name: 'specs', category: 'accessories', price: 999, rating: 3.8,freedelivery:true,deliverydate:Date()},
    { name: 'watch', category: 'accessories', price: 4000, rating: 5,freedelivery:true,deliverydate:Date()},
]

addtocart(){
  let product={
    name:this.name,
    category:this.category,
    price:this.price,
    rating:this.rating,
    freedelivery:this.freedelivery,
    deliverydate:this.deliverydate
  }
  this.products.push(product);
  
}
categorychange(){
  this.products=this.products.filter((product)=>product.category==this.category);
}
search(){
  this.products=this.products.filter((product)=>product.name.includes(this.term));
}

pricelh(){
  this.products.sort((a,b)=>a.price-b.price);
}
pricehl(){
  this.products.sort((a,b)=>b.price-a.price);
}
ratinglh(){
  this.products.sort((a,b)=>a.rating-b.rating);
}
ratinghl(){
  this.products.sort((a,b)=>b.rating-a.rating);
}
discount(){
  this.products=this.products.map(product=>{product.price=product.price/50;
    return product;});
}
pricedis(){
  this.products=this.products.map(product=>{product.price=product.price+50;
    return product;});
}
totalprice(){
  var totalprice=this.products.reduce((sum,product)=>sum+product.price,0);
   alert('total cart price:'+totalprice);
}


}
