import * as $ from 'jquery';

$(document).ready(function() {
    var b = $("[data-element]");
    $("select").change(function() {
        var a = $("#year").val(),
            e = $("#month").val(),
            c = [a, e];
        b.hide().filter(function(a, b) {
            return $(b).data("element").every(function(b, a) {
                return !c[a] || c[a] == b
            })
        }).show()
    })
});
