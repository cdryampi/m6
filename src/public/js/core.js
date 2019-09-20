$(document).ready(function() {
    $('.btn-sm').css('margin', '5px')
    console.log("It works")

    $('.btn-danger').click(function(e) {
        alert("El color rojo es del peligro")
    });
    $('.btn-success').click(function(e) {
        alert("El color verde es de la vida")
    });
    $('.btn-info').click(function(e) {
        alert("El color celeste es para informar")
    });
    $('.btn-primary').click(function(e) {
        alert("El color azul es el generico")
    });

    $("#envia").click(function(e) {
        var content = $("#text").val()
        var color = $("#color").val()
        console.log(content + "-" + color)

        $("#botones").append(content).css("color", color)





    });
})