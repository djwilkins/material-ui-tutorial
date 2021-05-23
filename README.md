# Material UI

This repo reflects my implementaiton of the [Net Ninja Material UI tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58).  (See [commits](https://github.com/djwilkins/material-ui-tutorial/commits) here.)

[Material UI](https://material-ui.com/) is a React UI component framework that makes it easy to implement material design in React projects.

In this project, a variety of Material UI react components, other Material UI features (ie. makeStyles hook, Custom themes) and a couple third parties libraries (JSON Service, React Masonry CSS) are utilized to quickly create a simple modern looking Notes application.

## Purpose

The purpose of this README will be for me to help summarize what I learned during the course as a way of bookending the learning and organize things for ease of future reference. (*I've moved my original README.md content of notes taken during the course [here](./NOTES.md) - which can be referenced for more in depth notes.*)

A quick aside: Some Material UI components I'd like to consider using in future projects not utilized here include: 

* Date / Time
* Select
* Slider
* Stepper (form progress indicator)
* Dialogue
* Snackbar
* Chip (esp. "Chip array" use case)
* Table
* Tooltip
* Transitions

---

## Getting Started

First, I begin a new repo and commit the Net Ninja Material UI tutorial [starter files](https://github.com/iamshaunjp/material-ui-tut/tree/lesson-1/ "Lesson 1 branch") (lesson 1 branch).

This is basically an empty starter React project with simple React Router implementation between two pages (Create.js, Notes.js) in App.js.  Each page component is basically empty, just returning a div with its name at this point.

I run/add...

* $ npm install
* a .gitignore file
* $ npm install @material-ui/core

And we're ready to begin.

---

## Material UI Components / Tools Utilized (Part 1)

* [Typography](https://material-ui.com/components/typography/#typography) - Handles all basic text needs, variant prop determines type (default is paragraph), depends on Roboto Font. See all [props](https://material-ui.com/api/typography/#props).
* [Button](https://material-ui.com/components/buttons/#button) - Supports Buttons of many styles including icon and image based buttons. Related components: Button, ButtonBase, IconButton.
* [Container](https://material-ui.com/components/container/) - Most basic layout component. Centers content horizontally.
  * *Ex. We wrapped returns from both App pages or page components - Notes.js and Create.js - inside Container component.)*
* [Icons](https://material-ui.com/components/icons/#icons) - Supports Icons of many styles and many ways of combining with other components (see all Material UI icons [here](https://material-ui.com/components/material-icons/).) Requires separate package install of @material-ui/icons as not in @material-ui/core
  * *Ex. In Button component's endIcon prop on Create new note page (Create.js)*
  * *Ex. IconButton in CardHeader component's action prop (NoteCard.js)*

---

## makeStyles Hook

[makeStyles](https://material-ui.com/styles/api/#makestyles-styles-options-hook) is a Material UI custom React Hook that allows ou to apply some custom css styles programatically.

Note: Each parameter you pass into the makeStyles object will be the name of a css class you're defining.

Examples:

* See simple implementation utilized in [Create.js](https://github.com/djwilkins/material-ui-tutorial/blob/main/src/pages/Create.js) and [Notes.js](https://github.com/djwilkins/material-ui-tutorial/blob/main/src/pages/Notes.js)
* See advanced utilization with makeStyle default "theme" parameter to utilize default theme styles in defining custom styles in [Layout.js](https://github.com/djwilkins/material-ui-tutorial/blob/main/src/components/Layout.js) (especially in "toolbar" class for nice trick, follow implementation all the way down.)
* See advanced implementation in [NoteCard.js](https://github.com/djwilkins/material-ui-tutorial/blob/main/src/components/NoteCard.js) where custom component prop is explicitly passed into makeStyles to programatically determine style based on individual note category.

---

## Custom Themes

In Material UI, the standard theme defines many default style values.

For example, when you use "primary" or "secondary" for the color prop on a given Material UI component, what htose colors are is defined in the standard theme.

Same with how big a h1 should be or what default font family is used for all the components.

With Custom Themes, we can define our own values for default Material UI component styles instead.

And the implementation is fortunately quite simple in that we need only override the specific styles we want different from the [default theme](https://material-ui.com/customization/default-theme/#default-theme) to create our new theme.

Example: 

* See utilize of "createMuiTheme" in App.js
* Note how ThemeProvider component applies the theme passed into it to any component nested inside of it
  * In this case, we wrap everything in our overall App component inside of it

---

## Material UI Components / Tools Utilized (Part 2)

* [Text Field](https://material-ui.com/components/text-fields/#text-field) - Supports many styles and configuration options for this basic form input type. (We utilize in Create New Note form - Create.js)
* [Radio Button](https://material-ui.com/components/radio-buttons/#radio)
  * Using material ui radio buttons effectively involves using multiple related material ui components.
    * FormControl - This is the parent component for the set of components we'll be utilizing here.
    * FormLabel - This is one of two components that are direct children of FormControl, this one labeling the overall group
    * RadioGroup - This is two of two components that are direct children of FormControl (for Radio buttons anyway), this one will contain the radio buttons that are related and the user can only select one of.
    * FormControlLabel - Is a component that can be a direct child of RadioGroup (or for check boxes, a child of FormGroup). It provides a label for each Radio button.
    * Radio - The Radio component itself, when used with label/FormControlLabel, is passed into a FormControlLabel's control prop. 

---

## JSON Server

JSON Server wraps a JSON file in a REST api so we can interact with it in a conventional fashion (even though its an App embedded json file).  *Note: It is not a part of material-ui.*

See JSON Server related commits  [here](https://github.com/djwilkins/material-ui-tutorial/commits/) and implementation notes [here](https://github.com/djwilkins/material-ui-tutorial/blob/main/NOTES.md).

---

## Material UI Grid System vs React Masonry CSS

We initially implemented the Material UI Grid System and then ultimately, implemented a third party masonry grid system (which Material UI does not yet support - though it is on their roadmap).

For each, see related commits [here](https://github.com/djwilkins/material-ui-tutorial/commits/) and implementation notes [here](https://github.com/djwilkins/material-ui-tutorial/blob/main/NOTES.md).

---

## Card Component

As the Material UI official doc examples show, the [Card component](https://material-ui.com/components/cards/#card) can basically contain whatever content you want.

We utilize it to make our Note cards displayed in Notes.js much nicer, implementing the specifics in a new NoteCard.js child component to our Notes.js page component.

See related commits [here](https://github.com/djwilkins/material-ui-tutorial/commits/) and implementation notes [here](https://github.com/djwilkins/material-ui-tutorial/blob/main/NOTES.md).

----

## Layout, App Bar and Side Drawer (Sidebar)

We create a new component called Layout to help us organize overall layout of our App.

First, we simple return the main pane of the App from it (either from the Notes display page (Notes.js) or Create new Note page (Create.js)).

We subsequently:

* Add a Sidebar utilizing the [Material UI Drawer component](https://material-ui.com/components/drawers/#drawer)
  * In support of this, we utilize the [List/List Item components](https://material-ui.com/components/lists/) as well
* Add an App Bar (App/Page Header) utilizing the [Material UI App Bar component](https://material-ui.com/components/app-bar/#app-bar)

For each, see related commits [here](https://github.com/djwilkins/material-ui-tutorial/commits/) and implementation notes [here](https://github.com/djwilkins/material-ui-tutorial/blob/main/NOTES.md).

---

## Avatars

As a final floursih on the look of our App, we utilize the [Material UI Avatar component](https://material-ui.com/components/avatars/#avatar) in a couple of places.

First, for our mock user name at the top right of our App Bar, we use for a user profile image *(see [Layout.js](https://github.com/djwilkins/material-ui-tutorial/blob/main/src/components/Layout.js)).*

And secondly, as a final flourish on the look of our Note Cards, per the CardHeader components avatar prop *(see [NoteCard.js](https://github.com/djwilkins/material-ui-tutorial/blob/main/src/components/NoteCard.js))*

For each, see related commits [here](https://github.com/djwilkins/material-ui-tutorial/commits/) and implementation notes [here](https://github.com/djwilkins/material-ui-tutorial/blob/main/NOTES.md).

---

## Final Note

See also unused Material UI components of interest listed above (and official docs for any other/new options.)
