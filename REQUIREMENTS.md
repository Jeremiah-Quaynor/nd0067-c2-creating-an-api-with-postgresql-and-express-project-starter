##REQUIREMENTS
 - <code>.env</code> file must be created and and it must be configured properly. 
    It must contain 
    <strong>POSTGRES_HOST
    POSTGRES_DB
    POSTGRES_TEST_DB
    POSTGRES_USER
    POSTGRES_PASSWORD
    POSTGRES_PORT
    ENV
    SECRET_KEY
    SALT_ROUNDS</strong>

- Also the the database must be created and it must contain three tables
  <strong>
    Product
    users
    orders
    order_products
  </strong>
---
- The Schema for users:
   |Columns    | Type               |
   |----------|---------------------|
   |id        |  int (PRIMARY KEY)  | 
   |firstName |character varying(50)|
   |lastName  |character varying(50)|
   |pasword   |     text            |

---
- The Schema for Product:
   |Columns    | Type                |
   |-----------|---------------------|
   |id         |  int (PRIMARY KEY)  | 
   |name       |character varying(100)|
   |price      |     int             |
   |category   |character varying(40)|


---
- The Schema for orders:
   |Columns    | Type  |
   |----------|---------------------|
   |id        |  int (PRIMARY KEY)  | 
   |status    |character varying(64)|
   |userId    |     int             |

---
- The Schema for orders_products:
   |Columns    | Type  |
   |----------|---------------------|
   |id        |  int (PRIMARY KEY)  | 
   |quantity  |     int             |
   |order_id  |     int             |
   |product_id|     int             |

## Available Routes
- <a href="http://localhost:3000">http://localhost:3000</a> - (GET) Home Route
- <a href="http://localhost:3000/store">http://localhost:3000/store</a> - (GET) Store route
##### Products Routes
- <a href="http://localhost:3000/store/products">http://localhost:3000/store/products</a> - (GET) get all products route
- <a href="http://localhost:3000/store/prouducts/:id">http://localhost:3000/store/products/:id</a> -(GET) get a single product route
- <a href="http://localhost:3000/store/products/add">http://localhost:3000/store/products/add</a> - (POST) add a product to the store
- <a href="http://localhost:3000/store/products/category/:cat">http://localhost:3000/store/products/category/:cat</a> - (GET) get products by category

##### Users Routes
- <a href="http://localhost:3000/store/users">http://localhost:3000/store/users</a> - (GET) get all users route
- <a href="http://localhost:3000/store/users/:id">http://localhost:3000/store/users/:id</a> - (GET) get all users route
- <a href="http://localhost:3000/store/users/add">http://localhost:3000/store/users/add</a> - (POST) add a user route
  


##### Orders Routes
- <a href="http://localhost:3000/store/orders">http://localhost:3000/store/orders</a>. - (GET) get all orders route
- <a href="http://localhost:3000/store/orders/:state">http://localhost:3000/store/orders/:state</a> - (GET) get orders by a particular status[ completed | uncompleted ]

