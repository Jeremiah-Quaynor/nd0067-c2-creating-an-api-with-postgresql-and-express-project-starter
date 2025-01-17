# Storefront Backend Project
Welcome to the shopping site API project!. The API will provide endpoints for retrieving information about products, adding products, retrieving information about users, adding users, retrieving information about orders, adding orders. Node.js and Express.js were used to build the API, data storing was in a PostgreSQL database. Authentication and authorization to ensure that only authorized users can access the API was added.


## 1. Getting Started
- First clone the repo and run <code>npm install</code> to install all the dependencies.
- Then you open up your terminal and run <code>psql</code> to connect to postgres.
- Next you create a user in postgres by running the command <code>CREATE USER full_stack_user WITH PASSWORD 'password';</code>
- Also, we create the store front database and test database with the commands <code>CREATE DATABASE store;</code> and <code>CREATE DATABASE store_test;</code> 
- Then run the command <code>GRANT ALL PRIVILEGES ON DATABASE store TO full_stack_user;</code> and <code>GRANT ALL PRIVILEGEPOSS ON DATABASE store_test TO full_stack_user;</code>
- Look for the <code>database.json</code> file in the root directory and change the values [user, password, database]
- Also, In the <code>.env</code> file, located in the root directory, edit the values there so they match your actual values. [POSTGRES_DB,POSTGRES_TEST_DB,POSTGRES_USER, POSTGRES_PASSWORD]
Then run the command <code>npm run migrate</code>. to perform a database migration.


## 2. Running The Server
To start the server. run the command <code>npm run watch</code>. After the code runs you will see <a href="http://localhost:3000">http://localhost:3000</a> 


## 3. Running the Scripts

##### Eslint
To run compile the typscript code. Run the command <code>npm run tsc</code>. That should create a build into the <code>/build</code> directory.

##### Jasmine
To run the jasmine test. Enter the command <code>npm run test</code>.

##### Eslint
To run eslint configurations. Enter the command <code>npm run lint</code>.

##### Database Migration
To perform a database migration, Enter the command <code>npm run migrate</code>.

##### Prettier
To run prettier configurations. Enter the command <code>npm run format</code>.




## 4. Accessing The Various Endpoints
To enter the various endpoints on the store. You first have to navigate to <a href="http://localhost:3000/store">http://localhost:3000/store</a> then add the various endpoints

#### 1. Products Endpoint
- To view the various products on the endpoint, you have to navigate to <a href="http://localhost:3000/store/products">http://localhost:3000/store/products</a>. An array of objects containning the products should appear.
- To view a single product, you have to access the <a href="http://localhost:3000/store/products">http://localhost:3000/store/products</a>  route and attach a <code>/id</code> to the end. [where **id** = the **id** of the product you want].
- To add a product to the table of products, you will have to navigate to <a href="http://localhost:3000/store/products/add">http://localhost:3000/store/products/add</a> then you add the data you want to be added with to the products.  
- To view products by category, you have to access the <a href="http://localhost:3000/store/products/category">http://localhost:3000/store/products/category</a>  route and attach a <code>/cat</code> to the end. [where **cat** = the category of the products you want].

#### 2. Users Endpoint
- To view the various users on the endpoint, you have to navigate to <a href="http://localhost:3000/store/users">http://localhost:3000/store/users</a>. An array of objects containning the users should appear.
- To view a single user, you have to access the <a href="http://localhost:3000/store/users">http://localhost:3000/store/users</a>  route and attact a <code>/id</code> to the end. [where **id** = the **id** of the user you want].
- To add a user to the table of user, you will have to navigate to <a href="http://localhost:3000/store/users/add">http://localhost:3000/store/users/add</a> then you add the data you want to be added with to the users.  


#### 3. Orders Endpoint
- To view the various orders on the endpoint, you have to navigate to <a href="http://localhost:3000/store/orders">http://localhost:3000/store/orders</a>. An array of objects containning the orders should appear.
- To view orders with a with a particular status, you have to access the <a href="http://localhost:3000/store/orders">http://localhost:3000/store/orders</a>  route and attact a <code>/status</code> to the end. [where **status** = the status you want].
- To add a product to orders, you will have to navigate to <a href="http://localhost:3000/store/orders/">http://localhost:3000/store/orders</a>. Add a <code>/product</code>, then you add the data you want to be added with to the orders.  
  



