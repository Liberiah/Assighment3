
var LastElement = {}
var CurrentElement = {};

function ToggleHighlight() {
    var current = $(CurrentElement);
    var last = $(LastElement);

    var currentClass = $(CurrentElement).attr("class");
    var lastClass = $(LastElement).attr("class");
    console.log("last class:" + lastClass + " current class:" + currentClass);

    
        last.removeClass(lastClass);//clears previous cell
        current.addClass(lastClass);//moves last cell to new cell clicked

        current.removeClass("cell");//removes cell class, # still exists
        current.addClass("highlighted-cell");//changes current to highlighted class, # still in cell
        last.removeClass("highlighted-cell");//removes highlight from last cell
        last.addClass("cell");//changes last cell to cell class (no highlight).
    
}
    
    /* 
    if (currentClass = lastClass) {
     console.log("2last class:" + lastClass + " 2current class:" + currentClass);

     current.addClass(lastClass);
     last.addClass(currentClass);
 }

 if (currentClass != lastClass) {

     current.addClass(lastClass);
     last.removeClass(lastClass);
     
     console.log(lastClass);
     console.log(currentClass);
     console.log("I'm in else");
 }
 }


    if (current.attr("class") == "cell piece black")
    {
        console.log("black piece!");
        console.log(currentClass);   
    }
    if (current.attr("class") == "cell piece red")
    {
        console.log("red piece!");     
    }
    
    
}*/


   
    $(document).ready(function ()
    {

        var cells = $(".cell");
        var colorCount = 0;

        for (var i = 0; i < cells.length; i++)
        {
            var cell = $(cells[i]);
            var isDark = colorCount % 2 == 0;
            var isNextRow = (i + 1) % 8 == 0;
            colorCount += isNextRow ? 2 : 1;
            cell.css("background-color", isDark ? "navy" : "white");
        }

  

        $(".cell").click(function () 
        { 
            CurrentElement = this;
            ToggleHighlight();
            LastElement = this;//makes sure highlight is removed from lastElement
        });
    });