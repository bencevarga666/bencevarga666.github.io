---
title: 'Github GameOff 2019'
excerpt: 'GameOff is an annual game jam, organized by Github on itch.io. There was a month (from November 1st to December 1st) to completely design and implement a video game, from zero to hero. The theme was "Leaps and Boundaries", but it was free to interpret what is that means. '
coverImage: ''
date: '2020-01-18T15:35:07.322Z'
author:
  name: Bence Varga
  picture: '/assets/blog/authors/tim.jpeg'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

# GameOff 2019

GameOff is an annual game jam, organized by Github on itch.io. There was a month (from November 1st to December 1st) to completely design and implement a video game, from zero to hero. The theme was "Leaps and Boundaries", but it was free to interpret what is that means. 

# My Entry: Bitter Boundaries

## The Big Idea

A grid-based strategy game, where every tile represents a human settlement. The settlers of these settlements pay taxes, which can be used to improve the tile, so the settlement will become bigger with more settlers who pay more taxes and so on.

The money can be used to "purchase" a field from the enemy. This works the following way: if the player A have a settlement with greater population than the minimal, then player B has to decrease it with cash, of course. This mechanism only makes sense from the viewpoint of the gameplay.

A player wins, when they occupies every tile of the map.

## Technologies and Implementation

I used the Rust programming language to implement Bitter Boundaries, if you have no idea about it check its [official website](https://www.rust-lang.org). The main idea of Rust is safe memory handling without having a dynamic garbage collector, so also have a great performance. These things make it an appropriate solution for developers to implement a video game (or anything else, really).

Rust has a plenty of good game engines, like Amethyst, but I chose Quicksilver ([author's website](https://ryanisaacg.com/quicksilver/)), because it is a minimal 2D engine, so I could implement everything from ground up except from the really basics (sprites, basic input event handling and sounds, etc.).

I used two smaller crate, `image` and `rand`. `image` was needed to load and handle the sprites, and this way to extend the Quicksilver engine. `rand` is a generic collection for generating random numbers, which is handy when the computer player decision-making is somewhat randomly.

Thanks to Konstancia Szabó, I had have some hand-draw-style assets. These assets were made by [Krita](https://krita.org/), a really good (and improving) and also free (both as speech and beer) digital painting program.

![Bitter Boundaries gameplay](https://img.itch.zone/aW1hZ2UvNTI0ODIwLzI3NDIxODIucG5n/original/oC2HUv.png)

## Results, and Plans for Bitter Boundaries

Bitter Boundaries has been ranked at 58th from the 236 entries. It has got a rating of 3.125 / 5, which is slightly better than the average.

Bitter Boundaries is a free software (GPL-3.0) from the beginnings, and [its source code is on the Github](https://github.com/bencelaszlo/bitter-boundaries). It is also continuing to be [available on itch.io](https://bencelaszlo.itch.io/bitter-boundaries) for both Linux and Windows. I got new ideas during and after the GameOff 2019, and these will likely get implemented in 2020. There are issues regarding to the sounds, the camera and the computer player's behaviour, so I have opportunities for improvement, indeed.

Congratulations to all who participated!

[GameOff 2019 - Results](https://itch.io/jam/game-off-2019/results)
