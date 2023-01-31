$(function() {
    $("#addBtn").click(function() {
        var param = {zipcode: $('#add').val()}
        var send_url = "http://zipcloud.ibsnet.co.jp/api/search";

        $.ajax({
            type: "GET",
            cache: false,
            data: param,
            url: send_url,
            dataType: "json",
            success: function(res) {
                if(res.status == 200) {
                    var html = "";
                    for(var i = 0; i < res.results.length; i++) {
                        var result = res.results[i];
                        html += '<p class="add-text">' + result.address1 + result.address2 + result.address3 + '</p>';
                    }
                    $("#addIn").html(html);
                } else {
                    $("#addIn").html(res.message)
                }
            },
            error: function(XMLHttpRequest) {
                console.log(XMLHttpRequest);
            }
        });
    });
});