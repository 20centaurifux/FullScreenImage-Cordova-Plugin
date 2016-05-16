var FullScreenImage =
{
  showImageBase64: function(onSuccess, onError, opts)
  {
    var w = window.open("", "Image", "toolbar=no, status=no, menu=no");

    w.document.open();
    w.document.write('<html><body><img src="data:image/' + opts[0].type + ';base64,' + opts[0].base64 + '" alt=""></body></html>');
    w.document.close();
  }
};

module.exports = FullScreenImage;

require("cordova/exec/proxy").add("FullScreenImage", FullScreenImage);
