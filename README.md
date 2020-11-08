# Gridsome X ThreeFold

- Any change to the content here should auto-deploy
- All changes to the content can be seen under this link

[./docs](./docs)


### to get started

- install npm & yarn

To install yarn on ubuntu,

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
apt-get -y update && apt install yarn
```
- git clone this repo
- go into the repo and run ```install_gridsome.sh``` if not done yet
- go into the repo and run ```install.sh``` which will make sure you have the node packages in your repo

### Where is all the content ?

- It is under the direcory [content/docs](content/docs)
- All files are markdown (.md) format

### Where are all the images ?

- Under the docs directory, every service has its own folder and own set of images
- To use an image for crystal twin, naviagte to crystal twin's folder and place the image as below,

```
![](./crystaltwin.png)

```
### Editing md files

- All files start with this piece of code, this is meant to control navigation into different sections defined in the sidebar menu.
```
---
description: ''
sidebar: 'docs'
prev: '/docs/wiki-publisher/'
next: '/docs/digitalme/'
---
```
## You want to go deeper ?

![https://docc-theme.netlify.app](https://docc-theme.netlify.app)


to install a new version of this

```
gridsome create threefold-now https://github.com/mrcrmn/docc
```

