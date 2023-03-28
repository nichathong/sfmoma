## Problem

Curating personalized experiences many consumers are coming to expect for the event in order to retain attendees as return customers ([Source](https://getjobfit.com/company/-L1PrJR0thNqdwYuvFsE/products/-L1PrJR0thNqdwYuvFsE?queryID=5c19ef05eebe3e8ba50a9d8c4d1c888f&positions=1))

- The goal of this project is to create a better exrience for the visitors and encourage them to come back through invition, news and ads.
- The current ticket system is outdated and was not personalized to the visitors. The ticket displayed should not display the same information for every visiting customers

## Solve the problems

- Using *NFC technology* to provide the visitors with NFC-enabled tickets

- Create a registration form to collect visitors information prior or after purchase the tickets
    - collect: *name, age, email, liked-artisit, preferred artist* 
    - make sure the secure data and authentication

- Analyze visitors profiel to analyze and personalize exhibition recommendation or events. This could be future on shows on the visit day

- The ticket will collect some data relevent to the visitors 
    - collect: *name, time, location, exhibit visited*

- The data can be use to invite them to VIP events or behind the scene

- Create VIP experince for return visitors

## How

- Store the data in a database using MongoDB to store database and Node.js for backend and Express.js for the server. React.js will be used for frontend

### Back End technology
- Node.js and Express framework
- There are  a few possibilities to for database option
  - MongoDB, SQL

### Front End technology
- React.js - to display exhibit information


**possible implementation**
- Use React.js to display information about the exhibits and personalized recommendations based on visitor data
- Stripe for payment processing
- Keep track of all the exhibits they visited, how long do they spend there etc. (have NFC scan around the exhibition)