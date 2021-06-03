# Da Bomb!

## Intro

This is the Phaser 3 tutorial game ported to Kaios.

With many additions, alterations, customizations.

The game is very simple consists in moving between some platforms, collecting as many points as possible, avoiding the bombs.

## Home Page

[Home page is here.](https://michelangelo.altervista.org/dabomb/)

## Screen:

![menu](https://michelangelo.altervista.org/dabomb/assets/img/01.png)
![in game](https://michelangelo.altervista.org/dabomb/assets/img/02.png)
![scores](https://michelangelo.altervista.org/dabomb/assets/img/03.png)

## Template

An even more minimal template (showing only the animated logo) can be found here:

* [phaser3_kaios](https://github.com/micheg/phaser3_kaios)

It can be a good place to start, it already includes:

* Parcel
* Phaser III
* ES6

## Still Missing:

* KaiAds integration.
* Publication on the KaiOS store
* ~~A node script for zip automation. (For now npm uses bash, so it doesn't work on windows)~~

## Tested on:

* [Nokia 8110 4G](https://www.nokia.com/phones/it_it/support/nokia-8110-4g-user-guide)

## Build (tested on Linux and OSX)

    git clone https://github.com/micheg/phaser_tutorial_game
    npm install
    npm run dev (for testing)
    npm run build (for building)
    npm run deploy (require a KaiOS Phone and gdeploy)
    npm run make_zip

## Added

* A node script for making zip file.