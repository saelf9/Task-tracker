# ** Task Manager App**

This is a simple task manager app built using **Vue 3** and **Vite**. It allows users to create, view, update, and delete tasks. The app has a **cute pink aesthetic**, a soft color palette for a delightful user experience. 

---

## **Features:**

- **Create a Task**: Add a task with a title.
- **View Tasks**: Display a list of all tasks.
- **Update Task**: Edit the task name.
- **Delete Task**: Remove a task from the list.
- **Cute Aesthetic**: Soft pink colors, rounded elements, and fun fonts.

---

## **Project Setup**

### **1. Clone the repository:**

```sh
git clone https://github.com/yourusername/weather-task-manager.git
```

### **2. Install dependencies:**

Navigate to the project folder and install the dependencies:

```sh
npm install
```

---

## **Development**

To run the app in development mode, use the following command:

```sh
npm run dev
```

This will start a local development server, and you can access the app in your browser at [http://localhost:3000](http://localhost:3000).

---

## **Production**

To build and deploy the app, run the following command:

```sh
npm run build
```

This will create a `dist` folder with the optimized production files.

---

## **API Integration**

The app uses an API for managing tasks. You can interact with the following endpoints:

- **Create a User**: POST `/users`
- **Get Tasks**: GET `/users/{userId}/tasks`
- **Create a Task**: POST `/users/{userId}/tasks`
- **Update a Task**: PUT `/users/{userId}/tasks/{taskId}`
- **Delete a Task**: DELETE `/users/{userId}/tasks/{taskId}`

---

## **Technologies Used**

- **Vue 3**: JavaScript framework for building user interfaces.
- **Vite**: Build tool for faster development and production builds.
- **API (Heroku)**: Backend API for managing tasks.
- **CSS**: Custom styles for the cute aesthetic.

---

## **Contributing**

Feel free to fork the repository and submit issues or pull requests. Contributions are welcome!

---

## **License**

This project is licensed under the MIT License.

---

## **Acknowledgements**

- **Vue 3**: For providing an easy-to-use JavaScript framework.
- **Vite**: For providing a super-fast development experience.
