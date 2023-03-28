# Event Ticketing System with NFC

## Overview

This project aims to create a personalized and convenient event ticketing system for visitors using Near Field Communication (NFC) technology. The system provides NFC-enabled tickets that store visitors' information, such as name, age, email, and preferred artists. The information is used to personalize exhibition recommendations, events, and VIP experiences. 

*What is NFC?*
- Near Field Communication (NFC) is a short-range wireless technology that enables two devices to communicate with each other when they are brought close together. It is often used for contactless payments, data transfer, and access control.

## Problem

Many visitors nowsaday expect personalized experiences in order to retain them as return customers ([Source](https://getjobfit.com/company/-L1PrJR0thNqdwYuvFsE/products/-L1PrJR0thNqdwYuvFsE?queryID=5c19ef05eebe3e8ba50a9d8c4d1c888f&positions=1)). However, the current ticket system is not display personalized information for every visiting customer and is outdated.


## Solution

Using *NFC technology* to provide the visitors with NFC-enabled tickets, and and creating a registration form to collect their information prior to or after purchasing tickets. The information collected should include name, age, email, liked artists, and preferred artists. The collected data should be stored securely and authenticated.

Analyzing visitors' profiles, personalize exhibition recommendations or events based on their preferences, and the exhibits they visit on the day of the event.

The data collected from the tickets can be used to invite visitors to VIP events or behind the scenes activities, and create VIP experiences for return visitors.

Backend:

- Node.js with Express framework
- MongoDB or SQL for database storage

Frontend:

- React.js to display exhibit information 

Payment processing:

- Stripe

**Example of data when we retrieved from GET request in the database**

```javascript
[
  {
    "id": "123456789",
    "name": "Raplh Doe",
    "time": "2023-04-01T14:30:00Z",
    "location": "Exhibit Hall A",
    "exhibit": "987654321"
  },
  {
    "id": "987654321",
    "name": "Jane Simpson",
    "time": "2023-04-01T15:15:00Z",
    "location": "Exhibit Hall B",
    "exhibit": "123456789"
  }
]
```
**Possible Implementation**

- Keep track of all the exhibits they visited, how long do they spend there etc. (have NFC scan around the exhibition). This information can be used to further personalize recommendations and experiences for visitors.

### Conclusion
The project aims to create a better experience for visitors by using NFC-enabled tickets and personalized recommendations. By providing a seamless and convenient experience, the system encourages visitors to return and recommend the event to others.
