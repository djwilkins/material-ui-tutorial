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

# Icons

From the getting started page, we run "$ npm install @material-ui/icons" to install the icons package to our project.

Find the available icons (and varied icon styles) here: https://material-ui.com/components/material-icons/#material-icons

Note: Clicking on the icon will provide you with the import code needed.

See all the props passable to icon components (color, fontSize, etc) through the footer api links here:
https://material-ui.com/components/material-icons/#material-icons

# makeStyles Hook

makeStyles is a Material UI custom React Hook that allows you to apply some custom styles.
https://material-ui.com/styles/api/#makestyles-styles-options-hook

Note: Each parameter you pass into the makeStyles object will be the name of a css class you're defining.

# Custom Themes

In Material UI, the standard theme defines many default style values.

For example, when you use "primary" or "secondary" for the color prop on a given Material UI component, what those colors are is defined in the standard theme.

Same is the case for how big an h1 should be or what default font family is used for all the components.

With Custom Themes, we can define our own values for default material UI component styles instead.

And fortuntely, we can just override the specific styles we want different from the default.

(You can explore the default theme object in the docs here: https://material-ui.com/customization/default-theme/#default-theme
For example, find colors defined under palette.)

For setting custom colors, can also use Material UI color objects from here:
https://material-ui.com/customization/color/#color

# Text Fields

https://material-ui.com/components/text-fields/#text-field

# Radio Buttons

https://material-ui.com/components/radio-buttons/#radio

Using material ui radio buttons effectively involves using multiple related material ui components.

- FormControl - This is the parent component for the set of components we'll be utilizing here.
- FormLabel - This is one of two components that are direct children of FormControl, this one labeling the overall group
- RadioGroup - This is two of two components that are direct children of FormControl (for Radio buttons anyway), this one will contain the radio buttons that are related and the user can only select one of.
- FormControlLabel - Is a component that can be a direct child of RadioGroup (or for check boxes, a child of FormGroup). It provides a label for each Radio button.
- Radio - The Radio component itself, when used with label/FormControlLabel, is passed into a FormControlLabel's control prop.
