function initialize() {
    console.log("Initializing...");
    $("#landing > h1").css("opacity", "0");
    $("#landing > h1").css("font-size", "0");
    $("#landing > h1").css("padding", "0");
    $("#landing > h1").css("margin", "0");
    $("#landing > input").css("opacity", "0");
    $("#landing > input").css("font-size", "0");
    $("#landing > input").css("padding", "0");
    $("#landing > input").css("margin", "0");
    $("#logo").css("height", "100vh");
    $("#logo").css("padding", "10%");
    $("#cyan").css("animation-iteration-count", "1");
    $("#magenta").css("animation-iteration-count", "1");
    $("#super").css("visibility", "visible");
    $("#super").css("bottom", "0");

    setTimeout(() => {$("#super").css("overflow-y", "scroll");}, 1200);
    
}