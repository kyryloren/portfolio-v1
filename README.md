<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Logo" src="https://i.imgur.com/4ybBd3Q.png" width="100" />
  </a>
</p>
<h1 align="center">
  kyryloorlov.com - v1
</h1>
<p align="center">
  The first version of my personal website, built with <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a> and hosted with <a href="https://firebase.google.com" target="_blank">Firebase</a>.
</p>

![hero](https://i.imgur.com/LGFjKnu.png)

## 🚀 Installing

1.  Install the gatsby CLI

    ```shell
    npm i -g gatsby-cli
    ```

2. Clone the repository and change directories

    ```shell
    git clone https://github.com/kyryloren/portfolio-v1
    cd portfolio-v1
    ```

3. Install dependencies
    ```shell
    npm install
    ```
4. Start the local server
    ```shell
    gatsby develop #for local dev
    gatsby build && gatsby serve # for production
    ```

1.  **Open the source code and start editing!**

    The site is now running at `http://localhost:8000`!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

```sh
  .
  ├── node_modules # modules
  ├── src # source folder
      └── components # main components
          ├── head.js # SEO and meta tags that go in the head
          ├── layout.js # layout file
          ├── index.js
          └── common
              ├── avatar.js # the avatar in the hero
              ├── ExternalLink.js # components handling any external links
          └── sections
              ├── hero.js # style and lay out the content for index page
      └── images
      └── pages
          ├── index.js
      └── styles # styled components styles
  ├── static # static content
  ├── .gitignore
  ├── .prettierrc
  ├── gatsby-config.js
  ├── LICENSE
  ├── package-lock.json
  ├── package.json
  └── README.md
 ```
