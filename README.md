🎓 Favourite Student List

A React-based web application that allows users to view a list of students, add students to their favourite list, and remove them whenever needed. This project demonstrates the use of React Router, Context API, and the "useContext" hook for navigation and global state management.

🔴 Live Link

(https://favourite-student-list-brown-omega.vercel.app/)

✨ Features

- 👨‍🎓 Student List: Display student details dynamically using the "map()" method.
- ❤️ Add to Favourite: Add students to the favourite list with a single click.
- 🚫 Prevent Duplicates: Prevent the same student from being added to the favourite list multiple times.
- 🗑️ Remove from Favourite: Remove students from the favourite list.
- 🔄 Global State Management: Share and update favourite student data across pages using React Context API.
- 🧭 Page Navigation: Navigate between the Student List and Favourite Students pages using React Router.
- 📭 Empty State Message: Display a friendly message when the favourite list is empty.
- 📱 Responsive UI: Simple and user-friendly interface styled with CSS or Tailwind CSS.

🛠️ Technologies Used

- HTML5
- CSS3 / Tailwind CSS
- JavaScript (ES6+)
- React.js
- React Router DOM
- React Context API
- React Hooks ("useContext")
- Vite
- Git and GitHub

📂 Project Structure

favStudent/
├── src/
│   ├── components/
│   │   ├── favStuList.jsx
│   │   ├── navbar.jsx
│   │   └── stuNameList.jsx
│   ├── context/
│   │   └── studentContext.jsx
│   ├── pages/
│   │   ├── favourite.jsx
│   │   └── home.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

⚙️ Installation and Setup

Follow these steps to run the project locally.

1. Clone the repository

git clone [(https://github.com/jeyachithra2001/Favourite-Student-List.git)]

2. Navigate to the project folder

cd favStudent

3. Install dependencies

npm install

4. Start the development server

npm run dev

5. Open the application

Open the local URL displayed in your terminal, usually:

http://localhost:5173

🚀 How It Works

1. Open the Student List page to view the available students.
2. Click the Add to Favourite button to add a student to your favourite list.
3. Duplicate entries are prevented.
4. Navigate to the Favourite Students page using the navigation bar.
5. View all selected favourite students.
6. Remove a student from the favourite list when needed.
7. If the list is empty, a message such as "No favourite students added yet" is displayed.

📚 Concepts Learned

- Creating reusable React functional components.
- Passing and sharing data between components.
- Managing global state using "createContext()" and "useContext()".
- Rendering lists dynamically using "map()".
- Handling button click events.
- Preventing duplicate items in arrays.
- Implementing navigation using React Router DOM.
- Updating the UI dynamically when state changes.
- Organizing a React project using components, pages, and context.

🎯 Project Objective

The main objective of this project is to understand how to manage shared state across multiple pages in React and build an interactive application with reusable components, navigation, and dynamic UI updates.

👩‍💻 Author

Jeya Chithra

