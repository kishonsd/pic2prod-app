# Pic2Prod

Post your products on multiple platforms in one click!

# Stories

Pic2Prod user stories.

## Story - Register as a new user

User is able to register by providing email, username, password and confirming his/her password in a form.

1. Enters **Page - Register**
2. Sees **VCardRegister** in the middle of the page.
   1. Type username in form.
   2. Type email in form.
   3. Type password in form.
   4. Type confirm password in form.
   5. Click submit button.
   6. Get redirected to dashboard.
   7. Display success toast notification.


## Story - Login with valid credentials

User is able to login by typing username and password in login form and gets redirected to dashboard

1. Enters **Page - Home**.
2. Sees **VCardLogin** in the middle of the page.
   1. Type username in form.
   2. Type password in form.
   3. Click submit button.
   4. Get redirected to dashboard.
   5. Display toast notification.



# Pages

Vue pages located in `/src/views`

## Page - Home

Home page when a user enters https://pic2prod.com

**vue-router**
- name: Login
- component: Home
- path: /
- meta
  - guarded: false
  - layout: page


## Page - Register

Register page when a user enters https://pic2prod.com/register

**vue-router**

- name: Register
- component: Register
- path: /register
- meta
  - guarded: false
  - layout: page

# Components

Vue components located in `/src/components/`

## Component - VCardRegister

**Template**

- `v-card`
	- `v-card-text`
		- `v-form`
			- `v-text-field`
				- label: Username
				- type: username
				- :rules `ruleUtil.username`
    	- `v-text-field`
			- `v-text-field`
				- label: Password
				- type: password
				- :rules `ruleUtil.password`
	- `v-card-actions` 
		- `v-btn`
			- color: primary
			- `:loading`: `loading`
			- `:disabled`: `!valid`
			- `@click`: `handleLogin`


## Component - VCardLogin

- Start: May 03 2021
- End: May 04 2021

Vue component for user login.


**Template**

- `v-card`
	- `v-card-text`
		- `v-form`
			- `v-text-field`
				- label: Username
				- type: username
				- :rules `ruleUtil.username`
			- `v-text-field`
				- label: Password
				- type: password
				- :rules `ruleUtil.password`
	- `v-card-actions` 
		- `v-btn`
			- color: primary
			- `:loading`: `loading`
			- `:disabled`: `!valid`
			- `@click`: `handleLogin`

**Data**

| Name    | Value | Type    | Description     |
| ------- | ----- | ------- | --------------- |
| form    | {}    | Object  | form input      |
| loading | false | Boolean | loading state   |
| valid   | true  | Boolean | form validation |

**Methods**

1. `handleLogin` action when user clicks submit button
	1. Loading set to true
	2. Validate form.
	3. Request to API using **Utils - serverUtil**
		1. url: **API - session login**
		2. method: POST
		3. data: `this.form`
	4. Redirect to route
	5. Save user state to `me`.
	6. Display notification.
	7. Loading set to false

# API

Pic2Prod API routes and configuration. Located in `/api`.

## API - session login

- Method POST
- Request body
  - email : `Validators.email`
  - password : `Validators.password`

## API - session logout

## API - session me

# Validators

Pic2Prod request body validators located in `/api/validators`.

# Utils

Vue utils located in `/src/utils/`

## Utils - serverUtil

Requests endpoint to pic2prod API.

- Start: May 03 2021
- End: May 03 2021

**Params**

| Name    | Type   | Descripiton                       |
| ------- | ------ | --------------------------------- |
| path    | String | Path to request in pic2prod API   |
| options | Object | Axios options to make the request |


**Function**

1. Call pic2prod API using `path` param
2. Add axios call using `options` param
3. Return response

**Example**

```js
import serverUtil from '@/utils/server'

const form = {
	username: 'john',
	password: 'password'
}

const res = await serverUtil('session/login', {
	method: 'POST',
	data: form
})

console.log(res)

/**
Result:
{
	_id: 123,
	username: 'john',
	email: 'john@mail.com'
}
**/
```


## Utils - ruleUtil

Form rules utility to validate form fields.

- `username` 
  - is string
  - is minimum 5 characters
  - is maximum 32 characters
  - is alphanumeric
  - is required
- `password`
  - is string
  - is minimum 8 characters
  - is maximum 32 characters
  - has 1 higher case character
  - has 1 lower case character
  - has 1 number digit
  - has 1 symbol character
  - is required
- `email`
  - string
  - is alphanumeric
  - has domain
  - has .com or . extension
  - is required
  - is maximum 32 characters
- `confirmPassword`
  - is required
  - is same as password