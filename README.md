# Carepal-BE

## Local Server Setup
1. Clone project
    ``` 
    $ git clone https://github.com/Gigih3-0-FS-SDG-3-B/carepal-be.git
    ```
2. Open project directory
    ``` 
    $ cd carepal-be
    ```
3. Install package dependencies
    ``` 
    $ npm install
    ```
4.  Database Setup
    -   Setup Env

        First, copy **.env.example** to **.env** and then change several things for app configuration.

        Make sure to fill DATABASE_URL as it would be used for the next steps.
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

## API Documentation

Swagger UI Self Hosted URL:
```
localhost:5000/api/docs
```
Or available at [Postman Public Documention](
https://documenter.getpostman.com/view/25063333/2s9YXo2L5S)

## References
1.  https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgresql