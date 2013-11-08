$(document).ready(function () {


// $('a.reveal-link').trigger('click');
// $('a.close-reveal-modal').trigger('click');

// // or directly on the modal
// $('#myModal').foundation('reveal', 'open');
// $('#myModal').foundation('reveal', 'close');




// Click event to show containers of info //////


// tabs ///
  //   $(function() {
  //   $( "#tabsBusiness" ).tabs({
  //     collapsible: true
  //   });
  // });

// toggle expanded large container///
// $( ".bookingsClick" ).click(function() {
//   $( ".summaryBoxLarge" ).toggle();
// });

// dropdown checkbox //
// $(function(){
//   var values = $("select").val();
//    $("select").multiselect({
//     header:"Choose an Option!!"
//    }); 
 
// });
// $(':checkbox').change(function() {
//     var option = 'content_option_' + $(this).attr('id');
//     if ($('.' + option).css('display') == 'none') {
//         $('.' + option).show();
//     }
//     else {
//         $('.' + option).hide();
//     }
// });





// toggle summary menu//


// function SummarySetAction(){
//   $("#collapseSummarySet").toggle();

// };



// $(".clickable").click(function(){
// $("#collapseSummarySet").toggle();
// });

// toggle grid and pod view



$("#togglebuttonGridPod").click(function(){
  // $(".partyToggle").unbind('click');
  $(".gridView, .podView").toggleClass("gridView podView");

});

// // popup modal
// $( "#myPopupDiv" ).popup();



function SummaryCardAction(){
if($(".clickme").hasClass("fullSummaryView")) {
        $(".summaryCard").animate({"height": "60px"}, 5).removeClass("fullSummaryView "); 
      } else {         
        $(".summaryCard").animate({"height": "336px"}, 5).addClass("fullSummaryView");
}
};
// Collapse Card Version One
// function CollapseCards(){
//   $(".summaryCard").slideUp({"height":"100px"},50);
// };


// Places card info 
// function SummaryCardData(){
//   SummaryCardAction();
//     $(".clickedSummaryData").css("position", "absolute");
//     $(".clickedSummaryData").css("margin-top", "300px");
//     $(".clickedSummaryData").show(50);
// };

//this one calls to open and close the card views and adjusts them to the right size so that the header shows//
$('.clickme').on('click', SummaryCardAction);
$('.clickable').on('click', SummaryCardAction);  

// $(".clickable").click(function() { $(SummaryCardAction).toggle(); });



// $(".currentSummaryData").on('click', SummaryCardData);
// $(".clickable").on('click', SummarySetAction);


//data injection feature//
function findData(){
  SummaryCardAction();
  var id = $(this).data('details');
  $('div.clickedSummaryData').hide();
  $('#'+id).show();

};
//calls data injection feature//
$('div.currentSummaryData').on('click', findData);
});



////script to allow the dataTable columns to be reordered//////

var oTable = $('.example').dataTable( {
    "sDom": 'Rlfrtip',
    "oColReorder": {
      "aiOrder": [ 4, 3, 2, 1, 0 ]
    }
  } );
  
  $('#reset').click( function () {
    ColReorder.fnReset( oTable );
    return false;
  } );

///////////////////////////////////////////////////////////////////// 



//Card function
function cardPerformance(){
//   var card = $(this)('.summaryCard');
  if($("div.summaryCard").hasClass("fullSummaryView")) {
    $(this).mouseleave(function(){
    $(this).removeClass("fullSummaryView",{"height":"90px"});
  });

    function(){
      $(this).addClass("fullSummaryView", {"height":"336px"});
  }



  $("div.summaryCard").mouseenter(
    function(){
      $(this).addClass("fullSummaryView", {"height":"336px"});
    })
  .mouseleave(function(){
    $(this).removeClass("fullSummaryView",{"height":"90px"});
  });


