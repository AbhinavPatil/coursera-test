document.addEventListener("DOMContentLoaded",
  function (event) {

  	function details (event) {
  		this.textContent = "Done!";

  		
  	   var srn =document.getElementById("srn").value;
	   var message = "<h2>Hello number " + srn + "!</h2>";
	   document.getElementById("content").innerHTML = message;


        if(srn === "01"){
        	var name = document.querySelector("#name").name;
        	name = "Name : Abhinav Patil";
        	document.querySelector("#name").name = name;
            document.getElementById("name").innerHTML = name;

            var bloodgrp = document.querySelector("#bloodgrp").bloodgrp;
        	bloodgrp = "Bloodgroup : B+ve";
        	document.querySelector("#bloodgrp").bloodgrp = bloodgrp;
            document.getElementById("bloodgrp").innerHTML = bloodgrp;

            var address = document.querySelector("#address").address;
        	address = "Address : Muktanand society, Kothrud";
        	document.querySelector("#address").address = address;
            document.getElementById("address").innerHTML = address;

            var yop = document.querySelector("#yop").yop;
        	yop = "Year of passing : 2022";
        	document.querySelector("#yop").yop = yop;
            document.getElementById("yop").innerHTML = yop;
        }
        else if(srn === "02"){
        	var name = document.querySelector("#name").name;
        	name = "Name : Karan paranjpe";
        	document.querySelector("#name").name = name;
            document.getElementById("name").innerHTML = name;

            var bloodgrp = document.querySelector("#bloodgrp").bloodgrp;
        	bloodgrp = "Bloodgroup : B+ve";
        	document.querySelector("#bloodgrp").bloodgrp = bloodgrp;
            document.getElementById("bloodgrp").innerHTML = bloodgrp;

            var address = document.querySelector("#address").address;
        	address = "Address : Sinhagad Road";
        	document.querySelector("#address").address = address;
            document.getElementById("address").innerHTML = address;

            var yop = document.querySelector("#yop").yop;
        	yop = "Year of passing : 2022";
        	document.querySelector("#yop").yop = yop;
            document.getElementById("yop").innerHTML = yop;
        }
        else if(srn === "03"){
        	console.clear();
        	var name = document.querySelector("#name").name;
        	name = "Name : Anish Navale";
        	document.querySelector("#name").name = name;
            document.getElementById("name").innerHTML = name;

            var bloodgrp = document.querySelector("#bloodgrp").bloodgrp;
        	bloodgrp = "Bloodgroup : A+ve";
        	document.querySelector("#bloodgrp").bloodgrp = bloodgrp;
            document.getElementById("bloodgrp").innerHTML = bloodgrp;

            var address = document.querySelector("#address").address;
        	address = "Address : Karishma Society. Kothrud";
        	document.querySelector("#address").address = address;
            document.getElementById("address").innerHTML = address;

            var yop = document.querySelector("#yop").yop;
        	yop = "Year of passing : 2022";
        	document.querySelector("#yop").yop = yop;
            document.getElementById("yop").innerHTML = yop;
        }
        else{
           console.clear();
	       var srn =document.getElementById("srn").value;
		   var message = "<h2>Number " + srn + " doesn't exist!</h2>";
		   document.getElementById("content").innerHTML = message;
        }


  	}


  	document.querySelector("button")
      .addEventListener("click", details);



  }
);

