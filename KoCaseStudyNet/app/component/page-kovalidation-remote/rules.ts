import * as ko from "knockout";
import "knockout.validation";

ko.validation.rules['correctIdUser'] = {
    //async: true,
    validator: function (val, otherVal) {
        let isCorrect : boolean;
        var json = JSON.stringify({ idUser: val });
        $.when(
            $.ajax({
                url: '/api/RemoteValidatorApi/ValidateIdUser/' + val,
                dataType: "json",
                type: "post",
                contentType: 'application/json; charset=utf-8',
                data: json,
                async: true,
            })
        ).then(function (data, textStatus, jqXhr) {
            isCorrect = true;
        });
        return isCorrect === otherVal;         //if false error message would be shown
    },
    message: 'idUser must be lower then 1000'
};
ko.validation.registerExtenders();

ko.validation.rules['correctValueIdUser'] = {
    validator: function (val, otherVal) {
        var isUsed;
        var json = JSON.stringify({ idUser: val.idUser, value: val.value });
        $.when(
            $.ajax({
                url: '/validation/ValidateValueByIdUser',
                dataType: "json",
                type: "POST",
                contentType: 'application/json; charset=utf-8',
                data: json,
                async: false,
            })
        ).then(function (data, textStatus, jqXhr) {
            isUsed = (textStatus === 'success') ? data.IsUsed : null;
        });
        return isUsed === otherVal;
    },
    message: 'Value not correct'
};
ko.validation.registerExtenders();