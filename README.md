### Starter Project for the Material UI playlist

Download the code & run **npm install** to install dependencies before starting the app.

You'll also need to install Material UI as a dependency. To do this run **npm install @material-ui/core**

### Starter File Notes

The initial files include an App component with React Router setup with two routes.

The root level route / points to the Notes component (page) and /create points to the Create component (page).

(Both pages are bare bones at this point.)

The index.js is rendering the App component to mount on the root id element like normal but has it nested in the React.StrictMode component.

The index.js is also importing index.css and the index.html is including the google roboto fonts (line 12 at this point).

# The Typography Component

https://material-ui.com/components/typography/#typography

Under demo, click "show source" to see how component used for displayed end result.

The Typograph component with no props (ie. variant) will default to paragraph text.

See all props available for component here: https://material-ui.com/api/typography/

We looked at varient, color, align and noWrap here.