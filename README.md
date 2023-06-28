# nodejs-interview

# Exercise 1

Describe the content of the package.json file

# Exercise 2

You are building a nodejs backend solution based on ExpressJS.
Create an API endpoint (/hello) following a standard design design pattern that accepts the Name input
as a query parameter and returns "Hello {name}" in the response body.

# Exercise 3

Create the unit-tests for the js files and verify code coverage

# Exercise 4 (when applicable)

Update this repository to use typescript, and describe the advantages and trade-offs

# Exercise 5

Create a post (/guests) api endpoint that accepts an array of objects with the following properties:

- email: string
- name: string
- age: number
- isVIP: boolean

As response, the array is filtered out with VIP and adults only, sorted by age (asc).
an id is also provided to each guest (the id is the array position index concactenated with the 3 first letters of the name)

# Exercise 6

Enrich the response by providing the avatar url.
To fetch the avatar url, an external API is used:
https://reqres.in/api/users?page=1
