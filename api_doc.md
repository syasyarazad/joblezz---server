# API Documentation

List of available endpoints:

## Endpoint:

- `POST /register`
- `POST /login`
- `GET /getalljobs`
- `POST /applyjob`
- `POST /generate-midtrans-token`
- `PATCH /getpremium`
- `GET /gethistory`

&nbsp;

# ENDPOINT

## POST /register
Description : Register

_Request_

- body:
```json
    {
        "email": "string",
        "password": "string",
    }
 ```

_Response (201 - Created)_

```json
    {
        "id": "integer",
        "email": "string",
    }
```

_Response (400 - Bad Request)_

```json
    {
        "message": "Email and/or Password is REQUIRED"
    }
``` 

_Response (401 - Unauthorized)_
```json
    { "message": "Login first" }
```

_Response (401 - JsonWebTokenError)_
```json
    { "message": "Invalid token" }
```


&nbsp;


## POST /users/login

Description:
- Login user

Request:

- body :
```json
    {
        "email": "string",
        "password": "string",
    }
```

_Response (200 - OK)_

```json
{
    "access_token": "string",
    "email": "string",
    "isPremium": "boolean",
}
```

_Response (401 - Unauthorized)_

```json
{
    "message": "Email and/or Password is INVALID"
}
```











## GET /getalljobs
Description:
- Get all the jobs

_Response (200 - OK)_

- body:
```json
{
    "count": 375,
    "result": [
        {
            "id": "nJRmyvn",
            "role": "Business Development Representative",
            "company_name": "Infocus Solutions",
            "company_num_employees": null,
            "employment_type": null,
            "location": null,
            "remote": true,
            "logo": "https://findwork-dev-images.s3.amazonaws.com/full/202f4af51df03ecb991e473be4f18bce90987477.jpg",
            "url": "https://findwork.dev/nJRmyvn/business-development-representative-at-infocus-solutions",
            "text": "<div><br><a href=\"https://www.togetinfocus.com/\">https://www.togetinfocus.com/</a><br><br>At inFocus Solutions, we provide a world class experience of service by meeting the needs of our clients and theirs. We are expanding and looking for candidates that have a drive to help us accomplish the goal. If you join our team, we’ll count on you to care for and assist our clients with their shopping experience – whether they’re calling, emailing, or texting, we expect the highest level of service. &nbsp;<br><br>We’re looking for a Business Development Representative - those with a passion for growing a long-term career, building relationships and working with a team of professionals in a remote environment. The role is ideal for those who have a passion to interact and assist clients. As a Business Development Representative, you’ll assist customers shopping online while increasing the percentage of customers visiting the dealership after their online inquiry, assist BDC Agents with online sales inquiries, and confirm/reschedule appointments.<br><br></div><div><br>From day one, you’ll receive training, including hands-on practice, personalized coaching and dedicated support throughout your on-boarding experience. With demonstrated success, you’ll have the opportunity to grow throughout the company.&nbsp;<br><br></div><div><strong><br>Job Type</strong></div><ul><li>Full Time</li><li>40 Hours a Week</li><li>Hourly with Commission Opportunity</li></ul><div><br></div><div><strong>You’ll be able to</strong></div><ul><li>Use resources and innovative technologies to optimize the client experience.</li><li>Confidently build relationships with clients by using a defined questioning approach that will help you gain in-depth knowledge of clients’ priorities and connect them with the desired dealership.<br><br></li></ul><div><strong><br>General Description of duties:</strong></div><ul><li>Use various CRMs to initiate contact to a customer</li><li>Use various scheduling software to schedule appointments</li><li>Make outbound calls to customers while meeting company benchmarks</li><li>Take inbound calls at a fast pace while multitasking different softwares</li><li>Evolve with ever changing policies per the clients needs promptly&nbsp;</li><li>Take constructive criticism and make changes as management sees fit&nbsp;<br><br></li></ul><div><strong><br>As a Business Development Representative, you can look forward to</strong></div><ul><li>Ongoing development to deepen your skills and optimize your expertise as the industry evolves and changes.</li><li>Resources and dedicated support to help you reach your full potential.</li><li>A benefit program designed to meet the diverse needs of our employees.</li><li>&nbsp;A remote working environment with flexible shifts<br><br></li></ul><div><strong><br>We’re a culture that</strong></div><ul><li>Believes in responsible growth</li><li>Believes in treating all employees fairly and with care.</li><li>Believes diversity makes us stronger, so we can reflect, connect to and meet the diverse needs of our clients and customers.</li><li>Is committed to advancing our tools, technology, and ways of working. We always put our clients first to meet their evolving needs.<br><br></li></ul><div><strong><br>Required skills:</strong></div><ul><li>Is an enthusiastic, highly motivated self-starter with a strong work ethic and intense focus on results.</li><li>Excellent written and verbal communication skills.</li><li>Displays passion, commitment and drive to deliver a world class experience.</li><li>Ability to analyze data and troubleshoot potential process disruptions.</li><li>Communicates effectively and confidently, and is comfortable engaging all clients while following a script.</li><li>Has the ability to learn and adapt to new information and technology platforms.</li><li>Will follow established processes and guidelines in daily activities to do what is right for clients and inFocus Solutions.</li><li>Efficiently manages your time and capacity.</li><li>Focuses on results, while acting in the best interest of the client.</li><li>Punctuality and attendance at work</li><li>Respectful towards co-workers and management</li><li>Highly organized with excellent computer skills<br><br></li></ul><div><strong><br>Desired skills:</strong></div><ul><li>Automotive and/or RV CRM Experience</li><li>Sales Experience<br><br></li></ul><div><strong>Required Qualifications:</strong></div><ul><li>Valid driver's license</li><li>1 year call center experience</li><li>Dual Monitors</li><li>Quiet Workspace with No Interruptions&nbsp;</li><li>Must be authorized to work in the U.S.</li></ul><div><br><br></div><div><br><br><br><br></div>",
            "date_posted": "2023-03-08T04:13:30Z",
            "keywords": [],
            "source": "Weworkremotely"
        },
        {
            "id": "nJRmyvn",
            "role": "Business Development Representative",
            "company_name": "Infocus Solutions",
            "company_num_employees": null,
            "employment_type": null,
            "location": null,
            "remote": true,
            "logo": "https://findwork-dev-images.s3.amazonaws.com/full/202f4af51df03ecb991e473be4f18bce90987477.jpg",
            "url": "https://findwork.dev/nJRmyvn/business-development-representative-at-infocus-solutions",
            "text": "<div><br><a href=\"https://www.togetinfocus.com/\">https://www.togetinfocus.com/</a><br><br>At inFocus Solutions, we provide a world class experience of service by meeting the needs of our clients and theirs. We are expanding and looking for candidates that have a drive to help us accomplish the goal. If you join our team, we’ll count on you to care for and assist our clients with their shopping experience – whether they’re calling, emailing, or texting, we expect the highest level of service. &nbsp;<br><br>We’re looking for a Business Development Representative - those with a passion for growing a long-term career, building relationships and working with a team of professionals in a remote environment. The role is ideal for those who have a passion to interact and assist clients. As a Business Development Representative, you’ll assist customers shopping online while increasing the percentage of customers visiting the dealership after their online inquiry, assist BDC Agents with online sales inquiries, and confirm/reschedule appointments.<br><br></div><div><br>From day one, you’ll receive training, including hands-on practice, personalized coaching and dedicated support throughout your on-boarding experience. With demonstrated success, you’ll have the opportunity to grow throughout the company.&nbsp;<br><br></div><div><strong><br>Job Type</strong></div><ul><li>Full Time</li><li>40 Hours a Week</li><li>Hourly with Commission Opportunity</li></ul><div><br></div><div><strong>You’ll be able to</strong></div><ul><li>Use resources and innovative technologies to optimize the client experience.</li><li>Confidently build relationships with clients by using a defined questioning approach that will help you gain in-depth knowledge of clients’ priorities and connect them with the desired dealership.<br><br></li></ul><div><strong><br>General Description of duties:</strong></div><ul><li>Use various CRMs to initiate contact to a customer</li><li>Use various scheduling software to schedule appointments</li><li>Make outbound calls to customers while meeting company benchmarks</li><li>Take inbound calls at a fast pace while multitasking different softwares</li><li>Evolve with ever changing policies per the clients needs promptly&nbsp;</li><li>Take constructive criticism and make changes as management sees fit&nbsp;<br><br></li></ul><div><strong><br>As a Business Development Representative, you can look forward to</strong></div><ul><li>Ongoing development to deepen your skills and optimize your expertise as the industry evolves and changes.</li><li>Resources and dedicated support to help you reach your full potential.</li><li>A benefit program designed to meet the diverse needs of our employees.</li><li>&nbsp;A remote working environment with flexible shifts<br><br></li></ul><div><strong><br>We’re a culture that</strong></div><ul><li>Believes in responsible growth</li><li>Believes in treating all employees fairly and with care.</li><li>Believes diversity makes us stronger, so we can reflect, connect to and meet the diverse needs of our clients and customers.</li><li>Is committed to advancing our tools, technology, and ways of working. We always put our clients first to meet their evolving needs.<br><br></li></ul><div><strong><br>Required skills:</strong></div><ul><li>Is an enthusiastic, highly motivated self-starter with a strong work ethic and intense focus on results.</li><li>Excellent written and verbal communication skills.</li><li>Displays passion, commitment and drive to deliver a world class experience.</li><li>Ability to analyze data and troubleshoot potential process disruptions.</li><li>Communicates effectively and confidently, and is comfortable engaging all clients while following a script.</li><li>Has the ability to learn and adapt to new information and technology platforms.</li><li>Will follow established processes and guidelines in daily activities to do what is right for clients and inFocus Solutions.</li><li>Efficiently manages your time and capacity.</li><li>Focuses on results, while acting in the best interest of the client.</li><li>Punctuality and attendance at work</li><li>Respectful towards co-workers and management</li><li>Highly organized with excellent computer skills<br><br></li></ul><div><strong><br>Desired skills:</strong></div><ul><li>Automotive and/or RV CRM Experience</li><li>Sales Experience<br><br></li></ul><div><strong>Required Qualifications:</strong></div><ul><li>Valid driver's license</li><li>1 year call center experience</li><li>Dual Monitors</li><li>Quiet Workspace with No Interruptions&nbsp;</li><li>Must be authorized to work in the U.S.</li></ul><div><br><br></div><div><br><br><br><br></div>",
            "date_posted": "2023-03-08T04:13:30Z",
            "keywords": [],
            "source": "Weworkremotely"
        },
        .......
    ]
}
```

_Response (401 - Unauthorized)_
```json
      { "message": "Login first" }
```



&nbsp;

## POST /applyjob

Description:
- Apply job 


_Response (200 - OK)_

- headers: 
```json
{ "access_token": "string" }
```

- body:
```json    
    {
    "id": "integer",
    "name": "string",
    "description": "string",
    "price": "integer",
    "stock": "integer",
    "imgUrl": "string",
    "categoryId": "integer",
    "authorId": "integer",
    "createdAt": "date",
    "updatedAt": "date"
}
```

_Response (401 - Unauthorized)_
```json
    { "message": "Login First" }
```

_Response (404 - Not Found)_
- body:

```json
    { "message": "User not found" }
```



&nbsp;

## POST /generate-midtrans-token

Description:
- Delete products by id


_Response (200 - OK)_
- headers:

```json
{ "access_token": "string" }
```

- body:
```json
{ "message": "string" }
```

_Response (401 - Unauthorized)_
```json
    { "message": "Login First" }
```

_Response( 403 - Forbidden)_
```json
    { "message": "Forbidden to delete this products" }
```

_Response (404 - Not Found)_
- body:
```json
    { "message": "Products not found" }
```

&nbsp;



## PATCH /getpremium

Description:
- Edit product by id


_Request_
- Headers
```json
{ "access_token": "string" }
```

- Params
```json
{ "id": "integer" }
```

- Body
```json
{
    "name" : "string",
    "description" : "string",
    "price" : "integer",
    "stock" : "integer",
    "imagUrl" : "string",
    "categrogyId" : "integer",
    "authortId" : "integer"
}
```


_Response (200 - OK)_
- headers:
```json
{ "message": "string" }
```

_Response (401 - Unauthorized)_
```json
    { "message": "Login First" }
```

_Response( 403 - Forbidden)_
```json
    { "message": "Forbidden to delete this products" }
```

_Response (404 - Not Found)_
- body:
```json
    { "message": "Products not found" }
```

&nbsp;


## GET /gethistory

Description:
- Edit status product by id


_Request_
- Headers
```json
{ "access_token": "string" }
```

- Params
```json
{ "id": "integer" }
```

- Body
```json
{
    "status": "string"
}
```


_Response (200 - OK)_
- headers:
```json
{ "message": "string" }
```

_Response (401 - Unauthorized)_
```json
    { "message": "Login First" }
```

_Response( 403 - Forbidden)_
```json
    { "message": "Forbidden to delete this products" }
```

_Response (404 - Not Found)_
- body:
```json
    { "message": "Products not found" }
```

&nbsp;







## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "string"
}
```