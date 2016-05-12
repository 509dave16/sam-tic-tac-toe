[Summary](#summary)

#SAM Tic Tac Toe

This is a Tic Tac Toe implementation using the [SAM](http://sam.js.org/ "SAM") pattern along with React, Redux, Firebase, and Webpack. It is based off of a SAM Redux sample implemented by [gunar](https://github.com/gunar/sam-redux "SAM Redux").

#Demo
###[Click here for Demo!](https://tic-tac-toe-redux-sam.firebaseapp.com "Demo")
#Summary
A Tic Tac Toe web app where you can play either locally in one browser window or online across two browser windows.

###Things To Do
- Have hosting players enter a name for the game to be hosted
- Allow players to see available sessions
- Add Flash Messages

#Usage

###1. Select a Game Mode
![Alt Text](http://s30.postimg.org/lvootrq5d/game_modes.png "Missing Image for Game Modes")
###2. Local Game
- Follow the **Game Status** which indicates if it is X's turn or O's turn
<br>
![Alt Text](http://s18.postimg.org/ix7hbbfsp/turn_game_status.png "Missing Image for Game Status")
- You can **Quit** from the **Game Mode** at any time during the game
<br>
![Alt Text](http://s8.postimg.org/6k2861ja9/quit_game_mode.png "Missing Image for Quit")
- You can also choose to **Restart** the game when finished
<br>
![Alt Text](http://s14.postimg.org/chndh9i8t/restart_game.png "Missing Image for Restart")

###3. Host Game
- Once this game mode has been selected you will have to wait for a player to join your game
<br>
**NOTE:** You will need to provide the **Session ID** to the player that is to join your game
<br>
![Alt Text](http://s8.postimg.org/4boi82t45/hosting_game.png "Missing Image for Hosting Game")
- Once a player has joined, the **Game Status** will indicates if it is X's turn or O's turn
<br>
![Alt Text](http://s18.postimg.org/ix7hbbfsp/turn_game_status.png "Missing Image for Game Status")
- You can **Quit** from the **Game Mode** at any time before or after the game has started
<br>
**NOTE:** This will quit the game for the other player as well
<br>
![Alt Text](http://s8.postimg.org/6k2861ja9/quit_game_mode.png "Missing Image for Quit")
- You can also choose to **Restart** the game when you are finished, being the **Host**
<br>
**NOTE:** This will restart the game for the other player as well
<br>
![Alt Text](http://s14.postimg.org/chndh9i8t/restart_game.png "Missing Image for Restart")

###4. Join Game
- Once this game mode has been selected, use a **Session ID** that has been provided by another player to join a game
<br>
**NOTE:** You must enter a valid **Session ID** otherwise you will receive an alert indicating that it was incorrect
<br>
![Alt Text](http://s22.postimg.org/4y5fyv2q9/joining_game.png "Missing Image for Joining Game")
- Once you have joined a game, the **Game Status** will indicates if it is X's turn or O's turn
<br>
![Alt Text](http://s18.postimg.org/ix7hbbfsp/turn_game_status.png "Missing Image for Game Status")
- You can **Quit** from the **Game Mode** at any time once the game has started
<br>
**NOTE:** This will quit the game for the other player as well
<br>
![Alt Text](http://s8.postimg.org/6k2861ja9/quit_game_mode.png "Missing Image for Quit")

#Understanding SAM

![Alt Text](http://cdn.infoq.com/statics_s1_20160414-0116/resource/articles/no-more-mvc-frameworks/en/resources/fig6.jpg "SAM Meta Model")

##Awareness expressed by Actions, Model, Next Action Predicates, State, and State Representation
|Knows/Of|Action|Model|NAP|State|State Rep|
|:---|:---|:---|:---|:---|:---|
|Action| |present()|N/A|N/A|N/A|
|Model|N/A| |N/A|\<state\>()s & render|N/A|
|NAP|\<action\>()s|values & present()| |\<state\>()s|N/A|
|State|N/A|values|N/A| |N/A|
|State Rep.|\<action\>()s|values|N/A|\<state\>()s|

##Terms
- Action: Business Logic initiated by the View(State Representation) or NAP that can perform side effects as part of computing the dataset that is to be presented as an 'intent' to the Model.
- Model: Holds the Application Model and is responsible for mutating itself based on it's current values, the Control State, and the presented dataset.
- State(Control State): Indicates the current context of the Application. Is responsible for rendering State Representation and initiating NAPs with Model values, as well as mapping Actions to State Rep.
- NAP: Next Action Predicates are triggered based on the Control State and current Model Values given.
- State Representation: Given Model Values and Actions based on the Control State, it should render a View that can initiate only 'allowable' Actions.
