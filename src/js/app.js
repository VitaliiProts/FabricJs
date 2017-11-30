var canvas  = new fabric.Canvas("canvas");

fabric.Image.fromURL("images/image.png", function (img) {
    // img.setWidth(200);
    // img.setHeight(200);
    img.filters.push(new fabric.Image.filters.Sepia());
    canvas.add(img);
});

// save image

$("#btnSave").click(function () {
    $("#canvas").get(0).toBlob(function (blob) {
        saveAs(blob, "myImg.png");
    });
});

