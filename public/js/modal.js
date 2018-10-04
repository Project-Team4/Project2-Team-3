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
       close: function() {},
       buttons: {
        save : function() {},
        cancel : function() {}
       }
    }).show();
    $("#ui-datepicker-div").css("z-index", "9999");
}
