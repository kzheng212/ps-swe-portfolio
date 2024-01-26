---
created: 2024-01-23T11:34:44 (UTC -05:00)
tags: [software engineer,software engineering,coding,javascript,html,css]
source: https://ps-react-curriculum.herokuapp.com/320/1/lab-2/
author: 
---

# ALAB 320H.1.2 - React Fashion Blog | React Developer Curriculum

> ## Excerpt
> An interactive website for students currently enrolled in Per Scholas

---
  

## [](https://ps-react-curriculum.herokuapp.com/320/1/lab-2/#learning-objectives)Learning Objectives

After completing this lab, learners will have demonstrated the ability to:

-   Create an HTML/CSS page from a given mockup.
-   Convert an HTML/CSS page into React.
-   Style React components to create a desired layout.

  

## [](https://ps-react-curriculum.herokuapp.com/320/1/lab-2/#instructions)Instructions

In this assignment lab, we'll be creating a Fashion Blog in React.

1.  Build this site locally in **plain HTML**. Don't use React yet.
2.  Push the site to GitHub, and deploy it on GitHub Pages.
3.  Remake the site with React, and deploy it to Netlify (instructions below).
4.  In the GitHub ReadMe file for your React Application, remove all of the React boilerplate information and replace it with the following:

```markdown
# [Netlify Live Link](Netlify link here) # [GitHub Pages Live Link](GitHub Pages link of HTML version) # [GitHub Link of HTML Version](GitHub link for HTML version)
```

5.  Submit the link to the React version GitHub repository to Canvas.

  

## [](https://ps-react-curriculum.herokuapp.com/320/1/lab-2/#deliverables)Deliverables

-   A link to a GitHub repository that contains your completed lab with no errors (comment things out if they do not work).

  

## [](https://ps-react-curriculum.herokuapp.com/320/1/lab-2/#resources)Resources

Download the following images:

![](ALAB%20320H.1.2%20-%20React%20Fashion%20Blog%20%20React%20Developer%20Curriculum/blog-image-1.jpg) ![](ALAB%20320H.1.2%20-%20React%20Fashion%20Blog%20%20React%20Developer%20Curriculum/blog-image-2.jpg)

  

## [](https://ps-react-curriculum.herokuapp.com/320/1/lab-2/#site-mockup)Site Mockup

Faithfully reproduce this mockup in HTML & CSS.

![goal](ALAB%20320H.1.2%20-%20React%20Fashion%20Blog%20%20React%20Developer%20Curriculum/mock.png)

  

## [](https://ps-react-curriculum.herokuapp.com/320/1/lab-2/#build-the-html)Build the HTML

We'll walk you through some of the steps necessary for this portion of the project. You should already be familiar with most of this process.

1.  Create your html boilerplate in the `index.html` file.
2.  Add a new file called `style.css` and link it to the HTML file.
3.  In the body of your HTML, use [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header), [`<main>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main), and [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) tags to clearly define the different parts of the page.
4.  Use an `<h1>` tag for the site title and an `<h2>` for the subtitle inside the page header.
5.  Use [`<nav>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) tags inside the page header to create an accessible navigation. Follow the example in the [W3C Web Accessibility Initiative (WAI) Guidelines](https://www.w3.org/WAI/tips/developing/#provide-meaning-for-non-standard-interactive-elements) to format your navigation:
    
    1.  Wrap each link in an anchor tag.
    2.  Wrap each anchor tag in a list item.
    3.  Wrap all of the list item tags in an unordered list tag.
    4.  Place the unordered list inside the the nav tag and give it attributes for `aria-label="Main Navigation"` and `role="navigation"`.
6.  Mark up both of the blog posts using the [`<article>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) tag.
7.  Use this [W3C WAI Guideline](https://www.w3.org/WAI/tips/developing/#use-mark-up-to-convey-meaning-and-structure) example to help you structure your blog post content. Follow the pattern! Make sure there is a `<p>` tag that contains some lorem ipsum text (remember, you can create this with Emmet by typing `p>lorem` and pressing tab)!
8.  Make sure your images all have `alt` attributes so that they are accessible.
9.  Inside the page footer, use the same technique you used earlier to create a semantic and accessible navigation, using a wrapping `<nav>` tag, unordered list, and the aria attributes.
10.  Add a copyright in the `<footer>`. For the © symbol, use an [HTML entity](https://www.w3schools.com/html/html_entities.asp).

_Make sure to add and commit your changes when you've got the HTML done!_

  

## [](https://ps-react-curriculum.herokuapp.com/320/1/lab-2/#style-with-css)Style with CSS

1.  Use a [`border`](https://www.w3schools.com/css/css_border.asp) only on the left side of the page's `<html>` element. It should have a width of `5px` and a color of `lightgray`.
2.  Set the `<body>` element's `min-height` to be at least 100% of the [viewport height](https://alligator.io/css/viewport-units/). Also, use the `font-family` property to set the entire page to use `sans-serif` fonts.
3.  Give the `<body>` a `max-width` of `1000px` and center it on the page with the margin auto technique.
4.  The border is too close to our text and we've got an issue with [margin-collapse](https://medium.com/@joseph0crick/margin-collapse-in-css-what-why-and-how-328c10e37ca0) at the top of the page! Add `padding` to the `<header>`, `<main>` and `<footer>` elements of `1rem` on the top and bottom and `2rem` on the left and right to fix these issues.
5.  For the `<h1>` on the page we want the color to be `tomato`.
6.  Set all of the images to have a `width` of `100%`.
7.  For your site navigation, you'll need to remove all of the padding on the `<ul>` elements and then set it's `list-style-type` to `none`. It would be a good idea to use a class to style the navigation so that you can still make a bulleted list on your page. Use Flexbox to style the `<ul>` for the navigation elements. On the top navigation use the `space-between` rule to have the menu items spread across their container evenly. Set the color for the anchors inside the main navigation to be `lightgray` and the footer navigation to be `tomato`.
8.  Style the title of each of your blog posts so that they are larger.
9.  Style the 'continues...' anchor tags so that they are aligned to the right and are bold and tomato colored.
10.  Set the margin on the bottom the `<article>` tags to be `4rem`. Also, add a `1px` solid border in `lightgray` to the bottom of each one and give each padding on the bottom of `2rem`.
11.  For the `<p>` tag inside your `<article>`, use the [pseudo-element ::first-letter](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter) to style the drop cap and set it's color to `lightgray`.
12.  Style the copyright so it is `lightgray`.

_Awesome job, add, commit and push changes to create your pull request!_

  

## [](https://ps-react-curriculum.herokuapp.com/320/1/lab-2/#convert-to-react)Convert to React

Now, you're on your own.

Remake the entire project in React, and deploy it to Netlify, as shown below.

When you're finished, you should have component files for `App.js`, `Header.js`, `Nav.js`, `Article.js`, and `Footer.js`.

  

## [](https://ps-react-curriculum.herokuapp.com/320/1/lab-2/#deploy-on-netlify)Deploy on Netlify

Link GitHub to Netlify for free.

![](ALAB%20320H.1.2%20-%20React%20Fashion%20Blog%20%20React%20Developer%20Curriculum/JVM7UWA0NJZBlBLjw9VovVR4B42w-Wp5LR1C.png)

![](ALAB%20320H.1.2%20-%20React%20Fashion%20Blog%20%20React%20Developer%20Curriculum/SnfWQ7EEIA5ni1Q0jSNotjADvHuH0jdtDpfK.png)

![](ALAB%20320H.1.2%20-%20React%20Fashion%20Blog%20%20React%20Developer%20Curriculum/o1fu3AiHPI8NBgsxRTUGsklGgVGi1kA6JbvJ.png)

Run the `build` command in your app in the command line (for the React app only).

Drag and drop the application folder from your computer into Netlify.

![](ALAB%20320H.1.2%20-%20React%20Fashion%20Blog%20%20React%20Developer%20Curriculum/Val5BuZKW8cVCM8TZ3UUWnezqGOy5SvKYbek.gif)
