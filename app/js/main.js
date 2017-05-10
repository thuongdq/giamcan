$('#bmi').on('click', function() {
    height = $('#bmi-height').val();
    weight = $('#bmi-weight').val();
    if (!$.isNumeric(height) || height > 300) {
        $('#bmi-height').addClass("error-input");
    } else {
        $('#bmi-height').removeClass("error-input");
    }

    if (!$.isNumeric(weight) || weight > 300) {
        $('#bmi-weight').addClass("error-input");
    } else {
        $('#bmi-weight').removeClass("error-input");
    }

    if ($.isNumeric(weight) && $.isNumeric(height)) {
        bmi = weight / ((height / 100) * (height / 100));
        info = "";
        info += "Chiều cao: " + height + " cm<br>";
        info += "Cân nặng: " + weight + " kg<br>";
        info += "Chỉ số BMI: " + Math.round(bmi) + "<br>";
        info += "Tình trạng hiện tại của bạn là :<b>";
        if (bmi < 18.5) {
            info += "Dưới chuẩn";
        }

        if (bmi < 18.5) {
            info += "Dưới chuẩn";
        }

        if (bmi >= 18.5 && bmi < 25) {
            info += "Chuẩn";
        }

        if (bmi >= 25 && bmi < 30) {
            info += "Thừa cân";
        }

        if (bmi >= 30 && bmi < 40) {
            info += "Béo";
        }

        if (bmi > 40) {
            info += "Rất béo";
        }
        info += "</b>";
        $('#myModal').modal();
        $('#myModal').find(".modal-title").html("Kết quả chỉ số BMI của bạn");
        $('#myModal').find(".modal-body").html(info);
    }
});