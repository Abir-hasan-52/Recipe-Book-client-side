
# 🍽️ Recipe Book

A user-friendly recipe management application that allows users to add, discover, like, and save recipes. The app features private recipe management, dynamic top recipes based on likes, and a wishlist functionality—perfect for food enthusiasts to share and explore culinary creations.

## 🌐 Live Demo

[**View Live Site**](https://recipe-book-app-62bc2.web.app/)

---

## 🛠️ Technologies Used

* **React 19**
* **Vite**
* **Tailwind CSS + DaisyUI**
* **Firebase** (Authentication & Firestore)
* **React Router**
* **MongoDB** (Backend database)
* **Express.js** (Backend server)
* **SweetAlert2** (Beautiful alert messages)
* **Lottie React** (Animations)
* **React Simple Typewriter** (Text animations)

---

## 📸 Screenshots

![Homepage](https://i.ibb.co/FLQr8mvz/recipe-book-app-62bc2-web-app-1.png)
 

---

## 🚀 Core Features

* **User Authentication:** Login/Register with Email-Password and Google OAuth, with private routes.
* **Recipe CRUD:** Users can create, read, update, and delete their own recipes.
* **Top Recipes:** Displays top 6 recipes based on like counts, dynamically fetched.
* **Like Functionality:** Users can like others’ recipes (multiple times) but not their own.
* **Filtering:** Filter recipes by cuisine type (Italian, Mexican, Indian, etc.) on the All Recipes page.
* **Responsive Design:** Fully responsive for mobile, tablet, and desktop devices.
* **Dark/Light Mode:** Toggle between themes for better UX.
* **Custom 404 Page:** Food-themed error page without navbar/footer.
* **Toast & SweetAlert2:** User-friendly notifications for success/error messages.

---

## 📦 Dependencies (from package.json)

```json
{
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "firebase": "^11.8.1",
    "react-router": "^7.6.0",
    "tailwindcss": "^4.1.7",
    "daisyui": "^5.0.35",
    "sweetalert2": "^11.21.2",
    "lottie-react": "^2.4.1",
    "react-simple-typewriter": "^5.0.1"
  },
  "devDependencies": {
    "vite": "^6.3.5",
    "@vitejs/plugin-react": "^4.4.1",
    "eslint": "^9.25.0"
  }
}
```

---

## ⚙️ Installation & Running Locally

1. Clone the repo:

   ```bash
   git clone https://github.com/Abir-hasan-52/recipe-book-client.git
   ```

2. Navigate to the project folder:

   ```bash
   cd recipe-book-client
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root and add your Firebase config variables:

   ```
   VITE_apiKey=your_api_key
   VITE_authDomain=your_auth_domain
   VITE_projectId=your_project_id
   VITE_storageBucket=your_storage_bucket
   VITE_messagingSenderId=your_messaging_sender_id
   VITE_appId=your_app_id
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔗 Useful Links

* Client Repo: [https://github.com/Abir-hasan-52/recipe-book-client](https://github.com/Abir-hasan-52/recipe-book-client)
* Server Repo: [https://github.com/Abir-hasan-52/recipe-book-server](https://github.com/Abir-hasan-52/recipe-book-server)
* Live Site: [https://your-live-site-link.com](https://recipe-book-app-62bc2.web.app/)

---

## 👤 Author

**\[Abir Hasan]**
📧 [abirhasan](mailto:abirhasan5208@gmail.com)
🔗 [LinkedIn](https://linkedin.com/in/ah-abir)

---

