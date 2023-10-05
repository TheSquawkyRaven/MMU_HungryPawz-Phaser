# MMU_HungryPawz-Phaser
https://www.youtube.com/watch?v=z-OJuVfIRps

# Game Physics Phaser Project
### FACULTY OF COMPUTING AND INFORMATICS

### TGD2251 Game Physics

### TRIMESTER 2 2022/23

Game Name: **Hungry Pawz**

For: **Dr. Wong Ya Ping**

Created By:
|||
|--|--|
|Student ID|1191101213|
|Name|Raven Lim Zhe Xuan|
|Email Address|1191101213@student.mmu.edu.my|
|Phone No.|01155873318|

Github Link in case this md file is not rendering properly: https://github.com/TheSorrowRaven/game-physics-phaser-assignment/blob/main/README.md

# Introduction
Hungry Pawz is a survival game with multiple endings. The game follows the journey of a group of 3 cats. Winter is coming, and there is no food in their storage. The player takes the role of one of the cats, and explores the surroundings to obtain food and store it back in the storage safely. However, there are many dangers around, and getting hurt too much makes them lose their lives. And time is unforgiving, if winter approaches, some of the cats may starve to death.

# Documentation

### World
The game is set in a cyberpunk world - in a dystopian futuristic city. A group of 3 cats has taken over a comfy area below the city. The area however, does not have a suitable source of food because the city has already been abandoned. What’s more, winter is going to fall upon them, and it’ll be very cold, which is not a suitable time to look for food. The cats are forced to scavenge and collect food into a storage so that they have enough food to survive winter.

From the sewers, an underground farm, to a retail section of the city, the player can explore the city with the feline agility of a cat, including the ability to wall jump and grab onto walls so they don’t fall.

There are plenty of tunnels in the underground of the city. It forms into a maze, and they may not be able to climb back up if the cats fall down a hole. There are always different routes to different areas of the underground.

### Theme
The game is a survival game. If a cat dies, it is dead for the game. There is no respawning, unless the game is restarted. Each cat has 3 lives, and all of them have the same abilities. The cats can wall jump, collect food from trash or bins, and won’t take fall damage. There are many hazards in the world, including debris that formed into sharp objects like spikes. But the riskier the place is, the more chance it contains more food because other animals would not be able to go past the spikes.

### Objective

The objective of the game is to retrieve enough food for the surviving cats. Each cat requires 200 units of food to survive winter, and that is 600 food initially. If one of the cats dies, the objective is changed to fit the number of cats. For example, 2 surviving cats only require 400 units of food in total. Even though the objective is made simpler when more cats die, the ending of the game will be in a worse and sadder state. Also, a 15 minute timer representing the time left until winter strikes is shown on the screen to give the player a sense of urgency. Risks have to be taken and there isn't much time to consider another approach to certain dangers. If the timer runs down, there will be a different ending depending on how much food is stored in the storage.  

### Ending
There are a total of 10 endings. Each of them depends on 2 factors - how many cats survived in the game, and how much food has been stored. The best ending is Ending 1, where all cats survive, and all of them have enough food to not starve. The worst is Ending 10, where all of the cats died in the game. Surviving in the game doesn’t necessarily mean that the cats can survive the winter. If there is not enough food, one or all of them can die during winter.

### Misc
There is a title screen with a background and the title of the game. Besides that the ending screen also has a separate background with the text to explain the ending the player gets.

The game level is made using Tiled. Phaser internally supports importing data from Tiled, so it is used to create the level design of the game.

Almost all of the sprites and sprite sheets are gotten online from Itch.io. The audio too, were all gotten from OpenGameArt.

# User Manual/Instructions
### Controls
The player can control the cat with WASD. A and D are for moving into the left and right directions respectively. W is for jumping.

F is to interact with the food containers that sparkle in the world. There will be a prompt to press F to take the food.

Shift is used to grab on to the walls when the player is floating, and is moving towards a wall.

### Tips

The player can jump if they are on the ground. After jumping, the player can move towards a wall, and press jump again to wall jump. The player can wall jump infinitely. If the player chooses not to wall jump, the player will slide against the wall, which is slower than just falling without a wall to support.

While the player is facing a wall and moving towards it, the player can also hold Shift to grab onto the wall. The player will then stick in place on the wall. However, grabbing onto walls consumes stamina. Once the player runs out of stamina, they will start to slide down against the wall.

Although not required to fully explore the game, hitting a spike provides the player with a knockback. This knockback can be used as a boost, because it launches the player at a high velocity. However, this is not recommended and needs to be used carefully to prevent the player from dying.

Another tip is that the world has more than enough food for 3 cats (600 units of food). So fully exploring the game is not necessary to get the best ending of the game.

# Screenshots
![Title](https://imgur.com/rSrpyz8.png)
Title screen of the game

![Home](https://i.imgur.com/pQtNYwA.png)
The home of the cats. The storage is on the right of the cat

![Surface](https://i.imgur.com/mmTZPhZ.png)
Surface of the game. With an almost clear view of the city background

![Cafe](https://i.imgur.com/oXt0bW9.png)
A cafe beside a hotel on the surface of the city

![Farm](https://i.imgur.com/ejXY1tZ.png)
Multi-layered underground farm with some berries

![Sewers](https://i.imgur.com/vXJSVGt.png)
The sewers deep underground the map, that is connected to other sections of the map

![Storage](https://i.imgur.com/8rzSDhO.png)
A dangerous storage area of map

![Ending](https://i.imgur.com/8umMG8J.png)
The ending screen with Ending 1

# Link to Demo
Video Demo (Youtube): https://www.youtube.com/watch?v=LLMWQDm_uH8

Video Demo Link (Google Drive): https://drive.google.com/file/d/1F4QZLundvQXq9J6LG9HaBx_C1CAClHfz/view?usp=share_link

The Google Drive link is directly linked to the submission VideoDemo folder. The Youtube link is just a previous upload as a backup.

# Acknowledgement
I’d like to thank Dr. Wong Ya Ping for teaching this subject as well as Phaser.

Also, I'd also like to thank to the Phaser team for making Phaser.

Finally, I’d also like to thank myself, Raven, for seeing through to the end of this project.

# References

### Gameplay Reference
Celeste https://www.celestegame.com Maddy Makes Games, Extremely OK Games, Ltd

(I played this game years ago, but some of the mechanics are inspired from this game)

### Asset References

#### Images & Sprites

Free - Action Pack - CITY https://anokolisa.itch.io/action Anokolisa

Complete GUI Essential Pack https://crusenho.itch.io/complete-gui-essential-pack Crusenho

Neon City Pixel Art Asset https://coloritmic.itch.io/neoncityasset Colorithmic

FREE- Sidescroller Shooter - Central City https://anokolisa.itch.io/sidescroller-shooter-central-city Anokolisa

Oak Woods — Environment Asset https://brullov.itch.io/oak-woods brullov

Cat 50+ animations https://bowpixel.itch.io/cat-50-animations Bow.Pixel

Free Cyberpunk Backgrounds Pixel Art https://free-game-assets.itch.io/free-scrolling-city-backgrounds-pixel-art Free and Premium Game Assets (GUI, Sprite, Tilesets)

TILESET_FUTURISTIC_CITY_BY_TILESET_FUTURISTIC_CITY https://cubic-tree-graphics.itch.io/tileset-futuristic-city-by-tileset-futuristic-city-by-cubic-tree-graphics Cubic Tree - Graphics

#### Audio
Meow https://opengameart.org/content/meow IgnasD

Kitten Mew https://opengameart.org/content/kitten-mew AntumDeluge

Meowing Cat Made in LabChirp https://opengameart.org/content/meowing-cat-made-in-labchirp Traceletz

Johnny Tal - Cool strolling Cat https://opengameart.org/content/johnny-tal-cool-strolling-cat johnnytal

8-BIT Jump #1 https://opengameart.org/content/8-bit-jump-1 jalastram
