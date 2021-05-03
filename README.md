# 1. Pic2Prod

Post your products on multiple platforms in one click!

- [1. Pic2Prod](#1-pic2prod)
	- [1.1. Development](#11-development)
		- [1.1.1. Installation](#111-installation)
		- [1.1.2 Running](#112-running)
	- [1.2. Deployment](#12-deployment)
	- [1.3. Stories](#13-stories)
		- [1.3.1. Register as a new user](#131-register-as-a-new-user)
		- [1.3.2. Login with valid credentials](#132-login-with-valid-credentials)
	- [1.4. Pages](#14-pages)
		- [1.4.1. Home](#141-home)
		- [1.4.2. Register](#142-register)
	- [1.5. Components](#15-components)
		- [1.5.1. VCardRegister](#151-vcardregister)
		- [1.5.2. VCardLogin](#152-vcardlogin)
	- [1.6. API](#16-api)
		- [1.6.1. session login](#161-session-login)
	- [1.7. Validators](#17-validators)
	- [1.8. Utils](#18-utils)
		- [1.8.1. serverUtil](#181-serverutil)
	- [1.9. Mixins](#19-mixins)
		- [1.9.1. ruleMixin](#191-rulemixin)

## 1.1. Development

Developer requirements to work on the project.

### 1.1.1. Installation

- [Node JS](https://nodejs.org)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)


### 1.1.2 Running

- Run docker-compose in root folder.
- Run `npm run serve` in root folder.

## 1.2. Deployment


## 1.3. Stories

Pic2Prod user stories.

### 1.3.1. Register as a new user

User is able to register by providing email, username, password and confirming his/her password in a form.

1. Enters **Register**
2. Sees **VCardRegister** in the middle of the page.
   1. Type username in form.
   2. Type email in form.
   3. Type password in form.
   4. Type confirm password in form.
   5. Click submit button.
   6. Get redirected to dashboard.
   7. Display success toast notification.


### 1.3.2. Login with valid credentials

User is able to login by typing username and password in login form and gets redirected to dashboard

1. Enters **Home**.
2. Sees **VCardLogin** in the middle of the page.
   1. Type username in form.
   2. Type password in form.
   3. Click submit button.
   4. Get redirected to dashboard.
   5. Display toast notification.



## 1.4. Pages

Vue pages located in `/src/views`

### 1.4.1. Home

Home page when a user enters https://pic2prod.com

**vue-router**
- name: Login
- component: Home
- path: /
- meta
  - guarded: false
  - layout: page


### 1.4.2. Register

Register page when a user enters https://pic2prod.com/register

**vue-router**

- name: Register
- component: Register
- path: /register
- meta
  - guarded: false
  - layout: page

## 1.5. Components


Vue components located in `/src/components/`

### 1.5.1. VCardRegister

- Start: May 03 2021
- End: May 04 2021


**Template**

- `v-card`
	- `v-card-text`
		- `v-form`
  		- v-model: valid
  		- ref: form
  			- `v-text-field`
  				- label: Username
  				- type: text
  				- v-model: form.username
  				- :rules `ruleUtil.username`
      	- `v-text-field`
  			- `v-text-field`
  				- label: Password
  				- type: password
  				- v-model: form.password
  				- :rules `ruleUtil.password`
				- `v-text-field`
  				- label: Confirm Password
  				- type: password
  				- v-model: form.confirmPassword
  				- :rules `[
							v => v == form.password || 'Password does not match'
						]`	
	- `v-card-actions` 
		- `v-btn`
			- color: primary
			- `:loading`: `loading`
			- `:disabled`: `!valid`
			- `@click`: `handleRegister`

**Data**

| Name    | Value | Type    | Description     |
| ------- | ----- | ------- | --------------- |
| form    | {}    | Object  | form input      |
| loading | false | Boolean | loading state   |
| valid   | true  | Boolean | form validation |

**Methods**

1. `handleRegister` action when user clicks submit button
	1. Loading set to true
	2. Validate form.
	3. Request to API using **serverUtil**
		1. url: **session login**
		2. method: POST
		3. data: `this.form`
	4. Redirect to route
	5. Save user state to `me`.
	6. Display notification.
	7. Loading set to false



### 1.5.2. VCardLogin

- Start: May 03 2021
- End: May 04 2021

Vue component for user login.


**Template**

- `v-card`
	- `v-card-text`
		- `v-form`	
  		- ref: form
  		- v-model: valid
  			- `v-text-field`
  				- label: Username
  				- type: username
  				- v-model: form.username
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
	3. Request to API using **serverUtil**
		1. url: **session login**
		2. method: POST
		3. data: `this.form`
	4. Redirect to route
	5. Save user state to `me`.
	6. Display notification.
	7. Loading set to false

## 1.6. API

Pic2Prod API routes and configuration. Located in `/api`.

### 1.6.1. session login

- Method POST
- Request body
  - email : `Validators.email`
  - password : `Validators.password`

## 1.7. Validators

Pic2Prod request body validators located in `/api/validators`.

## 1.8. Utils

Vue utils located in `/src/utils/`

### 1.8.1. serverUtil

- Start: May 03 2021
- End: May 03 2021

Requests endpoint to pic2prod API.


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



## 1.9. Mixins

Vue mixins located in `/src/mixins/`

### 1.9.1. ruleMixin

- Start: May 03 2021
- End: May 03 2021

Form rule mixins to validate form fields.

**Data**

- `username` 
  - is required
  - is string
  - is minimum 5 characters
  - is maximum 32 characters
  - is alphanumeric
- `password`
  - is required
  - is string
  - is minimum 8 characters
  - is maximum 32 characters
  - has 1 higher case character
  - has 1 lower case character
  - has 1 number digit
  - has 1 symbol character
- `email`
  - is required
  - string
  - is alphanumeric
  - has domain
  - has .com or . extension
  - is maximum 32 characters