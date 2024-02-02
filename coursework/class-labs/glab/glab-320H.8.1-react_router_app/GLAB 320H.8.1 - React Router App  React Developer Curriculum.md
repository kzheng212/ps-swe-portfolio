---
created: 2024-01-31T14:29:16 (UTC -05:00)
tags: [software engineer,software engineering,coding,javascript,html,css]
source: https://ps-react-curriculum.herokuapp.com/320/8/lab/
author: 
---

# GLAB 320H.8.1 - React Router App | React Developer Curriculum

> ## Excerpt
> An interactive website for students currently enrolled in Per Scholas

---
  

## [](https://ps-react-curriculum.herokuapp.com/320/8/lab/#learning-objectives)Learning Objectives

After completing this lab, learners will be able to:

-   Create a "multi-page" React application using `BrowserRouter`.
-   Fetch and handle data from an external API in React.

  

## [](https://ps-react-curriculum.herokuapp.com/320/8/lab/#using-react-router)Using React Router

We will be creating a "multi-page" application that displays the prices for common crypto-currencies.

To get started, create a new React app within a project folder, as follows:

-   Run command `npx create-react-app cryptoprices`.
-   `cd` into the cryptoprices folder.
-   Run `npm install react-router-dom`; this is the package that will facilitate our route creation.
-   Delete the contents of the `src` folder and add blank files for `index.js`, `App.js`, and `style.css`.
-   Run `npm start` to start the development server.

> It is important to note that `create-react-app` is now deprecated by the React team. Though it remains functional, developers are encouraged to use alternative tools and frameworks. Since these frameworks are beyond the scope of this course, we will continue to use `create-react-app` for our purposes.
> 
> We encourage exploration of other React frameworks like [Next.js](https://nextjs.org/), [Vite](https://vitejs.dev/), and [Remix](https://remix.run/) as part of your learning efforts.

  

## [](https://ps-react-curriculum.herokuapp.com/320/8/lab/#setting-up-the-router)Setting Up the Router

The first component we'll explore is `BrowserRouter`, which is a context provider allowing all the features of our React-Router to be available to its children. To make our code more semantic, we'll rename `BrowserRouter` as `Router`.

We want all of our application to have the router features, so we'll wrap the `App` component in `index.js` with the `<Router>` component.

`index.js`

```js
import { StrictMode } from "react"; import ReactDOM from "react-dom"; import "./style.css"; import App from "./App"; // Import BrowserRouter and rename it to Router import { BrowserRouter as Router } from "react-router-dom"; // Wrap the App component with the Router component to enable the router features. ReactDOM.render( <StrictMode> <Router> <App /> </Router> </StrictMode>, document.getElementById("root") );
```

  

## [](https://ps-react-curriculum.herokuapp.com/320/8/lab/#components-versus-pages)Components versus Pages

A common convention is to create two folders, `components` and `pages`. Any component that is used as a piece of UI goes in the `components` folder, any component meant to act as a "page" of the website goes in `pages`.

To accomplish this for our example project, we:

-   Create a `components` and `pages` folder.
-   Create a `Main.js`, `Currencies.js`, and `Price.js` file in the `pages` folder.
-   Create the component boilerplate in each component.

`Main.js`

```js
export default function Main (props) { return <h1>This is the Main Component</h1>; }
```

`Currencies.js`

```js
export default function Currencies (props) { return <h1>This is the Currencies Component</h1>; }
```

`Price.js`

```js
export default function Price (props) { return <h1>This is the Price Component</h1>; }
```

  

## [](https://ps-react-curriculum.herokuapp.com/320/8/lab/#creating-our-routes)Creating Our Routes

Now, we will will import the `Route` & `Routes` component into `App`. This will allow us define which of our components should render depending on the URL. We'll also import our pages for our routes.

`App.js`

```js
import "./App.css"; // Import Route and our components import { Route, Routes } from "react-router-dom"; import Currencies from "./pages/currencies"; import Main from "./pages/main"; import Price from "./pages/price"; export default function App () { // We will use the Route component, path attribute, and element attribute to specify each route. return ( <div className="App"> <Routes> <Route path="/" element={<Main/>}/> <Route path="/currencies" element={<Currencies/>}/> <Route path="/price" element={<Price/>}/> </Routes> </div> ); }
```

Right now, only the `Main` component is rendering because we are on the main page, "/". To change the URL bar, we need some links. Let's create some navigation.

  

## [](https://ps-react-curriculum.herokuapp.com/320/8/lab/#navigation)Navigation

In your `components` folder, create a `Nav.js` file. Within this file, we'll add `<Link>` components that wrap our other elements. Using the `to` attribute, we can easily specify where we want our links to take us.

`components/Nav.js`

```js
import { Link } from "react-router-dom"; export default function Nav (props) { return ( <div className="nav"> <Link to="/"> <div>CRYPTO PRICES</div> </Link> <Link to="/currencies"> <div>CURRENCIES</div> </Link> </div> ); }
```

Next, add the following styles to `index.css`.

```css
.nav { display: flex; justify-content: space-between; background-color: black; color: white; padding: 15px; font-size: 2em; } .nav a { color: white; text-decoration: none; }
```

Finally, import the `Nav` component into `App.js`. Since we want the `Nav` to show on all pages, we'll put it above the `<Routes>`.

```js
import "./App.css"; import { Route, Routes } from "react-router-dom"; import Currencies from "./pages/currencies"; import Main from "./pages/main"; import Price from "./pages/price"; import Nav from "./components/nav"; export default function App () { return ( <div className="App"> <Nav /> <Routes> <Route path="/" element={<Main/>}/> <Route path="/currencies" element={<Currencies/>}/> <Route path="/price" element={<Price/>}/> </Routes> </div> ); }
```

  

## [](https://ps-react-curriculum.herokuapp.com/320/8/lab/#parameters)Parameters

We are going to soon build out our `Currencies` component, which will allow us to select which currency's price we'd like to see. We will do this by injecting a variable into our `Price` route's path. The syntax for this is as follows.

```js
<Route path="/price/:symbol" element={<Price/>}/>
```

The `:symbol` part is a URL param - a variable in the URL. Whatever is in that spot in the path will be accessible by using the `useParams` hook, which we will look at shortly.

  

## [](https://ps-react-curriculum.herokuapp.com/320/8/lab/#the-currencies-component)The Currencies Component

In this component we will be doing the following:

-   Creating an array of the currencies our app can find prices for.
-   Looping over that array to generate a link for each one to the `Price` route.
-   Placing the currency symbol in the `:symbol` part of the URL.

`Currencies.js`

```js
import { Link } from "react-router-dom"; export default function Currencies (props) { const currencies = [ { name: "Bitcoin", symbol: "BTC" }, { name: "Litecoin", symbol: "LTC" }, { name: "Ethereum", symbol: "ETH" }, { name: "Ethereum Classic", symbol: "ETC" }, { name: "Stellar Lumens", symbol: "XLM" }, { name: "Dash", symbol: "DASH" }, { name: "Ripple", symbol: "XRP" }, { name: "Zcash", symbol: "ZEC" }, ]; return ( <div className="currencies"> {currencies.map((coin) => { const { name, symbol } = coin; return ( <Link to={`/price/${symbol}`}> <h2>{name}</h2> </Link> ); })} </div> ); }
```

Notice that when we click any of the links, it takes us to the `Price` component. Use the React devTools to look for the router props and you should be able to find the value of the `symbol` param in there.

  

## [](https://ps-react-curriculum.herokuapp.com/320/8/lab/#the-price-component)The Price Component

Before we create this component, take a moment to get your free API key from [coinapi.io](https://www.coinapi.io/). Keep in mind, you can only make 100 requests per day with your free API key.

Once you have your API key, here is what we will do within `Price.js`:

-   Store the API key and currency symbol in different variables.
-   Use the `useEffect` hook to make an API call.
-   Interpolate the `apikey` and `symbol` in the fetch URL.
-   Save the resulting data in state and render it.
-   Include a `loaded` and `loading` function for rendering the data if exists.

Below, you'll see that the `useParams` hook we mentioned earlier is very simple to use.

`Price.js`

```js
import {useState, useEffect} from "react"; import {useParams} from "react-router-dom" export default function Price (props) { // Our api key from coinapi.io. const apiKey = "YOUR API KEY"; // Grabbing the currency symbol from the URL Params. const params = useParams() const symbol = params.symbol // Using the other two variables to create our URL. const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`; // State to hold the coin data. const [coin, setCoin] = useState("null"); // Function to fetch coin data. const getCoin = async () => { try { const response = await fetch(url); const data = await response.json(); setCoin(data); } catch(e) { console.error(e) } }; // useEffect to run getCoin when component mounts. useEffect(() => { getCoin(); }, []); // loaded function for when data is fetched. const loaded = () => { return ( <div> <h1> {coin.asset_id_base}/{coin.asset_id_quote} </h1> <h2>{coin.rate}</h2> </div> ); }; // Function for when data doesn't exist. const loading = () => { return <h1>Loading...</h1>; }; // If coin has data, run the loaded function; otherwise, run loading. return coin && coin.rate ? loaded() : loading(); }
```

Your app should now be working! Voila!
