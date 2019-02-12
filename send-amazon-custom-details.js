$(document).ready(function() {
    var s = ""
    $('tr').each(function() {
        var foundOne = false
        $(this).find('.a-list-item').each(function (index) {
            $(this).children().each(function() {
                s = s + " " + $(this)[0].innerText
                foundOne = true
            })
            s = s + "\n"
        })
        if (foundOne) {
            s = s + "\n"
        }
    })
    console.log("Customizations: " + s)
    
    var url = "https://afi7xf4m45.execute-api.us-east-1.amazonaws.com/default/mapAmazonHandmadeItems"
    var data = { customizations: s }
    var headers = {}
    headers["x-api-key"] = "VHhaUansy3ajP2ioLbP8m8eeAOrDPWqxa5Tp9Fqr"
    var settings = {
        //data: data,
        //success: successHandler,
        //error: errorHandler,
        //beforeSend: function(request) {
        //    request.setRequestHeader("x-api-key", "VHhaUansy3ajP2ioLbP8m8eeAOrDPWqxa5Tp9Fqr");
        //},
    }
    $.ajax({
        url: url, 
        headers: headers,
        method: 'POST',
        data: data,
    })
        .fail(function(e) {
            console.error( JSON.stringify(e) );
        })
})

function successHandler(data, textStatus, jqXHR) {
    console.log("Success Return Status: " + textStatus)
    console.log(data)
}

function errorHandler(jqXHR, textStatus, errorThrown) {
    console.error("Error Text Status: " + textStatus)
    console.error("Error Return Status: " + errorThrown)
}

