
# SAM Tic Tac Toe

This is a Tic Tac Toe client that depends upon a [package](https://www.npmjs.com/package/tic-tac-toe-engine "tic-tac-toe-engine") I wrote that implements the [SAM](http://sam.js.org/ "SAM") pattern. This client was developed utilizing React, Redux, Firebase, and Webpack. It is based off of a SAM Redux sample implemented by [gunar](https://github.com/gunar/sam-redux "SAM Redux").

# Table Of Contents
- [Demo](#demo)
- [Summary](#summary)
- [Additional Enhancements](#additional-enhancements)
- [Usage](#usage)

# Demo
### [Click here for Demo!](https://tic-tac-toe-redux-sam.firebaseapp.com)
# Summary
A Tic Tac Toe web app where you can play either locally in one browser window or online across two browser windows.

### Additional Enhancements
- Have hosting players enter a name for the game to be hosted
- Allow players to see available sessions
- Add Flash Messages

# Usage

### 1. Select a Game Mode
![Alt Text](https://s30.postimg.org/lvootrq5d/game_modes.png)
### 2. Local Game
- Follow the **Game Status** which indicates if it is X's turn or O's turn
<br>
![Alt Text](https://s18.postimg.org/ix7hbbfsp/turn_game_status.png)
- You can **Quit** from the **Game Mode** at any time during the game
<br>
![Alt Text](https://s8.postimg.org/6k2861ja9/quit_game_mode.png)
- You can also choose to **Restart** the game when finished
<br>
![Alt Text](https://s14.postimg.org/chndh9i8t/restart_game.png)

### 3. Host Game
- Once this game mode has been selected you will have to wait for a player to join your game
<br>
**NOTE:** You will need to provide the **Session ID** to the player that is to join your game
<br>
![Alt Text](https://s8.postimg.org/4boi82t45/hosting_game.png)
- Once a player has joined, the **Game Status** will indicates if it is X's turn or O's turn
<br>
![Alt Text](https://s18.postimg.org/ix7hbbfsp/turn_game_status.png)
- You can **Quit** from the **Game Mode** at any time before or after the game has started
<br>
**NOTE:** This will quit the game for the other player as well
<br>
![Alt Text](https://s8.postimg.org/6k2861ja9/quit_game_mode.png)
- You can also choose to **Restart** the game when you are finished, being the **Host**
<br>
**NOTE:** This will restart the game for the other player as well
<br>
![Alt Text](https://s14.postimg.org/chndh9i8t/restart_game.png)

### 4. Join Game
- Once this game mode has been selected, use a **Session ID** that has been provided by another player to join a game
<br>
**NOTE:** You must enter a valid **Session ID** otherwise you will receive an alert indicating that it was incorrect
<br>
![Alt Text](https://s22.postimg.org/4y5fyv2q9/joining_game.png)
- Once you have joined a game, the **Game Status** will indicates if it is X's turn or O's turn
<br>
![Alt Text](https://s18.postimg.org/ix7hbbfsp/turn_game_status.png)
- You can **Quit** from the **Game Mode** at any time once the game has started
<br>
**NOTE:** This will quit the game for the other player as well
<br>
![Alt Text](https://s8.postimg.org/6k2861ja9/quit_game_mode.png)
