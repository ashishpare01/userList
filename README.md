# React User Management App

This is a simple **React application** that helps you manage users using the **Reqres API**. You can log in, view users, edit their details, and delete users.

## Features

- **User Login** (Using Reqres API)
- **User List with Pagination**
- **Edit User Details**
- **Delete Users**
- **Simple & Clean UI**

## Technologies Used

- **React.js** (Frontend)
- **Axios** (For API calls)
- **React Router** (For navigation)
- **CSS** (For styling)

## Prerequisites

Before starting, make sure you have:

- **Node.js** installed ([Download here](https://nodejs.org/))
- **npm** (Comes with Node.js) or **yarn**

## How to Run the Project

### 1️⃣ Clone the Project
Open your terminal and run:
```sh
 git clone https://github.com/your-username/react-user-management.git
 cd react-user-management
```

### 2️⃣ Install Required Packages
Run the following command to install dependencies:
```sh
 npm install
```

### 3️⃣ Start the Application
To start the project, run:
```sh
 npm start
```
Then, open your browser and go to:
```
 http://localhost:3000
```

## API Endpoints Used

### 🔹 Login API
- **Endpoint:** `POST https://reqres.in/api/login`
- **Example Request:**
  ```json
  {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  }



## Important Notes

- This project uses a **mock API**, meaning data is not actually saved.
- When you delete a user, it only removes them from the UI (not from the API).
- Editing user details updates the UI but does not save permanently.
- The login API always returns the same token, so authentication is not real.
