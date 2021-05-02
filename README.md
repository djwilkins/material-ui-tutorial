### Starter Project for the Material UI playlist

Download the code & run **npm install** to install dependencies before starting the app.

You'll also need to install Material UI as a dependency. To do this run **npm install @material-ui/core**

### Starter File Notes

The initial files include an App component with React Router setup with two routes.

The root level route / points to the Notes component (page) and /create points to the Create component (page).

(Both pages are bare bones at this point.)

The index.js is rendering the App component to mount on the root id element like normal but has it nested in the React.StrictMode component.

The index.js is also importing index.css and the index.html is including the google roboto fonts (line 12 at this point).

# Typography Component - Practice

https://material-ui.com/components/typography/#typography

Under demo, click "show source" to see how component used for displayed end result.

The Typograph component with no props (ie. variant) will default to paragraph text.

See all props available for component here: https://material-ui.com/api/typography/

We looked at varient, color, align, gutterBottom and noWrap here.

# Typography Component - Demo App Implementation

Like we do on Create.js, the variant and component props can be used together to interesting effect.

The variant prop will define the actual size of the text and the element type - so if its "h6", it will be the size and that element.

However, if you use these props together, the component prop will determine the element type but variant will still determine actual size:
variant="h6" and component="h2"

For color, the value "secondary" and "textSecondary" are distinct.

# Button Component - Practice

https://material-ui.com/components/buttons/#button

A good bit of variety of button styles here, such as ones including icons or images.

Check out the api links for Button, ButtonBase and IconButton for all prop options:
https://material-ui.com/components/buttons/#api

# Button Component - Demo App Implementation

# Container Component

https://material-ui.com/components/container/#container

Next content in a Container component to center it horizontally.

(Here we simply wanted to put some margin on the left.)

See all prop options here: https://material-ui.com/api/container/