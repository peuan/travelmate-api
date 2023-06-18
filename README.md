### Development
- copy env.example to .env ```sh cp .env.example .env```
- run ```sh docker-compose up```

### Folder Structure
- core
    - for initialize core modules that use as a global such as database config
- modules
    - for custom module such as user, product etc
- common
    - for code base that use as a global such as global enum, global dto
- migrations
    - for database migrations
    - to create a new migration run 
        ```sh 
        npm run migration:create --name={migration name} 
        #for example
        npm run migration:create --name=create-user-table 
        ```