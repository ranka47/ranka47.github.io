function load(that){
$.ajax({
    url: "./pages/about.html", 
    context: document.body,
    success: function(response) {
        $("#details").html(response);
    }
});
}