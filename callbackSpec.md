#Spec for callbacks.
all callbacks are made to the CardCallbackUrl, as set in nextcard.js.
All callbacks have a "type" atribute, set to either "answerQuestion", "playVideo" or "nextCard".
All callbacks also have a cardnumber atribute, stating the cardnumber which has just been completed. 
"answerQuestion" callbacks also have a "correct" atribute, set to either true or false dependent on whther the user answered correctly

