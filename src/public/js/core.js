$(document).ready(function() {
    // Array de don alfredo
    carreto = [
        ["Asus VivoPC VM42-S255Z", 2, 345.59, false],
        ["HTC Vive Deluxe Audio Strap", 3, 119.50, true],
        ["Office 365", 10, 69.95, false],
        ["Windows Server 2012 R2", 2, 1582.6, true],
        ["Lenovo Legion Y520", 3, 799, false],
        ["Gafas xavier", 4, 100, true],
        ["camisateas Jordi", 6, 300, true]
    ]


    $('.btn-sm').css('margin', '5px')
    console.log("It works")

    $('.btn-danger').click(function(e) {
        alert("El color rojo es del peligro")
    })
    $('.btn-success').click(function(e) {
        alert("El color verde es de la vida")
    })
    $('.btn-info').click(function(e) {
        alert("El color celeste es para informar")
    })
    $('.btn-primary').click(function(e) {
        alert("El color azul es el generico")
    })

    $("#envia").click(function(e) {
        var content = $("#text").val()
        var color = $("#color").val()
        console.log(content + "-" + color)

        $("#botones").append(content).css("color", color)
    })
    $("#enviaConsola").click(function(e) {
        var content = $("#console").val()
        console.log(content)
    })

    var elemento = $("#insert")

    var total = 0
    carreto.forEach(function(element) {
        // html = "<tr>"
        // var i = 0
        // var suma = 0
        // element.forEach(function(content) {


        //     if (typeof content == 'string') {
        //         if (i % 2 == 0 || i == 0) {
        //             console.log(content)
        //             html += "  <th scope=\"row\">" + content + "</th>"
        //         }

        //     }

        //     if (typeof content == 'number') {
        //         if (i % 2 == 0) {
        //             console.log(content)
        //             suma *= content
        //             html += "  <th>" + content + "</th>"

        //         }
        //     }
        //     if (typeof content == 'boolean') {
        //         html += "</tr>"
        //         total += suma
        //         $(elemento).append(html);
        //         html = ""
        //     }

        //     i++



        // })

        var i = 0
        html = "<tr>"
        var importe = 1

        element.forEach(function(content) {

            if (i == 0 && typeof content == 'string') {
                html += "  <th scope=\"row\">" + content + "</th>"
            }
            if (i % 2 == 0 && typeof content == 'number') {
                console.log(content)
                html += "  <th>" + content + "</th>"
                importe *= content
            } else if (i % 2 != 0 && typeof content == 'number') {
                html += "  <th>" + content + "</th>"
                importe *= content
            }

            i++
            if (i == element.length) {
                console.log("fin del array")
                if (!content) {

                    console.log("Array con false")
                    html = ""
                } else {
                    html += "<th>" + importe + "</th>"
                    html += "</tr>"
                    console.log(html)
                    $(elemento).append(html);
                    total += importe
                }

            }
        })
    })
    console.log("suma total" + total)
    $(elemento).append("<tr><th row=\"row\"><th>Import total</th><th>" + total + "€</th></th></tr>");


})