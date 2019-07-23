$(document).ready(function () {
    let date = new Date();
    let m = new Date();

    if(date.getDay()) {
        m.setDate(date.getDate() + 8 - date.getDay());
    } else {
        m.setDate(date.getDate() + 1);
    }

    const getFormat = (rawData) => {
        if (rawData < 10) {
            return '0' + rawData;
        } else {
            return rawData;
        }
    };

    $("#closestMonday").text(`${getFormat(m.getDate())}.${getFormat(m.getMonth() + 1)}.${m.getFullYear()}`);

});




