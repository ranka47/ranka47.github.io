menuToHTML = {
    "home": "",
    "about": "about",
    "projects": "projects",
    "CV": "CV",
    "links": "links",
    "talks": "talks",
    "contact": "contact"
}

function load(that){
    if(menuToHTML[that.innerText.trim()]){
        $.ajax({
            url: "./pages/" + menuToHTML[that.innerText.trim()] + ".html", 
            context: document.body,
            success: function(response) {
                $("#details").html(response);
            }
        });   
    }
    else{
        $.ajax({
            url: ".", 
            context: document.body,
            success: function(response) {
                $("html").html(response);
            }
        });     
    }
    showProjectList(that.innerText.trim())
}

var myIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    x[myIndex%x.length].style.display = "block";
    x[(myIndex+1)%x.length].style.display = "block";  
    setTimeout(carousel, 5000);
    myIndex = (myIndex+1)%x.length;
}

function showProjectList(pageType){
    if(pageType == "projects")
        document.getElementById("project-list").style.visibility = "visible";
    else
        document.getElementById("project-list").style.visibility = "hidden";
}