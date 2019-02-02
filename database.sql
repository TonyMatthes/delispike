CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "categories" (
    "id" SERIAL PRIMARY KEY,
    "category" TEXT
);

CREATE TABLE "dining_menu" (
    "id" SERIAL PRIMARY KEY,
    "item" text,
    description text,
    "category" integer REFERENCES "categories"."id",
    "price" numeric(6,2)
);

CREATE TABLE "add_ons" (
    "id" SERIAL PRIMARY KEY,
    description text,
    "price" numeric(6,2)
);

CREATE TABLE "public"."customer_info" (
    "id" serial,
    "person_id" integer,
    "first_name" varchar NOT NULL,
    "last_name" varchar NOT NULL,
    "phone_number_primary" int NOT NULL,
    "phone number_secondary" int,
    "address_number" varchar NOT NULL,
    "unit_number" varchar,
    "street" varchar NOT NULL,
    "city" varchar NOT NULL,
    "state" varchar NOT NULL,
    "zip_code" int NOT NULL,
    "email_address" varchar NOT NULL,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("person_id") REFERENCES "public"."person"("id") ON DELETE CASCADE
);

CREATE TABLE "public"."orders" (
    "id" serial,
    "customer_id" INT,
    "time_ordered" TIMESTAMP NOT NULL DEFAULT now(),
    "order_items" INT[] NOT NULL,
    "time_fulfilled" TIMESTAMP,
    "notes" text,
    "complete" BOOLEAN,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("customer_id") REFERENCES "person"."id"
);


INSERT INTO "categories"("id","category")
VALUES
(1,'Marino’s Specialty Sandwiches'),
(2,'Pasta & Hot Meals'),
(3,'Soup & Salads'),
(4,'1/4 lb. Sandwiches'),
(5,'On the Side'),
(6,'Desserts'),
(7,'Box Lunches'),
(8,'Marino’s Pizza ');

INSERT INTO "dining_menu"("id","item","description","category","price")
VALUES
(1,'Submarino','Genoa salami, cappocollo, provalone, meatball, topped with\nonion, lettuce, tomato, Italian dressing',1,7.96),
(4,'Big Shot','Genoa salami, cappocollo, provalone, italian sausage, topped with onion, lettuce, tomato, Italian dressing',1,8.95),
(5,'Cheese Steak','Thin sliced, lean beef covered with melted mozzarella cheese',1,7.96),
(6,'Ultimate Cheese Steak','Thin sliced, lean beef covered with melted mozzarella cheese, sautéed onions, mushrooms, peppers & sauce',1,8.95),
(7,'Italian Chicken Breast','A boneless seasoned chicken breast topped with sauce and\nmelted mozzarella cheese.',1,7.96),
(8,'Italian Beef Dip','Thin sliced italian beef with red sauce or spicy au-jus',1,7.96),
(9,'French Beef Dip','Thin sliced roast beef with au-jus',1,7.96),
(10,'Meatball Sandwich','Topped with sauce and mozzarella cheese',1,7.96),
(11,'Sausage Sandwich','Topped with sauce and mozzarella cheese',1,7.96),
(12,'Original Philly Hoagie','Cappocollo, pepperoni, prosciutini, provolone, tomato, pickles, lettuce, onion, banana peppers, oregano & olive oil',1,7.96),
(13,'The Meatless Hoagie','Swiss, provolone, mozzarella & pepper cheese, with tomato,\npickles, lettuce, onion, banana peppers, oregano & olive oil',1,7.96),
(14,'Rueben Hoagie','Corned beef, sauerkraut, swiss, served hot on a dark rye hoagie',1,7.96),
(15,'Polish Hoagie','Polish sausage, sauerkraut, swiss, served hot on a dark rye hoagie',1,7.96),
(16,'Gyro','Sliced gyro loaf (spicy beef & lamb) on pita topped with lettuce, tomato, onions, & homemade dill dressing',1,7.96),
(17,'Pulled Pork Hoagie','Italian seasoned pulled pork, topped with lettuce and Italian\ndressing',1,7.96),
(18,'Coney Dog Hoagie','An all meat wiener topped with our homemade chili, cheddar ',1,7.96),
(19,'Homemade Lasagne','Homemade all cheese lasagne with your choice of sauce',2,7.99),
(20,'Half Homemade Lasagne','Half serving of homemade all cheese lasagne with your choice of sauce',2,6.99),
(21,'Jumbo Meat Ravioli','5 all beef Ravioli with your choice of sauce',2,7.49),
(22,'Half Jumbo Meat Ravioli','3 all beef Ravioli with your choice of sauce',2,6.49),
(23,'Jumbo Cheese Ravioli','5 ricotta filled Ravioli with your choice of sauce',2,7.49),
(24,'Half Jumbo Cheese Ravioli','3 ricotta filled Ravioli with your choice of sauce',2,6.49),
(25,'Spaghetti','A full plate of thick spaghetti with your choice of sauce',2,6.99),
(26,'Half Spaghetti','A half serving of thick spaghetti with your choice of sauce',2,5.99),
(27,'Meatball Dip','Two homemade jumbo meatballs in boat of sauce. ',2,5.75),
(28,'Italian Sausage Dip','Our homemade sausage in boat of sauce. ',2,5.75),
(29,'Stuffed Italian Loaf Slice','Italian sausage, ham, spinach & mozzarella cheese,\nrolled into Italian bread dough and baked. Served hot in sauce.',2,4.49),
(30,'Meatless Stuffed Italian Loaf Slice','Spinach, mushroom, tomato, black olives, swiss cheese,\nmozzarella cheese, rolled into Italian bread dough and baked. Served hot in sauce.',2,4.49),
(31,'Cup of Soup','A cup of the Soup of the Day',3,2.95),
(32,'Bowl of Soup','A bowl of the Soup of the Day',3,3.5),
(33,'Cup of Chili','A cup of homemade chili',3,3.25),
(34,'Bowl of Chili','A bowl of homemade chili',3,3.95),
(35,'Chef Salad','Lettuce topped with ham, turkey, salami and American\ncheese. Served with bread & butter',3,7.95),
(36,'Pulled Pork Salad','Lettuce topped with banana peppers, pepperoncini,\ntomatoes, Italian-seasoned pulled pork tossed in Italian\ndressing. Served with bread & butter',3,7.95),
(37,'Chicken Pasta Salad','Cavatappi pasta, chicken salad and peas mixed in\ndill dressing topped with tomatoes. Served on lettuce\nwith bread & butter',3,7.95),
(38,'Tossed Dinner Salad','A side salad',3,2.95),
(39,'Side of Spaghetti with Sauce',NULL,5,1.95),
(40,'Jumbo Meatball',NULL,5,1.5),
(41,'Italian Sausage Link',NULL,5,2.1),
(42,'Side of Sauce','1/2 cup',5,0.99),
(43,'Bread & Butter',NULL,5,0.99),
(44,'Garlic Cheese Toast',NULL,5,1.95),
(45,'Garlic Toast',NULL,5,1.5),
(46,'Pizzelle','Italian Cookie',6,0.59),
(47,'A Dozen Pizzelles','12 Italian Cookies',6,5.99),
(48,'Mini Cannoli',NULL,6,1.25),
(49,'Cheesecake','New York or seasonal',6,2.95),
(50,'Homemade Bread or Rice Pudding',NULL,6,2.95),
(51,'Tiramisu',NULL,6,2.95);

