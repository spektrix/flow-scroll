# Flow Scroll

This script is currently used only for the [Spektrix](https://www.spektrix.com) Express Checkout. The Express Checkout is a flow built from a series of pages in iframes which are stacked on top of one another to provide a speedy checkout experience for users. As they are separate pages, when users transition from one page to another the page is reloaded and the user is scrolled to the top of the parent page. This script is used to scroll users to where they left off so as to provide a seamless experience. 

The Flow Scroll script works by calculating the position of the active-element (the section of the page a user is interacting with) on the iframe and calculating the position of the iframe on the parent page. The script then uses these two calculations to scroll the parent page to the specific point with which a user is interacting. 

The recommended solution to implement the Flow Scroll script is for a web agency to download the `flow-scroll.js` file from this repository. Once an agency has downloaded this script they should host the script and then reference this in the HTML of each page on which the Checkout Flow is implemented. 

## Things to be aware of when implementing Flow Scroll

- The Resize IFrame script must be implemented in order for the Flow Scroll script to work as they interact with each other. 
- If there is no room to scroll (i.e. if there is no space below the iframe) on the parent page, the script will not scroll to the content because there is nowhere to scroll to. 

- The Flow Scroll script will not take into account any elements that are outside the normal flow in calculating the position to scroll to. These elements may include any that are positioned fixed, relatively or floated. This can also include headers on the parent page but applies to both the parent page iframe. If, when implementing this script, agencies are aware of how large these elements and headers are going to be, then it is possible to adjust the script to take these in to account. 

---
_Copyright © 2018, Spektrix Limited. All rights reserved._