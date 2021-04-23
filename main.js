
function enLargeImages(){
    document
    .getElementById("market-place-image")
    .addEventListener("mouseenter", function (event) {
      document.getElementById("market-place-image").style.width = "75%";
    });
  document
    .getElementById("market-place-image")
    .addEventListener("mouseout", function (event) {
      document.getElementById("market-place-image").style.width = "200px";
    });
}

function enLargeSecondImages(){
    document
    .getElementById("market-place-image2")
    .addEventListener("mouseenter", function (event) {
      document.getElementById("market-place-image2").style.width = "75%";
    });
  document
    .getElementById("market-place-image2")
    .addEventListener("mouseout", function (event) {
      document.getElementById("market-place-image2").style.width = "200px";
    });
}

function enlargeMarketPlaceTexts(){
    document
    .getElementById("title-page")
    .addEventListener("mouseenter", function (event) {
      document.getElementById("title-page").style.fontSize = "50px";
      document.getElementById("title-page").style.color = "#0000FF";
    });

    document
    .getElementById("title-page")
    .addEventListener("mouseout", function (event) {
      document.getElementById("title-page").style.fontSize = "30px";
      document.getElementById("title-page").style.color = "#FF0000";
      
    });


}

function enLargeEventsHeader(){
    document
    .getElementById("events-page")
    .addEventListener("mouseenter", function (event) {
      document.getElementById("events-page").style.fontSize = "50px";
      document.getElementById("events-page").style.color = "#0000FF";
    });
    document
    .getElementById("events-page")
    .addEventListener("mouseout", function (event) {
      document.getElementById("events-page").style.fontSize = "30px";
      document.getElementById("events-page").style.color = "#FF0000";
      
    });
}
function enLargeFAQHeader(){
    document
    .getElementById("faq-page")
    .addEventListener("mouseenter", function (event) {
      document.getElementById("faq-page").style.fontSize = "50px";
      document.getElementById("faq-page").style.color = "#0000FF";
    });

    document
    .getElementById("faq-page")
    .addEventListener("mouseout", function (event) {
      document.getElementById("faq-page").style.fontSize = "30px";
      document.getElementById("faq-page").style.color = "#FF0000";
      
    });
}

function enLargeContactHeader(){
    document
    .getElementById("contact-page")
    .addEventListener("mouseenter", function (event) {
      document.getElementById("contact-page").style.fontSize = "50px";
      document.getElementById("contact-page").style.color = "#0000FF";
    });

    document
    .getElementById("contact-page")
    .addEventListener("mouseout", function (event) {
      document.getElementById("contact-page").style.fontSize = "30px";
      document.getElementById("contact-page").style.color = "#FF0000";
      
    });
}

function enLargeBenefitHeader(){
    document
    .getElementById("benefit-page")
    .addEventListener("mouseenter", function (event) {
      document.getElementById("benefit-page").style.fontSize = "50px";
      document.getElementById("benefit-page").style.color = "#0000FF";
    });


    document
    .getElementById("benefit-page")
    .addEventListener("mouseout", function (event) {
      document.getElementById("benefit-page").style.fontSize = "30px";
      document.getElementById("benefit-page").style.color = "#FF0000";
    });
}
function enLargeContactsHeader(){
    document
    .getElementById("events-page")
    .addEventListener("mouseenter", function (event) {
      document.getElementById("events-page").style.fontSize = "50px";
      document.getElementById("events-page").style.color = "#0000FF";
    });
    document
    .getElementById("events-page")
    .addEventListener("mouseout", function (event) {
      document.getElementById("events-page").style.fontSize = "30px";
      document.getElementById("events-page").style.color = "#FF0000";
      
    });
}



function enlargeHeaderTexts(){
    document
    .getElementById("header-title")
    .addEventListener("mouseenter", function (event) {
      document.getElementById("header-title").style.fontSize = "30px";
      document.getElementById("header-title").style.color = "#0000FF";
    });

  
    document
    .getElementById("header-title1")
    .addEventListener("mouseenter", function (event) {
        document.getElementById("header-title1").style.fontSize = "30px";
        document.getElementById("header-title1").style.color = "#0000FF";
      
    });

    document
    .getElementById("header-title2")
    .addEventListener("mouseenter", function (event) {
        document.getElementById("header-title2").style.fontSize = "30px";
        document.getElementById("header-title2").style.color = "#0000FF";
      
    });
    document
    .getElementById("header-title3")
    .addEventListener("mouseenter", function (event) {
        document.getElementById("header-title3").style.fontSize = "30px";
        document.getElementById("header-title3").style.color = "#0000FF";
      
    });
    document
    .getElementById("header-title4")
    .addEventListener("mouseenter", function (event) {
        document.getElementById("header-title4").style.fontSize = "30px";
        document.getElementById("header-title4").style.color = "#0000FF";
      
    });


    document
    .getElementById("header-title")
    .addEventListener("mouseout", function (event) {
      document.getElementById("header-title").style.fontSize = "20px";
      document.getElementById("header-title").style.color = "#000000";

      
    });
    document
    .getElementById("header-title1")
    .addEventListener("mouseout", function (event) {
        document.getElementById("header-title1").style.fontSize = "20px";
        document.getElementById("header-title1").style.color = "#000000";
      
    });
    document
    .getElementById("header-title2")
    .addEventListener("mouseout", function (event) {
        document.getElementById("header-title2").style.fontSize = "20px";
        document.getElementById("header-title2").style.color = "#000000";
      
    });
    document
    .getElementById("header-title3")
    .addEventListener("mouseout", function (event) {
        document.getElementById("header-title3").style.fontSize = "20px";
        document.getElementById("header-title3").style.color = "#000000";
      
    });
    document
    .getElementById("header-title4")
    .addEventListener("mouseout", function (event) {
        document.getElementById("header-title4").style.fontSize = "20px";
        document.getElementById("header-title4").style.color = "#000000";
      
    });




}

function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    
    if (name == "" || email=="" ) {
      alert("Names and email must be filled out");
      return false;
    }else{
        alert(`Thank you ${name} we have received your inquiry and we will get back to you at ${email}`)
    }
  }

 