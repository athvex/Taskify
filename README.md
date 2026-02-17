# Taskify (Just Do It) 📝

**Taskify** is a minimalist, elegant Progressive Web App (PWA) To-Do list application designed to help users stay organized without clutter. Built with vanilla JavaScript and styled with a modern dark theme, it works offline and can be installed like a native app.

---

## 🔗 Live Preview

👉 **View Live:**
[https://athvex.github.io/Taskify/](https://athvex.github.io/Taskify/)

---

## 🚀 Features

* ✅ **Persistent Storage** — Uses `localStorage` to save tasks even after refresh or browser close.
* 📱 **Progressive Web App (PWA)** — Installable on desktop and mobile.
* 🌐 **Offline Support** — Works without internet using a Service Worker.
* ✨ **Modern UI/UX** — Dark-themed design with smooth animations.
* 🔄 **CRUD Functionality** — Add, delete, and toggle tasks easily.
* ✔️ **Task Status Toggle** — Mark tasks complete with strike-through effect.
* 📲 **Responsive Design** — Optimized for desktop, tablet, and mobile.
* 🐙 **Interactive GitHub Corner** — Animated Octocat profile link.

---

## 🛠️ Tech Stack

| Layer      | Technology                        |
| ---------- | --------------------------------- |
| Frontend   | HTML5, CSS3                       |
| Logic      | Vanilla JavaScript (ES6+)         |
| Storage    | Browser localStorage              |
| PWA        | Web App Manifest + Service Worker |
| Icons      | Font Awesome 6.5.1                |
| Typography | Google Fonts (Poppins, Work Sans) |

---

## 📂 Project Structure

```
Taskify
├── index.html              # Main structure
├── manifest.json           # PWA configuration
├── service-worker.js       # Offline caching logic
├── CSS/
│   ├── style.css
│   └── corner.css
├── JS/
│   └── script.js
├── assets/
│   ├── icon-192.png        # PWA icon (192x192)
│   ├── icon-512.png        # PWA icon (512x512)
│   └── todo.png            # Favicon/logo
├── LICENSE
└── README.md
```

---

## ⚙️ Installation & Usage

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/athvex/Taskify.git
```

### 2️⃣ Navigate into the Folder

```bash
cd Taskify
```

### 3️⃣ Run the Project

Open `index.html` in your browser
OR use Live Server (recommended).

---

## 📱 Install as an App (PWA)

1. Open the live website in Chrome.
2. Click the address bar.
3. Select **Install Taskify**.
4. The app will now behave like a native application.

It supports:

* Offline mode
* App-like full screen
* Home screen icon

---

## 💡 How It Works

### Adding Tasks

Tasks are pushed into a `todos` array and stored in `localStorage` as a JSON string.

### Rendering

Each task is dynamically rendered in the DOM with a unique `data-key` (generated using `Date.now()`).

### Persistence

On page load, `getFromLocalStorage()` restores saved tasks automatically.

### Offline Support

The Service Worker caches:

* `index.html`
* CSS files
* JS files
* Manifest

This allows the app to function even without internet.

---

## 🤝 Contributing

Contributions are welcome and appreciated.

1. Fork the repository
2. Create a branch
   `git checkout -b feature/YourFeature`
3. Commit changes
   `git commit -m "Add new feature"`
4. Push to branch
   `git push origin feature/YourFeature`
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

---

## 👨‍💻 Author

Atharva
GitHub: [https://github.com/athvex](https://github.com/athvex)