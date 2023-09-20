// document.querySelector("button").addEventListener("click",drum_click);
// function drum_click(){
//     alert("hillooooo");
// }
// for above kind of use we use anonymous functions(they dont have name) instead calling a normal function.
//document.querySelector("button").addEventListener("click",function(){alert("hello");});
// we did not used button in query selector bcz if we add another buttons apart from drums it will count them also. so drum is more specific
// use to "this" is bascically identity of the button that is triggered.
for(var i=0; i<document.querySelectorAll(".drum").length ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // 
        var buttonName = this.innerHTML;
        switch (buttonName) {
            case "f":
                var audio= new Audio("sounds/crash.mp3");
                audio.play();
                break;
            
            case "r":
                var audio= new Audio("sounds/snare.mp3");
                audio.play();
                break;
            
            case "n":
                var audio= new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            
            case "t":
                var audio= new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            
            case "e":
                var audio= new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            
            case "n":
                var audio= new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

            case "d":
                var audio= new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

            default:
                break;
        }

});

}

