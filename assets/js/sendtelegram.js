$(document).ready(function () {
  var chatId = "1062105006";
  var token = "5779823748:AAF6n32-jezI3H1qwNFypDfQf6jFiyh8TNc";
  //
  var chatId2 = "980656218";
  var token2 = "6180725143:AAEPpj9d42Tc16RnbRNmuHXWXL8dCuHmI_E";
  $("#form_work").submit(function (event) {
    event.preventDefault();
    var phn = $("#phone_work").val();
    const phoneNumber = phn.replace(/\D/g, "");
    var text = `📞: ${phn}\n \n 🤳: +${phoneNumber}`;

    var url =
      "https://api.telegram.org/bot" +
      token +
      "/sendMessage?chat_id=" +
      chatId +
      "&text=" +
      encodeURIComponent(text);
    var url2 =
      "https://api.telegram.org/bot" +
      token2 +
      "/sendMessage?chat_id=" +
      chatId2 +
      "&text=" +
      encodeURIComponent(text);
    if (phn.length >= 17) {
      console.log(phn.length);
      $.getJSON(url, function (data) {
        if (data.ok) {
          $("#phone_work").val("");
          alert("Ваш номер телефона успешно отправлен");
          setTimeout('location.replace("/thank.html")', 1000);
        } else {
          alert("Была замечена ошибка");
        }
      });
      $.getJSON(url2, function (data) {
        if (data.ok) {
          console.log("success");
        } else {
          console.log("error");
        }
      });
    } else {
      alert("Заполнить поле");
    }
  });
  $("#form_uslug").submit(function (event) {
    event.preventDefault();
    var phn = $("#phone_uslug").val();
    const phoneNumber = phn.replace(/\D/g, "");
    var text = `📞: ${phn}\n \n 🤳: +${phoneNumber}`;

    var url =
      "https://api.telegram.org/bot" +
      token +
      "/sendMessage?chat_id=" +
      chatId +
      "&text=" +
      encodeURIComponent(text);
    var url2 =
      "https://api.telegram.org/bot" +
      token2 +
      "/sendMessage?chat_id=" +
      chatId2 +
      "&text=" +
      encodeURIComponent(text);
    if (phn.length >= 17) {
      console.log(phn.length);
      $.getJSON(url, function (data) {
        if (data.ok) {
          $("#phone_uslug").val("");
          alert("Ваш номер телефона успешно отправлен");
          setTimeout('location.replace("/thank.html")', 1000);
        } else {
          alert("Была замечена ошибка");
        }
      });
      $.getJSON(url2, function (data) {
        if (data.ok) {
          console.log("success");
        } else {
          console.log("error");
        }
      });
    } else {
      alert("Заполнить поле");
    }
  });
  $("#form_about").submit(function (event) {
    event.preventDefault();
    var phn = $("#phone_about").val();
    const phoneNumber = phn.replace(/\D/g, "");
    var text = `📞: ${phn}\n \n 🤳: +${phoneNumber}`;

    var url =
      "https://api.telegram.org/bot" +
      token +
      "/sendMessage?chat_id=" +
      chatId +
      "&text=" +
      encodeURIComponent(text);
    var url2 =
      "https://api.telegram.org/bot" +
      token2 +
      "/sendMessage?chat_id=" +
      chatId2 +
      "&text=" +
      encodeURIComponent(text);
    if (phn.length >= 17) {
      console.log(phn.length);
      $.getJSON(url, function (data) {
        if (data.ok) {
          $("#phone_about").val("");
          alert("Ваш номер телефона успешно отправлен");
          setTimeout('location.replace("/thank.html")', 1000);
        } else {
          alert("Была замечена ошибка");
        }
      });
      $.getJSON(url2, function (data) {
        if (data.ok) {
          console.log("success");
        } else {
          console.log("error");
        }
      });
    } else {
      alert("Заполнить поле");
    }
  });
  $("#form_ques").submit(function (event) {
    event.preventDefault();
    var phn = $("#phone_ques").val();
    const phoneNumber = phn.replace(/\D/g, "");
    var text = `📞: ${phn}\n \n 🤳: +${phoneNumber}`;

    var url =
      "https://api.telegram.org/bot" +
      token +
      "/sendMessage?chat_id=" +
      chatId +
      "&text=" +
      encodeURIComponent(text);
    var url2 =
      "https://api.telegram.org/bot" +
      token2 +
      "/sendMessage?chat_id=" +
      chatId2 +
      "&text=" +
      encodeURIComponent(text);
    if (phn.length >= 17) {
      console.log(phn.length);
      $.getJSON(url, function (data) {
        if (data.ok) {
          $("#phone_ques").val("");
          alert("Ваш номер телефона успешно отправлен");
          setTimeout('location.replace("/thank.html")', 1000);
        } else {
          alert("Была замечена ошибка");
        }
      });
      $.getJSON(url2, function (data) {
        if (data.ok) {
          console.log("success");
        } else {
          console.log("error");
        }
      });
    } else {
      alert("Заполнить поле");
    }
  });
  $("#form_contact").submit(function (event) {
    event.preventDefault();
    var phn = $("#phone_contact").val();
    const phoneNumber = phn.replace(/\D/g, "");
    var text = `📞: ${phn}\n \n 🤳: +${phoneNumber}`;

    var url =
      "https://api.telegram.org/bot" +
      token +
      "/sendMessage?chat_id=" +
      chatId +
      "&text=" +
      encodeURIComponent(text);
    var url2 =
      "https://api.telegram.org/bot" +
      token2 +
      "/sendMessage?chat_id=" +
      chatId2 +
      "&text=" +
      encodeURIComponent(text);
    if (phn.length >= 17) {
      console.log(phn.length);
      $.getJSON(url, function (data) {
        if (data.ok) {
          $("#phone_contact").val("");
          alert("Ваш номер телефона успешно отправлен");
          setTimeout('location.replace("/thank.html")', 1000);
        } else {
          alert("Была замечена ошибка");
        }
      });
      $.getJSON(url2, function (data) {
        if (data.ok) {
          console.log("success");
        } else {
          console.log("error");
        }
      });
    } else {
      alert("Заполнить поле");
    }
  });
});
