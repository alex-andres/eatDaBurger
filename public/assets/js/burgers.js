$(function() {
  $(".change-eaten").on("click", (event) => {
    let id = $(this).data("id");
    let eaten = $(this).data("neweaten");

    let condition = {
      eaten: eaten
    };

    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: condition
    }).then(() => {
      location.reload();
    });
  });

  $(".create-form").on("submit", (event) => {
    event.preventDefault();

    let newBurger = {
      name: $("#burger").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
      location.reload();
    });
  });

});
