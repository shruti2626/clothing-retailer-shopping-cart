Clothing Retailer Shopping Cart Website 

Task & User Stories
My Approach
Directory Structure
App Usage and Features
Download Instructions

Task
The task was to build a responsive website for a clothing retailer that displays 6 categories of clothes and that also shows a shopping cart. Discount vouchers could also be redeemed.

User Stories:
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

My Approach
Back-End
I decided to build this website using AngularJS since it is my favourite framework for building responsive websites.
AngularJS makes it really simple to set up a project and structure your code, thanks to its controllers and services. Another reason for choosing AngularJS was that the data used for this website was in small amounts therefore it wasn't necessary to use a framework like React, one that is widely used for data heavy websites.

I had created one controller only, for getting the JSON data from the service and managing the shopping cart. 

I had configured all my routes in the app.js file.

Front-End / Styling
Once all the logic was complete I then moved onto styling the website. I had used HTML, CSS and Bootstrap to style the website.

To make the website responsive I had set different css values to different media screen sizes.

Testing
As for unit testing I used Karma-Jasmine. Unfortunately I didn't have time to test all my controllers and services so my unit testing remains to be completed.

Directory Structure
├── app/
│   ├── css/
│   ├── image/   
│   ├── views/  
│   ├── mock/   
│   ├── js/   
│   │   ├── app.js
│   │   ├── controller/
                      |--shoppingCtrl.js
│   │   
│   │   └── controller/
                      |--productDetailsService.js
│   └── index.html
│
├── test/
│   ├── e2e/
│   │   └── 
│   ├── unit/  
│   │    └── shoppingCtrl.js
│   ├── karma.conf.js
│   └── protractor-conf.js
│

App Usage and Features
User can view all 6 categories:

GetProduct Page

  User can view a category,product name, price, quantity and cart icon on the header of table. 
  User can Add a product from the product table by click ADD TO CART button.
  User cannot add a product that is out of stock.
  User can view the total selected product and price on shopping cart icon.
  User can view their shopping cart on clicking shopping cart icon on top and end of the table both.

Shopping Cart Page

  User can view category,price and quantity of slected product and also can add or remove product.
  User cannot add more product in shopping cart if quantity is 0.
  User can remove product from shopping cart.
  User can go to getProduct page on clicking on continue shopping button.
  User can clear the cart on clicking clear cart button.
  User can apply a voucher which gives them a discount
  Code for £5 off voucher: voucher5
  Code for £10 off voucher when spent over £50: voucher10
  Code for £15 off voucher when spent over £75 and ordered a foot-wear item: voucher15
  
Download Instructions
Follow the below instructions on your terminal to use the website:

$ git clone github.com/shruti2626/clothing-retailer-shopping-cart.git
$ cd clothing-retailer-shopping-cart
$ npm install
$ npm start
(On your browser visit: http://localhost:8000/#!/getProduct)
Below are the codes to be entered when you wish to test using the vouchers:
Author: Shruti Saxena
