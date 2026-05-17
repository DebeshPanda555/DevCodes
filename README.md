# Debesh Panda | 3D Interactive Developer Portfolio 🚀

Welcome to the repository for my interactive 3D developer portfolio. This project showcases my skills in modern web development, 3D graphics, and complex animations.

---

## ⚙️ Tech Stack

This project was built using a cutting-edge modern tech stack:

*   **Framework:** React + Vite
*   **Language:** TypeScript
*   **3D Rendering:** Three.js & React Three Fiber (`@react-three/fiber`)
*   **Physics Engine:** Rapier (`@react-three/rapier`)
*   **Animations:** GSAP (ScrollSmoother, SplitText, ScrollTrigger)
*   **Styling:** Pure CSS (with custom tokens and variables)

---

## 🌟 Key Features

*   **Interactive 3D Character:** A 3D avatar that tracks the user's cursor and reacts to the environment.
*   **Physics-based Tech Stack:** An interactive 3D physics scene built with the Rapier physics engine that drops spheres representing the technologies I use.
*   **Smooth Scrolling:** Fluid and seamless scrolling experiences powered by GSAP.
*   **Advanced Text Animations:** Professional text reveal effects using GSAP SplitText.
*   **Fully Responsive:** Customized experiences tailored for both desktop and mobile devices.

---

## 🛠️ Local Development

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DebeshPanda555/DevCodes.git
   cd DevCodes
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 🎨 3D Assets & Customization

The 3D character in this repository is stored in an encrypted format (`.enc`). A script is included to decrypt/encrypt the models if you wish to modify them in 3D software like Blender.

To decrypt the model for editing:
```bash
node public/models/decrypt.cjs
```
After editing and exporting your new `character.glb` file into the `models` folder, encrypt it again so the website can load it:
```bash
node public/models/encrypt.cjs
```

---

## 📄 Usage

Feel free to draw inspiration from the code and animations for learning purposes, but please do not blindly clone and republish the entire design or 3D assets as your own. Build your own version!

Developed with ❤️ by Debesh Panda.
