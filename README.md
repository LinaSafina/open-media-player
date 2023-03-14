# Open Media Player
Open Media Player is a web-app which includes one page with a form for entering a link to an audio file. After successful input, instead of the form, a user will see a player which can be used to listen to the source.

### Deployment
The app is deployed on Vercel and can be accessed at the following URL: [open-media-player-git-develop-linasafina.vercel.app/](https://open-media-player-git-develop-linasafina.vercel.app/)

### Getting Started
To get started with the project, you can clone the repository to your local machine:
```js
git clone https://github.com/LinaSafina/open-media-player.git
```

Then, you can install the dependencies using either npm or yarn:
```js
npm install
```
or
```js
yarn install
```
Once the dependencies are installed, you can start the development server using:
```js
npm start
```
or
```js
yarn start
```
The development server will be available at http://localhost:9000/.

### Main Page
The page itself is a normal *html* page with *css* styles. It is implemented without using *React*. It renders correctly even if *js* execution is not allowed on the page.
In the “*Technical requirements*” section, switching tabs (tabs) by clicking on them was implemented. If *js* execution is disabled, then the first tab is active.

### Form and Audio Player
- The link input form and player are done with *React*.
- The form contains a field for entering a link in the format “*https://*”. If user enters the link incorrectly, an error will be displayed.
- Upon successful input, the form will be hidden and the player will be displayed with the audio source from the link in the same place.
- When buffering an audio stream, the loader is displayed as a running line.
- The player itself is implemented using the *<audio/>* browser tag. The progress in seconds and the volume control are displayed and the ability to change the playback progress is included.
- By clicking on the “*Back*” button, the user can return to the link input form.

#### Test sounds
The following links can be used in order to check the app:
- [https://lalalai.s3.us-west-2.amazonaws.com/media/split/a7564eb8-cbf2-40e2-9cb8-6061d8d055a7/no_vocals](https://lalalai.s3.us-west-2.amazonaws.com/media/split/a7564eb8-cbf2-40e2-9cb8-6061d8d055a7/no_vocals)
- [https://c5.radioboss.fm:18084/stream](https://c5.radioboss.fm:18084/stream)

### Technologies Used
The project was built using the following technologies:

- ES6
- Scss
- React 18, ContextAPI
- Webpack

### Contributing
If you'd like to contribute to the project, please fork the repository and create a new branch for your changes. Once you've made your changes, submit a pull request and we'll review your changes.

