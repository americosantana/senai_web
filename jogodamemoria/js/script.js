(function(){
    startGame();
    function startGame(){
        for(var i = 0; i < 16; i++){
            var card =  document.querySelector("#card" + i);
            console.log(card);
        }

    }
}());