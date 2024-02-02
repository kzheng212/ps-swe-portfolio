---
created: 2024-02-01T13:27:14 (UTC -05:00)
tags: [software engineer,software engineering,coding,javascript,html,css]
source: https://ps-react-curriculum.herokuapp.com/320/8/lab-2/
author: 
---

# ALAB 320H.8.1 - Consuming Third-Party APIs | React Developer Curriculum

> ## Excerpt
> An interactive website for students currently enrolled in Per Scholas

---
  

## [](https://ps-react-curriculum.herokuapp.com/320/8/lab-2/#learning-objectives)Learning Objectives

After completing this lab, learners will have demonstrated the ability to:

-   Create a React application based on given requirements.
-   Consume an external API and render its data according to requirements.

  

## [](https://ps-react-curriculum.herokuapp.com/320/8/lab-2/#instructions)Instructions

This lab will test your ability to create a React app that consumes a third-party API to populate its data.

In this lab, you'll consume the [Star Wars API](https://swapi.dev/) and render it's data.

To get started:

1.  Use `create-react-app` to create a React app named `react-star-wars`.
2.  `cd` into `react-star-wars` and open VS Code.
3.  Run `npm install react-router-dom`.
4.  Delete the contents of the `src` folder and add blank files for `index.js`, `App.js`, and `style.css`.
5.  Run `npm start` to start the development server.
6.  Use frequent git commits during your process.
7.  When finished, upload your application to a GitHub repository. Submit the link to your repository to Canvas.

Requirements:

1.  **Styling in this lab is secondary to completing the functionality.**
2.  Research the documentation of [SWAPI](https://swapi.dev/documentation) to find the endpoint for the `starships` resource.
3.  Create a `services/sw-api.js` service module and ensure that all API/fetch calls are made from this module.
4.  Use named exports to expose AJAX functionality as needed, e.g. `export function getAllStarships() {...}` to obtain all starships.
5.  Obtain all of the starships from the API and render a card for each starship within `<App>`.
6.  Cards should contain the text of the starship's name.

Here's an example of what your application might look like when completed: ![](ALAB%20320H.8.1%20-%20Consuming%20Third-Party%20APIs%20%20React%20Developer%20Curriculum/VERV0nk.png)

  

> It is important to note that `create-react-app` is now deprecated by the React team. Though it remains functional, developers are encouraged to use alternative tools and frameworks. Since these frameworks are beyond the scope of this course, we will continue to use `create-react-app` for our purposes.
> 
> We encourage exploration of other React frameworks like [Next.js](https://nextjs.org/), [Vite](https://vitejs.dev/), and [Remix](https://remix.run/) as part of your learning efforts.

  

## [](https://ps-react-curriculum.herokuapp.com/320/8/lab-2/#deliverables)Deliverables

-   A link to a GitHub repository that contains your completed lab with no errors (comment things out if they do not work).

  

## [](https://ps-react-curriculum.herokuapp.com/320/8/lab-2/#hints)Hints

Here's some process tips to help you get started:

-   Hold the starship objects in state with the `useState` hook, don't forget to initialize to an empty array!
-   Use the `useEffect` hook to make the AJAX request once the app loads.
-   Once the starship data comes from the API, be sure to update state with the setter function.
-   Create and import a `StarShipCard` component into `App.js`.
-   `.map()` over each starship object in state to transform them into a `<StarshipCard />` component.
-   If you run into a Cross-Origin Resource Sharing (CORS) issue, try changing your `/starships` endpoint to `/starships/`. Trust us on that one. 😎

  

## [](https://ps-react-curriculum.herokuapp.com/320/8/lab-2/#bonus)Bonus

If you have time, try doing the following as well:

-   Display additional details for each Starship in it's respectable card.
-   Use this API's pagination feature to allow you to get additional starships. Find out how to use this to your advantage and allow users to get more starships at the click of a button.
-   [Here's an informative article on pagination.](https://nordicapis.com/everything-you-need-to-know-about-api-pagination/)
