# Clothing Retailer Portal 
   A portal to add and shop clothes.

* [Task & User Stories](#task)
* [My Approach](#my-approach)
* [Directory Structure](#directory-structure)
* [App Usage and Features](#app-usage-and-features)
* [Download Instructions](#download-instructions)

## Task

The task was to build a **responsive website** for a **clothing retailer** that displays **6 categories** of clothes and that also shows a **shopping cart**. **Discount vouchers** could also be redeemed.

#### User Stories:

```
As a User
So that I can see what is on offer
I want to view all products, their category, price and availability

As a User
So that I can purchase a product
I want to add a product to my shopping cart

As a User
So that I can no longer purchase a product that I added
I want to remove a product from my shopping cart

As a User
So that I know how much I have to pay
I want to see the total price for the products in my shopping cart

As a User
So that I can receive a discount
I want to apply a voucher to my shopping cart

As a User
So that I can see how much of a discount I've received
I want to see confirmation of the discount applied

As a User
So that I know if I have entered an invalid voucher
I want to see confirmation that the voucher is invalid

As a User
So that I know if a product is out of stock
I want to see a message whenever I try to add an out-of-stock product to my cart
```

## My Approach

### Back-End

I decided to build this website using **AngularJS** since it is one of my favorite frameworks for building responsive websites. AngularJS makes it really simple to set up a project and structure your code, thanks to its **controllers, services** and **directives**. Another reason for choosing AngularJS was that the data used for this website was in small amounts therefore it wasn't necessary to use a framework like React, one that is widely used for data heavy websites.

I also used **localStorage** for storing data added by user in the cart.

I had created one [controllers](https://github.com/shruti2626/clothing-retailer-shopping-cart/tree/master/js/controllers/ShoppingCtrl.js),  for getting the **JSON data** , adding data to cart and view cart . I had also refactored my code by creating [factories](https://github.com/shruti2626/clothing-retailer-shopping-cart/js/services/ProductDetailsService.js),responsible for creating a **GET request**.
      
Lastly I had configured all my **routes** and **dependencies** in the [app.js](https://github.com/shruti2626/clothing-retailer-shopping-cart/tree/master/js/app.js) file.

### Front-End / Styling

Once all the logic was complete I then moved onto styling the website. I had used **HTML, CSS** and **Bootstrap** to style the website. 

To make the website **responsive** I had set used bootstrap classes and css mediaqueries to different [media screen sizes](https://github.com/shruti2626/clothing-retailer-shopping-cart/tree/master/styles/main.css).

To make website **accessible** I had set aria tags for screenreader.

### Testing


## Directory Structure

```
├── image/
    ├──background-image-fashion.jpg
├── js/  
│   ├── controllers/
│   │   ├── ShoppingCtrl.js
│   ├── services/ 
│   │   │── ProductDetailsService.js
│   ├── app.js   
│── mock 
│   ├──product.json
├── styles/
│   ├── main.css 
├── test/
│   ├── controllers/
│   │   ├── ShoppingCtrl_test.js
│   ├── services/ 
│   │   │── ProductDetailsService_test.js
│   ├── app_test.js   
│── mock 
│   ├──products.html
│   ├──cart-item.html
├──index.html
├──karma.conf.js
```

## App Usage and Features

***User can view all product available with category, productname, price and quantity:***


![Product Page]

***User can view can add a product from add to cart button:***

![Product Page]

***User cannot add a product that is out of stock:***

![Product Page]

***User can view their shopping cart on clicking cart icon :***

![Product Page]

***User can view his cart item :***

![Cart Page]

***User can view increase or descrease product quantity :***

![Cart Page]

***User can remove single product on click  x icon:***



***User can continue shopping :***


***User can  redeem voucher using code :***


***User can clear cart also :***


***User can view message if he adds invalid voucher code :***



## Download Instructions

Follow the below instructions on your terminal to use the website:

```
$ git clone https://github.com/shruti2626/clothing-retailer-shopping-cart.git
$ cd clothing-retailer-portal
$ npm install
$ npm start
(On your browser visit: http://localhost:8000/#!/getProduct)
```


#### Author: [Shruti Saxena](https://github.com/shruti2626)
