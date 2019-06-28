new CircleType(document.getElementById('expirience-aside-text'))
  .radius(1080);

var textExpanded = false;

$(".reviews-comment_text-read").click(function(event) {
  event.preventDefault();
  //var currentText = $("#reviews-comment_text-inner").text;
  //alert($("#reviews-comment_text-inner").text());
  //$(".reviews-comment_text-inner").html
  if(!textExpanded) {
    var str = $("#text-Unexpanded").text();
    str += " и палаток, и постоянно кого то спасать, оказывать первую помощь, учиться быстро договариваться с людьми, которых видишь первый день, а также работать в команде с ними..., потому что ваши Жизни, только в Ваших правильных действиях, быстрой реакции и конечно руках. Не перечислить все, что происходило, т.к. оно происходило постоянно. Когда только хотелось выдохнуть и сказать вот сейчас небольшой отдых, сейчас посплю в тепле и наконец, надену сухие носки, начинался Ад!!! Столько опыта получил за три дня, что за всю жизнь не получал такого, хоть и путешественник лютый. Пересмотрел многие моменты на подготовку к походам, снаряжению, одежде, выбору места для лагеря, безопасности, прогнозировать негативные ситуации, которые могут случиться в лесу и принимать превентивные меры, правильно и быстро принимать решения и многое другое. А самое главное найти в себе силы идти к цели, когда нет сил, хочется все послать, сдаться. Открыть в себе не только второе дыхание, а пятое или десятое уже."
    $("#text-Unexpanded").html(str);
    $(".reviews-comment_text-read > .text-description").html("Скрыть");
        
    addRule(".reviews-comment_text-read-triangle:before", {
      top: "12px",
      left: "25px"
    });
    $(".reviews-comment_text-read-triangle").css(
      {
        "transform": "rotate(-90deg)",
        "top": "10px",
        "left": "35px",
        "border": "20px solid transparent"
      }
     );
  } else {    
    var str = $("#text-Unexpanded").text().replace($("#text-Unexpanded").text(), "Я, Выжил!!!! Такого треша в жизни у меня не было. Не думал даже, что на такое способен в последнее время. Ни какое КМБ и прочее с этим не сравнится. Каждый день плавать в одежде в речках (а это Мурманск детка), спать по 2 часа или совсем не спать, потому что надо совершать марш броски с пострадавшим в 140 кг. ,освоить альпинизм и совершать самостоятельные спуски и подъемы с крутых скал за 1 день, делать носилки за 5 минут из подручных средств, есть ягоды по пол дня, потому что другой еды нет, пить только из речки, ходить босиком по лесу весь день, делать укрытия, о которых даже в детстве не мечтал, спать под открытым небом без спальников...");
    $(".reviews-comment_text-inner").html(str);
    $(".reviews-comment_text-read > .text-description").html("Читать весь отзыв");

    addRule(".reviews-comment_text-read-triangle:before", {
      top: "9px",
      left: "22px"
    });
    $(".reviews-comment_text-read-triangle").css(
      {
        "transform": "rotate(0)",
        "top": "-10px",
        "left": "110px",
        "border": "10px solid transparent"
      }
     );
  }
  textExpanded = !textExpanded;
});

var addRule = (function (style) {
  var sheet = document.head.appendChild(style).sheet;
  return function (selector, css) {
      var propText = typeof css === "string" ? css : Object.keys(css).map(function (p) {
          return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
      }).join(";");
      sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
  };
})(document.createElement("style"));