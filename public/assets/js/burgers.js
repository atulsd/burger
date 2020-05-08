$(function () {
  $(".devoured").on("click", function (event) {
    var id = $(this).data("id");
    var devoured = {
      devoured: true,
    };
    // PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured,
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $("#create-form").on("submit", function (event) {
    event.preventDefault();
    var newBurger = {
      name: $("#bu").val().trim(),
      devoured: false,
    };
    // POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
