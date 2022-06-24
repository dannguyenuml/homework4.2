// this is the function i used for jquery
$().ready(function() {

     $('input').on('blur keup', function() {
          if($("#form").valid()) {
               $("#submit").prop('disabled', false);
          } else {
               $("#submit").prop('disabled', 'disabled');
          }
     });

     $('#form').validate({
// this is the set of rules i used, required is to make sure they enter an integer
// number is used to make sure the entered character is a number 
// range is between -50 and 50           
          rules: {
               number1: {
                    required: true,
                    number: true,
                    range: [-50, 50]
                    },
               number2: {
                    required: true,
                    number: true,
                    range: [-50, 50]
                    },
               number3: {
                    required: true,
                    number: true,
                    range: [-50, 50] 
                    },
               number4: {
                    required: true,
                    number: true,
                    range: [-50, 50]
                    },
               },
// i changed the error messages to be more helpful to the user, so they know what to change.                
          messages: {
               number1: {
                    required: "Please enter an integer",
                    number: "Please enter an integer",
                    range: "Integer has to be between -50 and 50"
               }, 
               number2: {
                    required: "Please enter an integer",
                    number: "Please enter an integer",
                    range: "Integer has to be between -50 and 50"
               },
               number3: {
                    required: "Please enter an integer",
                    number: "Please enter an integer",
                    range: "Integer has to be between -50 and 50"
               }, 
               number4: {
                    required: "Please enter an integer",
                    number: "Please enter an integer",
                    range: "Integer has to be between -50 and 50"
               }                                              
          },

          errorPlacement: function(error, element){
               switch(element.attr("name")){
                    case 'number1':
                         error.insertAfter($("#sliderone"));
                         break;
                    case 'number2':
                         error.insertAfter($("#slidertwo"));
                         break;     
                    case 'number3':
                         error.insertAfter($("#sliderthree"));
                         break;
                    case 'number4':
                         error.insertAfter($("#sliderfour"));
                         break;
                    default:
               }
          },
// this is the what happens when they click the submit button, it makes the table
          submitHandler: function() {
               multiplicationtable();
               return false; 
          },
// this is what happens when they click the submit button and there are still errors. It wont show a table           
          invalidHandler: function(){
               $("#emessage").empty();
               $("#table").empty();
          }
          
     });
// this makes the slider and the comments for this slider are the same for all 4 sliders. 
     $("#sliderone").slider({
          range: 100, // this is the range
          min: -50, // this is minimum 
          max: 50, // this is the max 
          value: 0, // this is the default value 
          slide: function(event, ui) {
               $('#number1').val(ui.value);
               $(ui.value).val($('#number1').val());
               $("#submit").prop('disable', false);
               createcheck();
          }
     });
// this makes the input field change to whats the slider is at 
     $("#number1").on("keyup", function() {
          var yesvalue = $("#sliderone").slider("option",value);
          var novalue = ($(this).val());
          if(isNaN(novalue) == false || novalue > -50 || novalue < 50) { // this checks the value to see if its in range
               $("#sliderone").slider("value", novalue);
               createcheck(); // this creates the table 
          }
     });


     $("#slidertwo").slider({
          range: 100,
          min: -50,
          max: 50,
          value: 0,
          slide: function(event, ui) {
               $('#number2').val(ui.value);
               $(ui.value).val($('#number2').val());
               $("#submit").prop('disable', false);
               createcheck();
          }
     });

     $("#number2").on("keyup", function() {
          var yesvalue = $("#slidertwo").slider("option",value);
          var novalue = ($(this).val());
          if(isNaN(novalue) == false || novalue > -50 || novalue < 50) {
               $("#slidertwo").slider("value", novalue);
               createcheck();
          }
     });

     $("#sliderthree").slider({
          range: 100,
          min: -50,
          max: 50,
          value: 0,
          slide: function(event, ui) {
               $('#number3').val(ui.value);
               $(ui.value).val($('#number3').val());
               $("#submit").prop('disable', false);
               createcheck();
          }
     });

     $("#number3").on("keyup", function() {
          var yesvalue = $("#sliderthree").slider("option",value);
          var novalue = ($(this).val());
          if(isNaN(novalue) == false || novalue > -50 || novalue < 50) {
               $("#sliderthree").slider("value", novalue);
               createcheck();
          }
     });  

     $("#sliderfour").slider({
          range: 100,
          min: -50,
          max: 50,
          value: 0,
          slide: function(event, ui) {
               $('#number4').val(ui.value);
               $(ui.value).val($('#number4').val());
               $("#submit").prop('disable', false);
               createcheck();
          }
     });

     $("#number4").on("keyup", function() {
          var yesvalue = $("#sliderfour").slider("option",value);
          var novalue = ($(this).val());
          if(isNaN(novalue) == false || novalue > -50 || novalue < 50) {
               $("#sliderfour").slider("value", novalue);
               createcheck();
          }
     });     

     multiplicationtable();
     tabsmaker();
     
});

// this makes the sure input is good and makes the table 
function createcheck(){
     if($("#form").valid() == true) {
          $("#form").submit();
     }
}

// this function is used to make tabs and delete tabs 
function tabsmaker() {

     $("#divtabs").tabs();
     var tabcounter = 1;  // tab counter 
     var divtabs = $("#divtabs"); 

     $("#submit").click(function() {
          if(tabcounter >=5) {
               alert("Only 5 tabs allowed");
               return false;
               }
          // increases tab counter by 1 
          tabcounter++;
          
          // get the ul tag 
          var ul = $("#uitabs");

          // creates tab name 
          var title = "Tab " + (tabcounter -1 ); 
          
          var contentid = "tabs-" + tabcounter;
          var content = $("#table").html();
          
          divtabs.tabs("destroy");

          ul.html(ul.html() + "<li><a href ='#" + contentid + "'>" + title + "</a><span class = 'ui-icon ui-icon-close' role = 'presentation'></span></li>");
   
          divtabs.html(divtabs.html() + "<div id='"+ contentid + "'>" + content + "</div>");
          
          divtabs.tabs({active: (tabcounter -2)});
               
     });
// delete all tabs 
     $("#deletetabs").click( function() {
          var numtab = $("#uitabs li").length; // get the li count
          while (numtab > 0) {
              var panelId = $("#uitabs li").last().remove().attr( "aria-controls" );
              $( "#" + panelId ).remove();
              numtab = $("#uitabs li").length;
          }
          tabcounter = 1; // resets the tab conter to one 
          divtabs.tabs( "refresh" );
  
      });
  
      // this moves the tab icon 
      divtabs.on( "click", "span.ui-icon-close", function() {
        var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
        $( "#" + panelId ).remove();
        divtabs.tabs( "refresh" );
        // removes one from the tab counter 
        tabcounter--;
      });

}

// this function creates the multiplication table 
function multiplicationtable(){
// this creates the variables
          var mnum1, mnum2, mnum3, mnum4; 
// this gives the variables the numbers i want           
          mnum1 = parseInt($('input[name=number1]').val());
          mnum2 = parseInt($('input[name=number2]').val());
          mnum3 = parseInt($('input[name=number3]').val());
          mnum4 = parseInt($('input[name=number4]').val());

//  i used this to make sure the numbers was being parsed correctly
//          console.log(mnum1);    
//          console.log(mnum2);    
//          console.log(mnum3);    
//          console.log(mnum4);    

// this is what i made to switch number 1 and 2 if number 1 is greater than number 2. 
// it switches the numbers and creates an error message 
          $("#emessage").empty();
          if(mnum1 > mnum2) {
               $("#emessage").append("<p>Swapping number1 and number2, since number1 is greater than number2<br></p>")
               var temp = mnum1;
               mnum1 = mnum2;
               mnum2 = temp;
          }
// this is made to switch number 3 and number 4 if number 3 is greater than number 4
// it switches the numbers and creates the appropiate error messages           
          if(mnum3 > mnum4) {
               $("#emessage").append("<p>Swapping number3 and number4, since number3 is greater than number4<br></p>")
               var temp = mnum3;
               mnum3 = mnum4;
               mnum4 = temp;
          }


         var table = "";
    
         table += "<table id = 'style-table'>";
    
    // i used a for loop and a nested for loop to go through the numbers to make the multiplication table      
         for(var x = 0; x <= (mnum2-mnum1 +1); x++){
              table += "<tr>";
              for(var y = 0; y <= (mnum4-mnum3 +1); y++){
                   if(x ==0 ) {
                        table += "<td class = 'header'>" + ((y == 0) ? "" : (y + mnum3 - 1)) + "</td>";
                   } else if(y == 0) {
                        table += "<td class = 'header'>" + (x + mnum1 -1) + "</td>";
      
    // this is used to make the cells that container the product of the x and y.                     
                   } else
                        table += ("<td class = 'cell'>" + (x + mnum1 -1) * (y + mnum3 -1) + "</td>");
              }
              table += "</tr>";
         }
         table += "</table>";
 // this adds the table to the table container         
         $("#table").html(table);
         return false;
    }