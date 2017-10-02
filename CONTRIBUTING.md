# Contributing

## What do I need to know to help?

If you are looking to help to with a code contribution our project uses Node (with ES6 features). If you don't feel ready to make a code contribution yet, no problem! A great place to start is making sure with any holes in [the documentation](https://github.com/sjones6/funcatron-docs) or adding to the examples.

Checkout the [current projects](https://github.com/sjones6/funcatron/projects) to see what features need developed or are in progress.

## Never made an open source contribution before? Wondering how contributions work in the in our project? Here's a quick rundown!

* Find an issue that you are interested in addressing or a feature that you would like to add.
* Fork the repository associated with the issue to your local GitHub organization. This means that you will have a copy of the repository under `your-GitHub-username/repository-name`.
* Clone the repository to your local machine using `git clone https://github.com/sjones6/funcatron.git`.
* Create a new branch for your fix using `git checkout -b branch-name-here`.
* Make the appropriate changes for the issue you are trying to address or the feature that you want to add.
* Use `git add insert-paths-of-changed-files-here` to add the file contents of the changed files to the "snapshot" git uses to manage the state of the project, also known as the index.
* Use `git commit -m "Insert a short message of the changes made here"` to store the contents of the index with a descriptive message.
* Push the changes to the remote repository using `git push origin branch-name-here`.
* Submit a pull request to the main Funcatron repository. When you navigate to your forked branch in your Github profile, Github will usually prompt you if you have a branch with differences. But you can always navigate [here](https://github.com/sjones6/funcatron/pulls) to submit one as well.
* Title the pull request with a short description of the changes made and the issue or bug number associated with your change. For example, you can title an issue like so "Added more log outputting to resolve #4352".
* In the description of the pull request, explain the changes that you made, any issues you think exist with the pull request you made, and any questions you have for the maintainer. It's OK if your pull request is not perfect (no pull request is), the reviewer will be able to help you fix any problems and improve it!
* Wait for the pull request to be reviewed by a maintainer and approved.
* Make changes to the pull request if the reviewing maintainer recommends them.
* Celebrate your success after your pull request is merged!

## What does the [Code of Conduct](https://github.com/sjones6/funcatron/blob/master/CODE_OF_CONDUCT.md) mean for me?

Our [Code of Conduct](https://github.com/sjones6/funcatron/blob/master/CODE_OF_CONDUCT.md) means that you are responsible for treating everyone on the project with respect and courtesy regardless of their identity. If you are the victim of any inappropriate behavior or comments as described in our Code of Conduct, we are here for you and will do the best to ensure that the abuser is reprimanded appropriately, per our code.

## Developing Funcatron

A couple developer tools are setup to make the work easier:

* Watch files for changes, run tests, and restart the example project: `node watcher.js` 
* run tests with mocha: `npm test`
* For VS Code users: there's a few launch scripts bundled

