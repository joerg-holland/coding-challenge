# CodingChallenge - SALES TAXES - Receipt Printer App

## Description
Link to Coding-Challenge - [Problem 1: Sales Taxes](CODING-CHALLENGE.md)

---

## Requirements

### (1) General
1. Create own solution
2. To deliver the code, create a git repository on github and send the link or a zip file of a
local git repository and send it via mail
3. Focus on code quality
4. Make production ready code
5. Work Test-Driven-Development (TDD)
6. Commit regularly
7. Free to use build systems and libraries the same way you would build real-world software
8. File that gives hints on how to build it, and the assumptions that are made

### (2) App
#### (a) Data Structure
- Products
  - id (String => UUID)
  - name (String)
  - price (Number)
  - category (String)
  - imported (Boolean)
- Carts
  - id (String => UUID)
  - CartProducts (Array)
    - productId (String)
    - amount (Number)

#### (b) Services
- Article-Service
  - Load all articles
  - Load article with id
- Cart-Service
  - Load all shopping-baskets
- Receipt-Service
  - Calculate sales taxes
  - Calculate total sum
- Tax-Service
  - Calculate sale tax for a product
- Util-Service
  - Rounded up to the nearest 0.05

#### (c) Environments
- Local
- [Development]
- [QA]
- Production

#### (d) User Interface 
- Input => Mock Data
- Output => Simple page with text


### (3) Software
Which software is required to run the application?

1. **Node.js**
    - Node.js is an open source JavaScript runtime environment for easily building server-side applications and also a runtime to powers many client-side development tools for modern JavaScript frameworks.
    - Download and install from: <http://nodejs.org/>
    - Version: *16.17.1 LTS*
    - Verify: `$ node --version` => `v16.17.1`

2. **Git**
    - Download and install from: <https://git-scm.com/downloads/>
    - Version: *2.37.3*
    - Verify: `$ git --version` => `git version 2.37.3.windows.1`

3. **NPM package manager**
    - The NPM manager comes with the *Node.js* and need to be updated to the fix version.
    - Version: *8.19.2*
    - To update, open a terminal with administration rights:
      - `$ npm install -g npm@8.19.2` (Windows)
      - `$ sudo npm install -g npm@8.19.2` (Linux)
    - Verifying the installation: `$ npm --version` => `8.19.2`

---

## Assumptions
- It is free to use build systems and libraries the same way I would build real-world software. I choosed an NX workspace with the web framework Angular. It is maybe over-engineered but everything (e.g. development environment, test frameworks) is setup and it is for me the best way to show how i work. (Link: Development Steps -> (2))
- The functionality around products and carts (like create or remove products or add products to the cart) is not part of this application. Instead mock data is used. (Link: Requirements -> App -> (2) Services)

---

## Getting Started

Please check the required software before running the application.
  
### 1. NPM-packages
Run `$ npm install` to install all required NPM-packages.

### 2. Run on a development server
Run `$ npm run ng serve receipt-printer-app` to start the application for a dev server in a local environment. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### 3. Build the application

Run `$ npm run ng build receipt-printer-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### 4. Running unit tests

Run `$ npm run ng test receipt-printer-app` to execute the unit tests via [Jest](https://jestjs.io).

---

## Screenshots
![app-screenshot](https://github.com/joerg-holland/coding-challenge/blob/main/meta-assets/app-screenshot.png?raw=true)

---

## Development Steps
This are the development steps:
1. Initialize the Git-Repository.
2. Setup development environment: Create a NX workspace with the command `$ npx create-nx-workspace` and choose the name "Coding-Challenge" with the angular app "receipt-printer-app".
3. Update NX workspace and all npm-packages => Ensure that no deprecated or critical packages are used. Following commands are used:
   - (1) `$ npx nx migrate latest`
   - (2) `$ npx nx migrate --run-migrations`
4. Update README.md file.
5. Defining requirements of the application. (Link: Requirements -> App)
6. Design application architecture. Environment is already established (step 2 and 3), normally should be setup after all requirements are defined.
7. Provide mock data (define data structure) and write tests for articles:
   - Load all articles
   - Load article with id
8. Create article service and the test file with the command `$ npm run ng g service products --project=receipe-printer`
9. Write test to getAll() articles. After that write the function to load the mock articles and document the code.
10. Write test to get(id) one article. After that write the function to load the mock article and document the code.
11. Create cart service and the test file with the command `$ npm run ng g service carts --project=receipe-printer`
12. Write test to getAll() shopping carts. After that write the function to load the mock carts and document the code.
13. Create taxes service and the test file with the command `$ npm run ng g service taxes --project=receipe-printer`
14. Write test to getTaxFromProduct(). After that write the function to validate the tests and document the code.
15. Create utils service and the test file with the command `$ npm run ng g service utils --project=receipe-printer`
16. Write tests for the roundingUpRule(). After that write the function to validate the tests and document the code.
17. Write tests for the calculateTaxforCart() function of carts service. After that write the function to validate the tests and document the code.
18. Write tests for the calculateTotalforCart() function of carts service. After that write the function to validate the tests and document the code.
19. Write test to getPriceOfProductWithTaxes() function of taxes service. After that write the function to validate the tests and document the code.
20. Remove not needed component.
21. Write tests for the app component. After that create the ui with input and output and write the function to validate the tests.
22. Document the app component.
23. Stop development and review the work.

---

## (Code) Quality
Coming soon ...

--- 

## Further steps
Coming soon ...