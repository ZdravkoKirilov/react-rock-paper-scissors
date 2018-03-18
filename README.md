# A Rock-Paper-Scissors game implementation with React

[Play the game](https://zdravkokirilov.github.io/react-rock-paper-scissors/)

## Description

Based on React and Material-UI, should be usable on phone - tablet - desktop device range. Works offline via service worker.
Redux is not used, because given the complexity of the task it feels like an overkill.

## Possible improvements

* multiplayer mode via web-sockets / webrtc
* best-of-x tournament mode
* extended weapon choice
* sophisticated animations / sound system
* given the above gets implemented: adding redux / snapshot testing

## How to run in local dev environment

```cmd
git clone https://github.com/ZdravkoKirilov/react-rock-paper-scissors.git
cd react-rock-paper-scissors
```

```javascript
npm install
npm start
```

The app will be served at localhost:3003

## How to run tests

```javascript
npm test
```