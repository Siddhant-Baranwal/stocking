# Stocking 

## Website for analyzing the stock price and performance of any company.

## Detailed Architecture - 
<!-- Image of detailed architecture -->

## List of services used -
### Google Firebase - 
##### Link: https://firebase.google.com/
##### Pricing: Free
###### Why it is the best fit:
- Real-time database & firestore
- Easy authentication
- Cloud functions
- Hosting 
- Easy integration with google ecosystem
##### Alternatives:
- AWS Amplify
- MongoDB
- Azure App Service

### Deployment -
#### Vercel for frontend
#### Render for backend
##### Link: https://render.com/
##### Pricing: Free
##### Why it is the best fit: 
- Simple and easy to use
- Auto scaling of applications
- Git integration for continuous deployment
- Managed databases (PostgreSQL, Redis)
- Supports multiple languages (Node.js, Python, etc.)
- Free SSL, automatic HTTPS, and DDoS protection
##### Alternatives: 
- DigitalOcean
- Fly.io
- Google Cloud Run
- Dokku

### Highchart -
##### Link: https://www.highcharts.com/
##### Pricing: 
- Free for personal, non-commercial use
- Paid licenses for commercial use
##### Why it is the best fit: 
- Extensive library of interactive charts and graphs.
- Supports multiple chart types (line, bar, pie, etc.).
- Highly customizable with extensive API documentation.
- Easy integration with various platforms and frameworks (React, Angular, etc.).
##### Alternatives: 
- Chart.js
- D3.js
- Google charts
- ApexCharts

## Why do we think our architecture is scalable: 
<!-- To-do -->

## Till what scale can we accommodate in a zero cost solution?
<!-- To-do -->

## What would have we done differently in your architecture if a zero cost solution was not a requirement?
<!-- To-do -->

## Steps taken to improve DX: 
- Creating the project using ReactJS
- Creating a good organized folder structure
- Uploading the project as a GitHub repo so that it is easy for all members to access and changes the project.

## Steps taken to improve UX:
- Tailwind CSS and External CSS
- Google Fonts
- Interactive graphs using HighCharts
- Use of peer focusing design technique.


## Data visualization -
#### Data has been visualized in the form of graphs using HighCharts.
## Computation -
- Companies in the same country:
  Search in database where country is same as company's country.
- Companies with greater diversity, stock price, market share, revenue and expense:
  Search in database where the value is more than company's diversity.
- Growth and stability of the company: 
  Take the percentage difference between each consecutive year data and then average the values. If the net average is positive for return growth with the average percent, else decline with the average percent.

<!-- What practices did you take to make your system extendible and accept actual real time computations ? -->

### Predictive analysis: 
- We are predicting the next year's data using the growth/decline value obtained from above on the last year's data.
- We are currently researching for a better prediction method.
<!-- More to be written by ChatGPT -->