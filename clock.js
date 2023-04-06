function currentTime(){

    //I am using "new Date" method to get current time..
    let now = new Date();

    //Here I use ".getHours" method to getting current hours.. 
    let hours = now.getHours();
    hours = (hours<10) ? "0"+hours : hours; // Here I use a condition by ternay method..


    //Here I use ".getMinutes" method to getting current minutes..
    let minutes = now.getMinutes();
    minutes = (minutes<10) ? "0"+minutes : minutes; // Here I use a condition by ternay method..

    //Here I use ".getSeconds" method to getting current seconds..
    let seconds = now.getSeconds();
    seconds = (seconds<10) ? "0"+seconds : seconds;

    let timeString = hours + ":" + minutes + ":" + seconds; //Here's the "timeString" use for time formatting purpose.. ex:- hh:min:sec

    document.getElementById("clock").innerHTML = timeString; // Here I use Dom Manipulation method for showing my clock in web page.


}

setInterval(currentTime, 1000); // Here I use "setInterval()" method for recall the function every second...

currentTime();