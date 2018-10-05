// // Get modal button 
// var modal = document.getElementById('simpleModal');
// // Get open modal button
// var modalBtn = document.getElementById('modalBtn');
// // Get close button
// var closeBtn = document.getElementsByClassName('closeBtn')[0];

// // Listen for open click
// modalBtn.addEventListener('click', openModal);
// // Listen for close click
// closeBtn.addEventListener('click', closeModal);

// // function to open modal
// function openModal(){
//     modal.style.display = 'block';
// }
// // Listen for outside click
// window.addEventListener('click', outsideClick);

// //  function to close modal
// function closeModal(){
//     modal.style.display = 'none';
// }

// function outsideClick(e){
//     if(e.target==modal){
//         modal.style.display = 'none';
//     }
// }


$(function() {
    $("#datepicker").datepicker({ dateFormat: 'dd/mm/yy' });
});

function openmodal() {
    var $dialogContent = $("#event_edit_container");

    $dialogContent.dialog({
       modal: true,
       title: "Test",
    //    close: function() {
    //        console.log('close')
    //    },
    buttons: {
        "Save": function() {
    //    Ajax POST requests to /api/calendar
  
    // req.body.type,
    // req.body.name,
    // req.body.start_date,
    // req.body.end_date,
    // Get value of date input
    var dateInput = $('#datepicker').val()
    console.log(dateInput)
    var type = $('#type').val()
    var name = $('#name').val()
    var startDate = $('#startDate').val()
    var info =$('#info').val()
    var location= $('#location').val()

    var eventObject = {
        type: type,
        name: name,
        start_date: startDate,
        info: info,
        location: location
    } ;
    
    $.post("/api/calendar", eventObject, function() {
      console.log('record sent')
    });

        },
        

        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    }).show();
    $("#ui-datepicker-div").css("z-index", "9999");
}
