# Travelmate - Contributing Guide

Welcome to the Travelmate project! This guide provides step-by-step instructions for contributing to the project.

Please make sure to read the following documents to get an overview of the project:

- [Project Kick-off and Big Picture Overview](https://github.com/peuan/travelmate-web/blob/main/.github/project-kick-off-and-big-picture-overview.md)
- [Purpose, Scope, Target Users, Use Cases, and Key Features / USP](https://github.com/peuan/travelmate-web/blob/main/.github/purpose-scope-target-users-use-cases-key-features.md)
- [Technology Stack](https://github.com/peuan/travelmate-web/blob/main/.github/technology-stack.md)

## Getting Started

### Step 1: Clone the project repository

Clone the Travelmate project repository to your local machine using the following command:

```bash
git clone https://github.com/peuan/travelmate-api.git
```

### Step 2: Install dependencies

Navigate to the project directory and install all the required dependencies:

```bash
cd travelmate-api
npm run install
```


### Step 3: Run the development server
- copy env.example to .env run 
```bash
cp .env.example .env
run docker-compose up
```

## Folder Structure
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

## Conventional Commits and Changelog

```bash
npm run commit
```