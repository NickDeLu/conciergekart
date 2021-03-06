/**
 * creates a responsive nav bar with the click of a hamburger button
 */
function verifyAge(){
	var section = document.getElementById("age-verify");
	var main = document.getElementById("main-content");
	main.classList.remove("hide-page");
	section.remove();
}

function hamburger(){
	var navbar = document.getElementById("myTopnav");
	if (!(navbar.classList.contains("responsive"))) {
    	navbar.className += " responsive";
  } else {
  	navbar.classList.remove("responsive");
  }
}
var toggled = false;
function dropdownToggle(){
	toggled = !toggled;
	var menu = document.getElementsByClassName('dropdown-content');
	if(toggled){
		menu[0].style.display = 'block';
	}else if(!toggled){
		menu[0].style.display = 'none';
	}
	
}

function goBack() {
	  window.history.back();
	}
	
function autocomplete(inp, Jarr) {
   Jarr = Jarr.toString().replace("[","");
   Jarr = Jarr.toString().replace("]","");
   Jarr = Jarr.split(', ');
   var arr = Array.from(Jarr);
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
      
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].toUpperCase().includes(val.toUpperCase())) {
        
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
			  document.getElementById("searchForm").submit();
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          if(a.childElementCount < 5){
          	a.appendChild(b);
          }
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

// When the user scrolls the page, execute myFunction


document.addEventListener('DOMContentLoaded', function() {
	window.onscroll = function() {stickyNav()};
    var navbar = document.getElementsByClassName("topnav");
    var section = document.getElementsByTagName("section");
    console.log(section[0]);
    
	// Get the offset position of the navbar
	var sticky = navbar[0].offsetTop + 40;

	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function stickyNav() {
  		if (window.pageYOffset >= sticky) {
    		navbar[0].classList.add("sticky")
    		section[0].style.marginTop = "70px";
  		} else {
    		navbar[0].classList.remove("sticky");
    		section[0].style.marginTop = "10px";
  		}
	}
	
	var buttonRight = document.getElementsByClassName("arrow-container-right");
    var buttonLeft = document.getElementsByClassName("arrow-container-left");
    var interval;
	
	Array.from(buttonRight).forEach(element => {
		element.onmouseover = function(e) {
	    	interval = setInterval(function(){
	    		e.target.parentElement.scrollLeft += 2;
	    	}, 1); 
		};
		element.onmouseout = function() {
	   		clearInterval(interval); 
		};
	});
	
	Array.from(buttonLeft).forEach(element => {
		element.onmouseover = function(e) {
	    	interval = setInterval(function(){
	    		e.target.parentElement.scrollLeft += -2;
	    	}, 1); 
		};
		element.onmouseout = function() {
	   		clearInterval(interval); 
		};
	});
    
    
});

