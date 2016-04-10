///////////////////
// PLUGIN TRELLO //
///////////////////

//
// Authentification
//

var cards = null;
var lists = null;
var cardsSet = false;
var listsSet = false;


//Erreur d'une commande
var error = function(errorMsg) {
    console.log("Failed command");
};

//Succes de la commande get lists
var successGetLists = function(succesMsg) {
	console.log("Successful command");
	lists = succesMsg;
	listsSet = true;
	setTrello();
};

//Succes de la commande get cards
var successGetCards = function(succesMsg) {
	console.log("Successful command");
	cards = succesMsg;
	cardsSet = true;
	setTrello();
};	

//Succes de l'authentification
var authenticationSuccess = function() {
    console.log("Successful authentication");
	
	//get lists
	Trello.get('/boards/'+getSettings(2)+'/lists', successGetLists, error);
	
	//get cards
	Trello.get('/boards/'+getSettings(2)+'/cards', successGetCards, error);
		
};


//Erreur de l'authentification
var authenticationFailure = function() {
    console.log("Failed authentication");
};


//Autorisation
Trello.authorize({
    type: "popup",
    name: "Dronolab Trello integration",
    scope: {
        read: true,
        write: true
    },
    expiration: "never",
    success: authenticationSuccess,
    error: authenticationFailure
});




//
// Get all cards from the todo list
//
/*
var successGetTodoList = function(data) {
    console.log(data);

    // Loop through cards
    for(var i = 0; i < data.length; i++) {

        // Data preparation



        // View rendering
        //var output = Mustache.render(template, data.messages[index]);
        //$('#plugin-slack').append(output);
    }

};*/

/*var errorGetTodoList = function(data) {
    console.error(data);
};*/

//Trello.get("/lists/../cards", successGetTodoList, errorGetTodoList);

//Affichier trello
function setTrello(){
	if (cardsSet && listsSet){
		//Afficher trello
	}
	
	
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get all cards from the done list


// obtenue avec Trello.get('/member/me/boards', success, error);


// Trello.get('boards/../lists', success, error);

// Cartes de la liste "To do"
//Trello.get("/lists/../cards", success, error);

// Get une checklist précise grâce à son id
// Trello.get("/checklist/..", success, error);

// Cartes de la liste "Done"
//Trello.get("/lists/../cards", success, error);
