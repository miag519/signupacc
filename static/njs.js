//boy1
$(document).on("click", ".profile", function () {
     var pic = $(this).attr('src');
     $(".modal-body #profile").attr( "src", pic );
     // As pointed out in comments, 
     // it is unnecessary to have to manually call the modal.
     // $('#addBookDialog').modal('show');
});