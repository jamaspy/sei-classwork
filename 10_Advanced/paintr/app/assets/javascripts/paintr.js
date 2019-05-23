$(document).ready(( ) => {


    $("#add-color").on("click", () => {
        const color = $("#color").val();
        const $swatch = $("<div />").addClass("swatch").css("background-color", color);
        $swatch.appendTo(".palette");
        
    })

    $(".palette").on("click", '.swatch', function (){
        $(".selected").removeClass('selected');
        $(this).addClass('selected');
    });

    $(".canvas").on("mouseover", ".pixel", function () {
        if (event.shiftKey === false){
            return;
        }
        const color = $('.swatch.selected').css("background-color");
        $(this).css("background-color", color);
    })


})