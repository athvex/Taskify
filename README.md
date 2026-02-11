# Taskify (Just Do It) 📝

**Taskify** is a minimalist, elegant To-Do list application designed to help users stay organized without the clutter. Built with vanilla JavaScript and styled with a modern dark-themed aesthetic, it ensures your tasks persist even after you close the browser.

---

## 🔗 Live Preview
Check out the live demo here: [View Taskify Live](https://athvex.github.io/Taskify/)

---

## 🚀 Features

* **Persistent Storage:** Uses `localStorage` so your tasks remain saved even if you refresh the page.
* **Modern UI/UX:** Features a sleek dark-themed design with smooth CSS animations (typing effects and list transitions).
* **CRUD Functionality:** Create, Read, Update, and Delete tasks seamlessly.
* **Task Status:** Toggle tasks as "complete" with a striking striethrough effect.
* **Responsive Design:** Fully functional across desktop, tablet, and mobile devices.
* **Interactive GitHub Corner:** Includes a sleek, animated Octocat link to your profile.
---

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| **Frontend** | HTML5, CSS3 |
| **Logic** | Vanilla JavaScript (ES6+) |
| **Icons** | Font Awesome 6.5.1 |
| **Typography** | Google Fonts (Poppins, Work Sans) |

---

## 📂 Project Structure

```text
├── index.html          # Main application structure
├── CSS/
│   ├── style.css       # Layout and application styling
│   └── corner.css      # GitHub corner animation logic
├── JS/
│   └── script.js       # Core logic and LocalStorage handling
├── assets/
│   └── todo.png        # Favicon/Logo
└── README.md           # Documentation
```

---

## ⚙️ Installation & Usage

1. **Clone the repository:**
```bash
git clone https://github.com/athvex/taskify.git
```


2. **Navigate to the folder:**
```bash
cd taskify
```


3. **Open the app:**
Simply open `index.html` in your favorite web browser.
---

## 💡 How It Works

1. **Adding Tasks:** When you submit a task, it's pushed into a `todos` array and saved to `localStorage` as a JSON string.
2. **Rendering:** The application listens for changes and re-renders the DOM, assigning unique `data-key` attributes (based on `Date.now()`) to each item.
3. **Persistence:** On page load, `getFromLocalStorage()` checks for existing data and restores your list immediately.
4. **Animations:** The `removing` class is applied during deletion to trigger a slide-out effect before the element is actually removed from the DOM.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

**Project Link:** [https://github.com/athvex/taskify](https://github.com/athvex)

---