# CodingChallenge - SALES TAXES - Receipt Printer App

## Description

### Workspace
Coming soon ...

### App
Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and medical
products that are exempt. Import duty is an additional sales tax
applicable on all imported goods at a rate of 5%, with no exemptions. When I purchase items
I receive a receipt which lists the name of all the items and their price (including tax),
finishing with the total cost of the items,
and the total amounts of sales taxes paid. The rounding rules for sales tax are that for a tax
rate of n%, a shelf price of p contains (np/100 rounded up to the nearest 0.05) amount of
sales tax. Write an application that prints out the receipt details for these shopping baskets…

INPUT:  
- Input 1:
  - 1 book at 12.49
  - 1 music CD at 14.99
  - 1 chocolate bar at 0.85

- Input 2:
  - 1 imported box of chocolates at 10.00
  - 1 imported bottle of perfume at 47.50

- Input 3:
  - 1 imported bottle of perfume at 27.99
  - 1 bottle of perfume at 18.99
  - 1 packet of headache pills at 9.75
  - 1 box of imported chocolates at 11.25

OUTPUT
- Output 1:
  - 1 book: 12.49
  - 1 music CD: 16.49
  - 1 chocolate bar: 0.85
  - Sales Taxes: 1.50
  - Total: 29.83
- Output 2:
  - 1 imported box of chocolates: 10.50
  - 1 imported bottle of perfume: 54.65
  - Sales Taxes: 7.65
  - Total: 65.15
- Output 3:
  - 1 imported bottle of perfume: 32.19
  - 1 bottle of perfume: 20.89
  - 1 packet of headache pills: 9.75
  - 1 imported box of chocolates: 11.85
  - Sales Taxes: 6.70
  - Total: 74.68

---

## Requirements

### General
1. Create own solution
2. To deliver the code, create a git repository on github and send the link or a zip file of a
local git repository and send it via mail
3. Focus on code quality
4. Make production ready code
5. Work Test-Driven-Development (TDD)
6. Commit regularly
7. Free to use build systems and libraries the same way you would build real-world software
8. File that gives hints on how to build it, and the assumptions that are made

### App
Coming soon ...

### Software
Which software is required to run the application?

1. **Node.js**
    - Node.js is an open source JavaScript runtime environment for easily building server-side applications and also a runtime to powers many client-side development tools for modern JavaScript frameworks.
    - Download and install from: <http://nodejs.org/>
    - Version: *16.17.1 LTS*
    - Verify: `$ node --version` => `v16.17.1`

2. **Git**
    - Git 
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
- It is free to use build systems and libraries the same way I would build real-world software. I choosed an NX workspace with the web framework Angular. It is maybe over-engineered but everything (e.g. development environment, test frameworks) is setup and it is for me the best way to show how i work. (Link: Development-Step (2))

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

## Development Steps
This are the development steps:
1. Initialize the Git-Repository.
2. Create a NX workspace with the command `$ npx create-nx-workspace` and choose the name "Coding-Challenge" with the angular app "receipt-printer-app".
3. Update NX workspace and all npm-packages => Ensure that no deprecated or critical packages are used.
4. Update README.md file.

---

## (Code) Quality
Coming soon ...