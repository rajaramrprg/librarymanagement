# librarymanagement

Application Reqirements
  -- Server version: 10.4.17-MariaDB
  -- PHP Version: 7.3.26
  -- PHP and MYSQL latest versions
  
Database Path
  1. database/db_library.sql
  
Steps to install the application

  1. download the codes from github and move all the codes to wampp or xampp servers 
  2. here we have used the database configurations in 2 different places so change as you want in the below mentioned path.
      1. Login/Services/LoginAuthServices.php
      2. Services/DatabaseConnection.php
  
 Library Management Modules and Features
   Admin Module
      1. Admin (librarian) can add books, update stocks and can see the Stock available and borrowed stock details
   User Module
      1. User will have 2 tabs books list and my books
         1.1 BOOKS - here user can view all the books uploaded from the admin with view option , user can view the book with detailed description with a borrow button at the bottom by clicking it that book will be added to the mybooks list.
         2.1 MY BOOKS - here user can view the books borrowed. 
  
