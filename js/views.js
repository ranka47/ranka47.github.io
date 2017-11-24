menuToHTML = {
    "home": "",
    "about": "about",
    "projects": "projects",
    "CV": "CV",
    "links": "links"
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
}