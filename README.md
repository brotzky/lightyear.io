# Dennis Brotzky Take-home Exercise

This is Dennis Brotzky's take home challenge submission.

Here is a brief summary of what I did.

## 1. Removing Redux

This is a simple application and introducing Redux was overkill. Every task
could be handled with React's built in state library and it was unnecessary to introduce a new libray to handle a small amount of isolated state. This was also a conscious decision because I wanted to reduce the bundle size and keep the code's footprint as small as possible. Redux does have its purpose, but for this app I decided to remove it.

That said, I have been using Redux for a few years now and have no problem with it. I used [Redux Sagas](https://github.com/Jobeir/jobeir/blob/master/client/sagas/index.js) and the [ducks pattern](https://github.com/Jobeir/jobeir/blob/master/client/modules/auth/ducks/index.js) in an [open source project of mine](https://github.com/Jobeir/jobeir).

At work we use Redux in all our products.

## 2. Styled Components instead of Sass

I removed all the style-loaders from Webpack and anything else that was compiling the Sass files. Instead
of using Sass, I downloaded [styled-components](https://github.com/styled-components/styled-components) to keep style scoping local and help create a component first approach. I did use the `injectGlobal` API to introduce some global resets and styles.

## 3. Formik for Forms

Because there's no Redux I chose to use [Formik](https://github.com/jaredpalmer/formik) which is a small library
to help with forms and handling local form state. This was my first time using it and I chose it because of the small
bundle size (For example, half the bundle size of Redux Form -- always keeping in mind production speed) and flexible API. It uses the `render props` pattern and also allows for other options such as `component` which made it simple to use.

## 4. Testing

There are tests for the utility functions but I didn't have time to fully test the React code. With more time
it would be ideal to use something like [Storybook](https://github.com/storybooks/storybook) to facilitate individual
component testing. On top of that, a simple integration test with [Nightmare](https://github.com/segmentio/nightmare) or [Puppeteer](https://github.com/GoogleChrome/puppeteer).

## 5. Architecture

Since this app is quite small and won't be required to scsale over time I decided to have a single `App.js` that brings together all the components and logic.

```
App.js
```

is the main file that is rendered into the DOM. Here is where all the components are used and the app logic sits

<br />

```
/src/components
```

Reusable components built with `styled-components` and `formik`. These are used within `App.js`

<br />

```
src/utils
```

Some tested functions utility used to generate a random essay template

<br />

If this was an App that required scale I would aim to have a larger emphasis on feature based folders that keep related Components, State (redux), and Tests together.

## 6. Miscellaneous

* Use dynamic imports or a library such as [React Loadable](https://github.com/jamiebuilds/react-loadable) to code split the `EssayTextForm` so the initial bundle served is lighter and faster to load.
* I moved `getTextTemplate()` out of `constants.js` into its own utility file
* I tried to balance simplicity, reusability, and readability the best I could -- I avoided cryptic variable names, made sure there were relevant comments, and kept functionality scoped to where it needed to be.
* Tried to guess to font-family (Looks like Open Sans to me), and eye balled the styles as required
* Start Over button requirements didn't make it clear if there should be a new essay template generated and all the inputs should be cleared. In my implementation I made it so all inputs are cleared and a new random essay template is generated.

---

# Orignal Readme requirements:

### Take-Home Exercise

This folder contains the structure of a React/Redux application, as well as a
webpack setup to compile the files. We'd like you to use them to implement a
feature for us.

Approach this exercise as if you worked here: make sure your code is clear and
concise, and use your time wisely.

#### The feature

Your job is to make a small [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs)-style game
using React/Redux and SCSS. The game should ask some simple questions and assemble the
answers into a paragraph.

#### How to use

First, make sure you have a modern version of `node` and `yarn.`

Run `yarn install` before getting started.

Make your changes to these files, then run `npm start` to run the compiler.

A new window should open; if not, you can visit your page at
http://127.0.0.1:3000/. Any changes to the project files should trigger a new
build, and a refresh.

#### What's there

* Screenshots of the app's design, in `/assets/`.
* The main app folder, `/src/`, where you'll be making your changes.
* A [ducks](https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c#.5chqfp84p)
  file, `/src/madlibs.js`. This file contains the reducer, the initial state, along
  with some example actions.
* A constants file, `/src/constants.js`. It contains the questions and potential essay templates.
* A folder for React components, `/src/components/`.

#### Requirements

* Write your code as if this feature were going into production!
* ✅ Prompts appear in the left column, and the essay preview on the right.
* ✅ Each "prompt" consists of a question and an input.
* ✅ When the user blurs the input, the app should "save" their response and update the essay preview.
* ✅ To generate the essay preview, choose one of the available templates at random.
* ✅ Changing one answer should not re-roll the chosen templates of other fields.
* ✅ The user's responses in the essay preview should be bold.
* ✅When the user has answered and blurred all questions, an "Edit" button appears.
* ✅ When a user clicks "Edit", replace both columns with a centered textarea containing the generated essay content.

Some more details:

* ✅ Don't worry about vendor prefixes; target the latest version of Chrome.
* ✅ The app should compile without any linter errors.
* ✅ Create as many or as few subcomponents as you like.
* ✅ Use whatever libraries you want. (But remember: if you worked here, we would
  want to pay attention to payload size. Choose wisely!)
* ✅ Eyeball the margins, paddings, and colors.

#### When you're done

Remove the `node_modules` directory and zip up this project directory. Gmail
has trouble with sending ZIPs, so upload it to Google Drive or Keybase or some
other file-sharing service.

Thanks for your time, and good luck! We look forward to hearing from you!
