$(document).ready(function () {



// $("#togglebuttonGridPod").click(function(){
//   $(".gridView, .podView").toggleClass("gridView podView");
// });

//**Shows data clicked on summary card snippet level**//

// $('.currentSummaryData').on('click', summaryCardAction); 
$('.clickData').on('click', findData);





function findData(){
  var id = $(this).data('details');
  $('.clickedSummaryData').hide();
  $('#'+id).show();
};
//*****Click on header to open and close the card view*****//
// $('.cardHeader').on('click', summaryCardAction);

// Places card info 
function summaryCardData(){
  SummaryCardAction();
    $(".clickedSummaryData").css("position", "absolute");
    $(".clickedSummaryData").css("margin-top", "300px");
    $(".clickedSummaryData").show(50);
};


// Hover for expanding card//  Good
// $(".summaryCard").mouseenter(function(){
//   if($(this).hasClass("fullSummaryView")) {
//         $(this).animate({"height": "90px"}, 5).removeClass("fullSummaryView "); 
//       } else {         
//         $(this).animate({"height": "336px"}, 5).addClass("fullSummaryView");
// }
// });


// function summaryCardAction(){
// if($(".summaryCard").hasClass("fullSummaryView")) {
//         $(".summaryCard").animate({"height": "90px"}, 5).removeClass("fullSummaryView "); 
//       } else {         
//         $(".summaryCard").animate({"height": "336px"}, 5).addClass("fullSummaryView");
// }
// };




// function summaryCardAction(){
// if($(".summaryCard").hasClass("fullSummaryView")) {
//         $(".summaryCard").animate({"height": "90px"}, 5).removeClass("fullSummaryView "); 
//       } else {         
//         $(".summaryCard").animate({"height": "336px"}, 5).addClass("fullSummaryView");
// }
// };

// Card function
// function cardPerformance(){
//   var card = $(this)('.summaryCard');
  // $("div.summaryCard").mouseenter(
  //   function(){
  //     $(this).add("").css("background-color","red");
  //   })
  // .mouseleave(function(){
  //   $(this).remove("").css("background-color","red");
  // });




//   //Card function
// function cardPerformance(){
// //   var cardStatus 
//   if($("div.summaryCard").hasClass("fullSummaryView")) {
//     $(this).mouseleave(function(){
//     $(this).removeClass("fullSummaryView",{"height":"90px"});
//   });

//     function(){
//       $(this).addClass("fullSummaryView", {"height":"336px"});
//   }



//   $("div.summaryCard").mouseenter(
//     function(){
//       $(this).addClass("fullSummaryView", {"height":"336px"});
//     })
//   .mouseleave(function(){
//     $(this).removeClass("fullSummaryView",{"height":"90px"});
//   });

// };

// $(".clickme").on('click', cardPerformance);



// $(".summaryCard").hover(function(){       
//         $(this).animate({"height": "336px"}, 5).addClass("fullSummaryView");
// });


// $(".clickable").click(function() { $(summaryCardAction).toggle(); });
// $('.summaryCard').hover



// $(".currentSummaryData").on('click', summaryCardData);
// $(".clickable").on('click', SummarySetAction);





//calls clicked data injection feature//
// $('div.currentSummaryData').on('click', summaryCardAction); 
// $('div.currentSummaryData').on('click', findData);
// $('.currentSummaryData').on('click', summaryCardAction);




// $("div .currentSummaryData").on({
//   click: findData();
//   ,click: summaryCardAction(); 



// scroll summary cards

// $("#collapseSummarySet").click(function()
//    var currentElement = currentElement.next();
//    $('div.summaryCard').animate({scrollLeft: $(currentElement).offset().left}, 800);
//       return false;
//    }); 
 
 $("#collapseSummarySet").scrollLeft;



////script to allow the dataTable columns to be reordered//////

// var oTable = $('.example').dataTable( {
//     "sDom": 'Rlfrtip',
//     "oColReorder": {
//       "aiOrder": [ 4, 3, 2, 1, 0 ]
//     }
//   } );
  
//   $('#reset').click( function () {
//     ColReorder.fnReset( oTable );
//     return false;
//   } );

///////////////////////////////////////////////////////////////////// 

});
