# Timestamp Microservice

This project is a solution for the FreeCodeCamp Back End Development and APIs certification. The service provides a simple API that converts a date input into a Unix timestamp and a Coordinated Universal Time (UTC) string. It can handle various date formats and also returns the current time if no date is provided.

-----

## How to Use the API

You can access the API endpoints by appending the following to the base URL:

### Endpoint: `/api/:date_string`

  - **Example:** `https://your-app-name.herokuapp.com/api/2015-12-25`
  - Returns a JSON object with the Unix timestamp and UTC string.
  - **Example response:**
    ```json
    {"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
    ```

### Endpoint: `/api/:unix_timestamp`

  - **Example:** `https://your-app-name.herokuapp.com/api/1451001600000`
  - Returns a JSON object with the Unix timestamp and UTC string.
  - **Example response:**
    ```json
    {"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
    ```

### Endpoint: `/api/` (No parameter)

  - **Example:** `https://your-app-name.herokuapp.com/api/`
  - Returns the current time in both Unix and UTC format.

-----

## Invalid Date Handling

If the input is invalid, the API will return a JSON object with an error message.

  - **Example response:**
    ```json
    {"error":"Invalid Date"}
    ```

-----

## Project Details

This project was built to fulfill the requirements of the FreeCodeCamp Timestamp Microservice challenge. It demonstrates:

  - RESTful API design principles
  - Date parsing and formatting in JavaScript
  - Error handling for API endpoints
  - JSON response formatting

-----

## Technologies Used

  - **Node.js**: Runtime environment
  - **Express.js**: Web framework
  - **JavaScript `Date` object**: For date operations