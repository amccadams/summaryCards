$(document).ready(function () {

//   $(".clickable").click(function(){
// $("#collapseSummarySet").toggle();
// });
//**Shows data clicked on summary card snippet level**//

$('.currentSummaryData').on('click', showData); 
$('.clickData').on('click',showData);

// $('.clickable').on('click', summaryCardAction);
$('.clickable').on('click', function(){
  if($(this).text()=="Open Cards"){
    $(this).text("Collapse Cards");
  }else{
    $(this).text("Open Cards");
  }
$(summaryCardAction).toggle();
return false;
});

function showData(){
  var id = $(this).data('details');
  $('#'+id).show();
};

// function hideData(){
//     var data = $(this).data('details');
//     $('#'+id).hide();
// };

// $('.closeInfoBox').on('click','.clickedSummaryData',(function(){
//     $(this).parent().remove()
//    });
 /****************************************
 Click on header to open and close the card view
 ****************************************/
$('.cardHeader').on('click', summaryCardAction);

$(".summaryCard").hover(function(){
        $(this).animate({"height": "330px"}, 5);           
});

$(".summaryCard").mouseleave(function(){
  // summaryCardAction();
        $(".summaryCard").animate({"height": "90px"}, 5);     
});
// $(".summaryCard").mouseleave(function(){
//  setTimeout(function(){
//   $(".summaryCard").animate({"height": "90px"}, 5);
//  })
//         // $(".summaryCard").animate({"height": "90px"}, 5);     
// });

// $('.summaryCard').mouseleave(function() {
//     clearTimeout($(this).data('timeout'));
//     $(".summaryCard").animate({"height": "90px"}, 5); 
// }, function() {
//     var t = setTimeout(function() {
//         $('summaryCard').animate({"height": "90px"}, 2000);
//     }, 1000);
//     $(this).data('timeout', t);
// });


// $('.summaryCard').mouseleave(function () {
//     clearTimeout(this.timer);
// }, function () {
//     this.timer = setTimeout(function () {
//         $('.summaryCard').animate({"height": "90px"},5);
   
//     }, 3000);
// });

//change the above 'summaryCard' to 'this' and only the one element will close
function summaryCardAction(){
if($(".summaryCard").hasClass("fullSummaryView")) {
        $(".summaryCard").animate({"height": "330px"}, 5).removeClass("fullSummaryView "); 
      } else {         
        $(".summaryCard").animate({"height": "90px"}, 5).addClass("fullSummaryView");
}
};

$('.addNewIcon').click(function() {
    var $this = $(this);
    $("#darkenBackground").css({
        "opacity": "0.3"
    }).fadeIn("slow");

    $("#large").html(function() {
        $('.ttip')
        .show(500)
    }).fadeIn("slow");
});

$('.note').on('click', function() {
    $('.ttip').hide(500);
    $("#darkenBackground").fadeOut("slow");
    $("#large").fadeOut("slow");
});

$("#large").click(function() {
    $(this).fadeOut();
   
});

$(".closeInfoBox").click(function() {
    $(this).parent().hide();  
});



$(".togglebuttonGridPod").click(function(){
  $(".gridView, .podView").toggle("gridView podView");
});

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
//   var cardStatus 
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
 
 // $("div#collapseSummarySet").scrollLeft( 300 );

////script to add more cards from personal settings///// 

$(':checkbox').change(function () {
    var option = 'content_option_' + $(this).attr('id');
    if ($('.' + option).css('display') == 'none') {
        $('.' + option).show();
    } else {
        $('.' + option).hide();
    }
});


////script to close cards from personal settings and uncheck box///// 

$(".closeCard").click(function () {
    $(this).parent().hide();
    var id = $.trim($(this).parent().prop('class').match(/ (card.)+?/g)[0]);
    $('#' + id).prop("checked", false);
});



///////////////////////////////////////////////////////////////////// 


////script to allow stacking order of content divs to be changed///// 
  

  $( ".sortable" ).sortable({ handle: ".handle", cursor: "move" });


/////////////////////////////////////////////////////////////////////

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


var stickyNavTop = $('#container').offset().top;  
  
var stickyNav = function(){  
var scrollTop = $(window).scrollTop();  
       
if (scrollTop > stickyNavTop) {   
    $('#container').addClass('sticky');  
} else {  
    $('#container').removeClass('sticky');   
}  
};  
  
stickyNav();  
  
$(window).scroll(function() {  
    stickyNav();  
});  

/////Simple Expand//////////////////////////////////////////////////////////// 

$('.expander').simpleexpand();

///////////////////////////////////////////////////////////////////// 




});

