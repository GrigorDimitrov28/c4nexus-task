**"Silhouette"** is an online retailer that sells jewelry.

1. On top of the website stands the sticky header. It has a logo on the left
   and a sliding **"Category"** menu on the right. The sliding effect is achieved by animating the
   position of the menu.

2. Below that is the **"Category Description"** section which displays 3 things - **Active Category**,
   **Product Count** and a **Sort Dropdown** menu. The category and count tracking is achieved with React's `useState` hook.
   The sorting will trigger dynamically when the number of components has changed so the user doesn't have to sort multiple times.

3. On the main part of the screen stands the Product grid section. It has a `display: grid` property that changes templates
   with changes in the resolution. A **Product** component is rendered for every product instance in the `.json` file.

4. Every **Product** component has:

   - Star rating (from 1 to 5).
   - "Add to cart" image that adds the product to the cart when clicked.
   - A thumbnail image (The same images are used for the task).
   - Model and brand.
   - Price (Can be discounted. Will be slashed with an `::after` pseudoelement if discounted).

5. The filter menu is displayed on top of the screen for smaller resolutions and on the left for larger screens.
   It offers two types of filtering - By **discount** and by **min-max** price. One or both filters can be applied at a time.
   There is a **"Clear"** button that removes all filters and returns the grid to its initial state.

6. Finally, there's the `footer` element that displays basic information about the website coupled with some links.
   The links don't work at the moment and are there for visual purposes.

The app is build with **React + Vite** and can be started by typing `npm install` followed by `npm run dev`.
It can be accessed at `localhost:3000`.
