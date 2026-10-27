# Viola Velisitas Davina — Portfolio starter

This is a React + Vite single-page portfolio starter styled with Tailwind CSS.

## Run it

1. Open this folder in VS Code (the folder containing `package.json`).
2. In the terminal run:

   ```bash
   npm install
   npm run dev
   ```

3. Open the local URL printed by Vite.

## Replace the placeholder photos

- Profile: replace `public/profile-placeholder.svg` with your own photo, ideally named `profile.jpg`. Then update the `<img>` in `src/components/Hero.jsx` to `src="/profile.jpg"`.
- Gallery: put your screenshots in `src/assets/gallery/` and update the four imports at the top of `src/components/Gallery.jsx`. Keep the imported names (`kbsImage`, `simbakoImage`, `olalaImage`, `palsImage`) or update the matching entries in the `projects` array.
- The current SVG files are intentional placeholders so the website runs before you add photos.

## Personal edits you should make

1. Check the project descriptions and edit any sentence that does not match your real contribution.
2. In `src/components/Gallery.jsx`, describe your personal role in SIMBAKO and PALS honestly.
3. Add a screenshot for each project you want to showcase.
4. Test the menu and Hero button: open the browser developer tools (F12) and check the Console.
5. Run `npm run build` before submitting. Fix any errors if it does not finish successfully.

## Assignment requirements covered

- Six separate components in `src/components/`: Navbar, Hero, About, Skills, Gallery, Footer.
- Each component uses a capitalized function name and `export default`.
- `const` arrays and `.map()` render the navigation, personal details, skills, and gallery.
- Every mapped item has a `key`.
- Navbar menu clicks and the Hero button log messages to the console.
- Hero image uses the `public` folder.
- Gallery images are imported from `src/assets/gallery/`.
- `App.jsx` imports and renders all six components in order.
- No `useState` or props.
- Responsive Tailwind layout.

Note: the `Let's connect` button logs to the console as required by the assignment; it does not submit a form or send a message.
