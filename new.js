var selected_image;
var selected_price;

$(document).ready(function (e) {
    console.log("sadasd")
    $(".mens").click(function (e) {
        console.log("asdasdasd")
        $.ajax({
            url: "new_men.html",
            method: "GET",
            success: function (data) {
                $(".main_photo").html(data)
            }


        })
    })
    $(".yuxari").click(function (e) {
        console.log("asdasdasd")
        $.ajax({
            url: "esas.html",
            method: "GET",
            success: function (data) {
                $(".main_photo").html(data)
            }


        })
    })
    $(".homec").click(function (e) {
        console.log("asdasdasd")
        $.ajax({
            url: "esas.html",
            method: "GET",
            success: function (data) {
                $(".main_photo").html(data)
            }


        })
    })
    $(".womensa").click(function (e) {
        console.log("asdasdasd")
        $.ajax({
            url: "new_women.html",
            method: "GET",
            success: function (data) {
                $(".main_photo").html(data)
            }


        })
    })
    $(".babys").click(function (e) {
        console.log("asdasdasd")
        $.ajax({
            url: "new_baby.html",
            method: "GET",
            success: function (data) {
                $(".main_photo").html(data)
            }


        })
    })
    $(".sports").click(function (e) {
        console.log("asdasdasd")
        $.ajax({
            url: "new_sport.html",
            method: "GET",
            success: function (data) {
                $(".main_photo").html(data)
            }


        })
    })
    $(".contacts").click(function (e) {
        console.log("asdasdasd")
        $.ajax({
            url: "new_contact.html",
            method: "GET",
            success: function (data) {
                $(".main_photo").html(data)
            }


        })
    })

    // detail page shopping
    $(document).on("click",".icon", function(e) {
        // console.log(this);
        var product = $(this).parent();
        selected_image = product.find("img").attr("src");
        selected_price = product.find("h3").text();
        $.ajax({
            url: "detail.html",
            method: "GET",
            success: function (data) {
                $(".main_photo").html(data);
                $(".main_image").attr("src", selected_image);
                $(".main_price").text(selected_price);
            }
        })
    });
})