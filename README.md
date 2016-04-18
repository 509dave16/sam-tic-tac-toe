#SAM Tic Tac Toe

This is a Tic Tac Toe implementation using the SAM. It based off of a Sam Redux sample implemented by [gunar](https://github.com/gunar/sam-redux "SAM Redux").

#Understanding SAM

![Alt Text](http://cdn.infoq.com/statics_s1_20160414-0116/resource/articles/no-more-mvc-frameworks/en/resources/fig6.jpg "SAM Meta Model")

##Knowledge expressed by Actions, Model, Next Action Predicates, State, and State Representation
|Knows/Of|Action|Model|NAP|State|State Rep|
|:---|:---|:---|:---|:---|:---|
|Action| |present()|N/A|N/A|N/A|
|Model|N/A| |N/A|\<state\>()s & render|N/A|
|NAP|\<action\>()s|values & present()| |\<state\>()s|N/A|
|State|Mapping \<action\>()s|values & present()|Yes| |Yes|
|State Rep.|Given \<action\>()s|Given values|N/A|Given indicators|

##Terms
- Action: An intent initiated by the View(State Representation) that can perform side effects as part of computing the dataset that is to be presented to the Model.
- Model: Holds the Application State and is responsible for mutating itself based on it's current values, Control State, and the presented dataset.
- State(Control State): Indicates the current context of the Application. Is responsible for rendering State Representation and initiating NAPs with Model values, as well as mapping Actions to State Rep.
- NAP: Next Action Predicates are triggered based on the Control State and current Model Values given.
- State Representation: Given Model values and computed values and Actions based on the Control State, it should render a View that can initiate only 'allowable' Actions.