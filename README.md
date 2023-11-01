# BackEnd-simple

## Local Server Setup
1. Clone project
    ``` 
    $ git clone https://github.com/Gigih3-0-FS-SDG-3-B/BackEnd-simple.git
    ```
2. Open project directory
    ``` 
    $ cd {{PROJECT DIRECTORY NAME}}
    ```
3. Install package dependencies
    ``` 
    $ npm install
   ``` 
    ``` 
    $ npm install multer (FOR middleware multer)
    ```
4.  Database Setup
    -   Setup Env

        First, copy **.env.example** to **.env** and then change several things for app configuration:
        ```
        DATABASE_URL=mysql://{{USER}}:{{PASSWORD}}@{{HOST}}:{{PORT}}/{{DATABASE}}
        ```
    -   Setup Prisma
        -   Duplicate **prisma/schema.prisma** file and create a new file **schema.prisma** on the same directory (prisma)
        
        -   Run this command on terminal:
            ```
            npx prisma db pull
            ```
            Afterwards, you should check see your file of **schema.prisma** is being filled with ORM model.

        -   Run this command on terminal:
            ```
            npx prisma generate
            ```
            The project will finally be able to connect to database.
5.  Run Local Server
    ```
    nodemon index.js
    ```

## References
1.  https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgresql
