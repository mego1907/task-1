$(document).ready(function() {
  const table = $("#example").DataTable({
    fixedHeader: true,
    columnDefs: [],
  });

  $("#toggle-vis").on("change", function (e) {
    e.preventDefault();


    // Get the column API object
    var column = table.column(
      $(this.options[e.target.selectedIndex]).attr("data-column")
    );

    this.options[e.target.selectedIndex].classList.toggle("selected")

    // Toggle the visibility
    column.visible(!column.visible());
  });


  table.buttons().container()
  .appendTo("#example_wrapper .col-md-6:eq(0)");
});
