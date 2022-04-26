# Components & Props

### Objectives

- Identify components from a wireframe
- Build a component hierarchy from a wireframe
- Describe props, where it’s from, why it’s used, and it’s limitations
- Destructure props
- Use JSX to build custom components and render them in the browser
- Create dynamic components using props
- Iterate through an array to render multiple components
- Use JavaScript import/export to create modularity in a React app

### Deliverables

▶️ If you have not created the React app yet, run the following command: `npx create-react-app project_showcase` ❗
▶️ Once the project creation has completed, from the directory `02_components_and_props`, `cd` into the directory `project_showcase`

#### 1. Create an `App` component that will:

- Mount a `Header`, `ProjectForm` and `ProjectList` component

- Pass the array of `projects` to `ProjectList` as a prop

#### 2. Create a simple `header` component that will:

- Render the text `Header`

#### 3. Create a `ProjectForm` component that will:

- Render the text `ProjectForm`

#### 4. Define a `ProjectList` component that will:

- Accept `projects` as a prop

- Map over the `projects` array

- Pass `project id` as a prop `key` to `ProjectListItem` component

- Pass `project` object as a prop `project` to `ProjectListItem` component

#### 5. Define a `ProjectListItem` component that will:

- Accept `project` as a prop

- Create an `img` element nested inside a `figure` element

- Set the `img` property `src` to the `project.image`

- Set the `img` property `alt` to `project: ${project.name}`

- Create an `article` element with `h4` and `p` tags nested inside

- Dynamically render each project name inside the `h4` tag

- Dynamically render each project's about data inside the `p` tag

### Resources

- [React](https://reactjs.org/)
- [Babel](https://babeljs.io/)
- [Creating React Apps](https://reactjs.org/docs/create-a-new-react-app.html)
- [create-react-app](https://create-react-app.dev/docs/getting-started)
- [Webpack](https://webpack.js.org/)
- [Quick intro to Webpack](https://medium.com/the-self-taught-programmer/what-is-webpack-and-why-should-i-care-part-1-introduction-ca4da7d0d8dc)

### VSCode extensions

- [draw.io integration](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tabnine](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)
- [ES7+ React/Redux/React-Native/JS snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)


