var bar = document.getElementById('progressbar');
window.addEventListener("scroll", function(){
    bar.style.width = pageYoffset;
})


function total_adult() {
  var no_of_tickets = document.getElementById("adultTic").value;
  total = no_of_tickets * 30;
  document.getElementById("adult_total").innerHTML = "$" + total;
  return total;
}

function total_youth() {
  var no_of_tickets = document.getElementById("youthTic").value;
  total = no_of_tickets * 20;
  document.getElementById("youth_total").innerHTML = "$" + total;
  return total;
}

function total_children() {
  var no_of_tickets = document.getElementById("childTic").value;
  total = no_of_tickets * 10;
  document.getElementById("child_total").innerHTML = "$" + total;
  return total;
}

function all_total() {
  total = total_adult() + total_youth() + total_children();
  document.getElementById("all_total").innerHTML = "$" + total;
}

function booking() {
  var dom=document.getElementById("paymentmethod");
  if(dom.options[dom.selectedIndex].value=="null")
  {
    alert("Please select your tickets");
  }
  else{
    alert("Thank you for booking with us");
  }
}

 function promocode(){
   var dom=document.getElementById("promocode");
   seniorspromo = total_adult() * 0.5;
   studentpromo = total_youth() * 0.2;
   onlinepromo = all_total() * 0.1;
   var promo=0;

   if(document.getElementById('promocode').value == "SENIORS50")
   {
    document.getElementById("promo").innerHTML = "-$" + seniorspromo;
    promo=seniorspromo;
    }

    else if(document.getElementById('promocode').value =="STUDENT5")
    {document.getElementById("promo").innerHTML = "-$" + studentpromo;
      promo=studentpromo;
    }

    else if(document.getElementById('promocode').value =="ONLINE10")
    {
      document.getElementById("promo").innerHTML = "-$" + onlinepromo;
      promo=onlinepromo;
    }

    return promo;
  }
