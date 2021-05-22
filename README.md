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

# Using JSON Server

JSON Server wraps a JSON file in REST api so we can interact with it (nice).

It is not a part of material-ui - just something we're using with our demo app for starting data.

We installed in globally like this:
$ npm install -g json-server

Then we ran this command to have json-server watch manage rest api style interaction with our data file with this command:
$ json-server --watch data/db.json --port 8000

Confirmed it was working to serve out the data in browser like this:
$ http://localhost:8000/notes

(I alternatively served a local json file using pure javascript (no extra library or service) on a recent project like this:
https://github.com/djwilkins/udacity-nano-intermediate-js-oop/blob/master/scripts/load-local-json.js

That was just to load the static json file once.)

# Using JSON Server - Implementation

Next, we utilize React's useState and useEffect Hooks to manage our Notes component state.

First, we use useEffect to load the json data and save it to state (also utilizing a simple fetch with the default GET method here).

Second, we utilize a non-default / POST method fetch to add a new well formed note to our data/db.json (again, thanks to JSON Server handling the POST).

Note: JSON Server also handles for us adding a new unique id to the new addition to our notes array there.

Third, we utilize the fetch request being asynchronous to hook a .then on to it that redirects the user to the main page after submitting a new note. We also utilize the React Router useHistory Hook here. https://reactrouter.com/web/api/Hooks

# Material UI Grid System

"The Material UI Grid System is a 12 column grid system based on flexbox." (paraphrase)

Here we implement a responsive dividing up of the available columns for different screen sizes (xs, small and medium).

Each applies to its size "and up" so even though we don't utilize the "large" size, the medium sizing applies to screens of that size as well.

# Card Component

The Material UI, the official doc examples show, can basically contain whatever content you want.

https://material-ui.com/components/cards/#card

(The examples above go from very simple to more complex.)

As such, I expect it should work quite well for my savings modeling app.

Here, building on the food item example from the docs, we repurpose a number of the same Card related/embeddable components here.

Though for the header icon, we utilized DeleteOutlined Material UI icon component instead which is a trash can icon.

We also add some spacing between in the items in the Grid (back in the parent Notes component.)

And using the "elevation" prop, passed to the <Card> parent component, we define the amount of the card(s) "popping" up from the page (how much shadow / depth it reflects).

# Card Component - Implementing handleDelete

Finally, we implement a handleDelete function by first creating it in the Note component (because it's the level at which the notes state is managed).

We then pass the handleDelete method through a prop into the NoteCard child component and hook the IconButton/trash can icon's onClick up to utilize it.

You can see that the db.json is down one Note per my testing this out / confirming it worked.

(See also the async/await usage in the handleDelete function itself.
Note also the const variable in it... that is not changed within the method.
Yet each time it runs, it will point to a new array returned by filter.)

# Layout Component

First, we simply create a new function component called Layout.

We wrap everything our App component returns that is nested inside the Router component (since we'll be using it in our Layout component) and we return from our Layout component all these nested components we're passing to it as children now.

Second, we utilize makeStyles here to create a css class (like we did before in Create component).  We apply it to just the nested children of Layout in App return structure (which now has its own div we apply the class to.)

We also use a couple of JSX comments as placeholders for the new layout features we'll build on this foundation later (an app bar/header and side drawer).

# Drawer (Sidebar)

Material UI has a lot of "Drawer" (Sidebar) options - https://material-ui.com/components/drawers/#drawer

These are basically side panel / navigation menus that can be toggled to slide in or in this case, can just be a permanent sidebar in your app's layout.

(Note: Side sheets are similar to "Drawers" but are less about navigation and more often pane's for additional settings or supplemental information. For an app with both, it is recommended they two be on opposite and not the same side for clarity https://material.io/components/sheets-side#placement)

# Permanent Drawer (Sidebar) - Implementation

First, we've added a Drawer component with a simple Typography component/header in it.

We've created a style class with a width setting and assigned it to it (className) and passed it the "variant" and "anchor" props.

(Next we'll do something to adjust the default Material UI styling on our Drawer component... through the "classes" prop... note the distinction to the className prop, which we'll require to overwrite the Material UI component's existing styling object.)

Second, we increase the width of the Drawer component's default style class for paper (another material ui component it contains) to breath a bit more. We do this using the Drawer's "classes" prop and provide a style object with the diff values we want to overwrite the default style object.

We also make the main div we're returning all our Layout component content in a flexbox row (default flex direction) so that our Drawer (sidebar) doesn't overlap/cover up our main body page content.

# List and List Items

Buliding on our Drawer (Sidebar), we start fleshing out our (short two item) navigation list.

Material UI lists can do a lot (https://material-ui.com/components/lists/). In this case, we're mostly following type of usage of list/list items from the Materiel UI Drawer (Sidebar) documentation examples.

First, we import the list/list item related components we need - as well as a couple of Material UI icons.

Then we use that map function to generate the set of nested components we want for each navigation link in our Sidebar (using an array of objects we defined locally.)

Second, we turn our list items into a button with the ListItem "button" prop and utilize React Router's useHistory Hook in our ListItem's onClick prop to load up the app page according to the path value in our menuItems objects.

Third, we create a new "active" style and utilize React's useLocation Hook to conditionally apply our new "active" style on the ListItem where the source menuItems object's path is equal to the current path (current useLocation's pathname value).

# More on makeStyles

It turns out, makeStyles has some powerful additional options when instead of simply passing it an object with style classes on it, you instead pass it a function that returns the object with style classes.

First, we hear update our use of makeStyles to do the above and in so doing, are able to pass the "theme" object into said function and utilize it in our object of style classes.

We do that here for a couple of classes (one new) and for padding, utilizing the theme.spacing method which accepts a number that it multiplies by the themes base spacing value. Our updates here get some much needed padding between our main page content (page class) and sideBar title (title class) and the top of the page.

Second, we make use of another powerful makeStyles advanced option again allowing us to make styles more dynamic, this time in the NoteCard component. In this case, we utilize the ability to pass a value into useStyles (ie. the function returned by makeStyles), to in turn use that value within the object of style classes we pass to makeStyles to conditionally define our styles.

More specifically, here having a red border defined for the Card componenet (we're using for each Note) just when the Note is in the work category.

# App Bar - Add and Style Fix #1

After adding the AppBar component with the Toolbar child component (and a Typography component with a Web page title therein), it became clear the AppBar was using the primary color I'd set in App.js (the custom theme created through createMuiTheme) as its background (an undesirable grey here).

So first, I fixed this background to the expected white with a new class defined in Layout.js makestyles and used on the AppBar component.

In the same initial commit, we also used this custom 'appbar' class to fix the width of the App bar to not start until passed the Sidebar (drawer) on the left.

* We do this using the css calc option and utilize our prior drawerWidth const to give our appbar the width of 100% of the page's width minus what the sidebar is using.

# App Bar - Style Fix #2

Secondly, for an addition style fixing commit, we create a new makestyle class of toolbar and in this case, we utilize material ui's theme object (available to makestyles) to simply apply the default toolbar styling to our new class.  By that, our new class includes the toolbar's default height.  We then apply this new toolbar class to a new div right above the 'children' of our Laytout component (the notes being displayed in the layout) to offset them / push them down to be under the actual toolbar and no longer covered up by it.

We also add the elevation prop to our AppBar component with a vlue of 0 to remove its dropshadow to none.

# App Bar - Date in App Bar

Third, we 'npm install date-fns' and utilize it in Layout.js to formate the date in the App bar with a 'Today is the DATE HERE' message.

And also add another Typography component in our App Bar with a username (Mario).

In order to get this username to the right side of the page (and not directly next to our date message), we give our date Typography component a new class and give it a flexGrow of 1 (remember, everything in our Layout component is in a div with flex display applied).

This flexGrow has our date Typography component take up all the horizontal space that it can (our flex container being row/horizontal direction), pushing the next Typography component / with our placeholder user name to the far right side of the page.
