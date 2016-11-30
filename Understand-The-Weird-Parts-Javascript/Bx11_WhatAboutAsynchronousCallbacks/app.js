// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {}
    console.log('finished function');
}


// listen for the click event
document.getElementsByTagName("body")[0].addEventListener('click', function() {

    var a = document.createElement("p");
    var t = document.createTextNode("The nightman cometh");

    console.log('click event!');

    a.appendChild(t);
    document.body.appendChild(a);
});


waitThreeSeconds();
console.log('finished execution');
