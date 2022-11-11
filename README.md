
## Scandiweb React Developer Test

This application was built using React, Styled Components, React Router DOM and Browser Apis.

## Changes
  - Filter added
      - please click on "Filter by Atrributes" to see/use it


  - background shade extended to whole view port for the cartOverlay

  - product image heights reduced to remove distortion

  - height increased to avoid distortion for some images

  - Out of stock products shaded and add cart icon hidden for them

  - background spread to the header with any outside click cart overlay will toggle the cartOverlay -- no more clickable header upon CartOverlay on.... **(I can change the background color of the HeaderOverlay, but I left as per the design)**

  - No more shifting left for the cart Overlay

  - Currency switcher effect extends to the whole line

  - product price static on increment or decrement

  - direct DOM access and dangerouslySetInnerHTML removed

I really do appreciate the feedback and everything is done to match your expectations.

**If there is anymore feature or anything you want me to change I can do it immediately... literally anything**


## About

Check all features this app offers:

Built-in with the following pages: PLP, PDP and cart + cartOverlay.

## Features in the App

- Switch between Header clickable without clicking out ---- ALL, clothes, Tech, price icon and cartOverlay icon

- Inside mini-Cart
  - last immediate picked will be shown while other stacked underneath
  - scroll down to see all products
  - scroll the product to see all of its attributes ( **incase it has more one line of attributes** ).
  - clicking the increment will add new product stacked on top, ( **using all attributes of the last one** )
  - Decrement will take away the last immediate one.


- Inside Cart page
  - arrows appear on items images that has more than one picture from the Back-End
  

- Inside the Header
  - header categories( all, clothes, or any other added ) will be clickable(links) back to PLP page from anywhere in the app


- inside PDP page
  - small images on the left side of the big image are clickable
  - first attributes are picked by default


- inside PLP page
  - click on the blue cart to add products and set attributes
  - click on the product itself to go to PLP page


- persistent all over the app
  - the persistent session was done using local storage and session Storage

- price
  - price made accurately in two decimal places with commas appropriately

- mobile support and responsiveness
- cross browser compatibility
- accessibility
- thorough modularity and organization
- unit and integration test done
- many more - find out by checking the app by running it locally



## Built with

#### Core Tech (no unnecessary packages used )

- [React](https://github.com/facebook/react)
  - Context Api for state management/props drilling manager
- [Styled-components](https://styled-components.com/)
- [React Router](https://reactrouter.com/docs/en/v6/api)
- [Browser Apis](https://fusejs.io/)
  - Fetch, session storage, local storage etc.


## Run locally

- Clone the project and run `yarn` to add packages.
- Load the BE on `http://localhost:4000/`
- run `yarn build` 
- run `yarn run serve -s build` 

## Committing Style 
  - feat - for new feature added
  - refactor - for refactor(no new changes)
  - fix- for fixing bugs etc.

## Author

Abeeb Ridwan Olumide


## Thank You for the opportunity
- All features were build and completed
- non - stop committing from the beginning to the end- two(2) weeks plus.... 
- Looking forward to your response and thank you once again for taking your time to check this out
