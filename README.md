# NZK Drawing Tool :art:

This is a free drawing tool using [Fabric.js](http://fabricjs.com/) and inspired by [react-sketch](https://www.npmjs.com/package/react-sketch).

View the repo on [Github](https://github.com/WonkyStar/nzk-drawing-tool).

### Features

- free drawing
- colour selection
- brush width slider
- opacity slider
- eraser (multiple widths)
- undo/redo/clear
- stickers (forthcoming)

Run the example on port 3000 with `yarn start` or load storybook with `yarn run storybook`.

### Contributing

Run `npm run transpile` after making changes to update `dist` with the latest transpiled code. 

Commit result and then update the package version using `npm version major/minor/patch` (choose one of the three). You will have to be logged in for this, so make sure you have an account and `npm login` if need be.

When your console shows the latest package number publish to npm using `npm publish`.

Don't forget to update the package version in the `package.json` of any repo it's being used in. 
