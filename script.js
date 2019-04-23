$(document).ready(function() {
  handleSlideChange = () => {
    const slidesById = $('[id^="slide-"]');
    const slidesByClass = $(".fooseshoes-indicator-with-text");
    $.each(slidesById, (key, value) => {
      $(value).click(() => {
        $.each(slidesByClass, (k, v) => {
          if ($(v).has("slide-active")) {
            $(v).removeClass(["slide-active"]);
          }
        });
        $(value).toggleClass("slide-active");
      });
    });
  };

  handleSlideChange();
  let searchActive = 0;

  handleSearchExpand = event => {
    const searchContainer = $(".fooshoes-search, .fooshoes-search-mobile");
    const searchInput = $("#search-input, #search-input-mobile");
    if (
      searchContainer.has(event.target).length == 0 &&
      !searchContainer.is(event.target) &&
      searchInput.val() === ""
    ) {
      if (searchActive === 1) {
        $("#search-input-mobile")
          .animate(
            {
              left: "0px",
              bottom: "-40px",
              width: "100%",
              opacity: 1
            },
            0
          )
          .animate(
            {
              left: "150px",
              bottom: "0px",
              width: "50%",
              opacity: 0.1
            },
            300
          );
      }
      searchActive = 0;
      setTimeout(() => {
        searchInput.removeClass(["input-search-active"]);
      }, 300);
    } else {
      searchActive = 1;
      searchInput.addClass("input-search-active");
    }
  };

  $(document).on("click", event => {
    handleSearchExpand(event);
  });

  $("#nav-icon-toggle").click(() => {
    $(".navigation-links-mobile").slideToggle(400);
  });

  $("#search-icon-mobile").click(() => {
    if (searchActive === 0)
      $("#search-input-mobile")
        .animate(
          {
            left: "150px",
            bottom: "0px",
            width: "50%",
            opacity: 0.1
          },
          0
        )
        .animate(
          {
            left: "150px",
            bottom: "-40px",
            width: "50%",
            opacity: 0.3
          },
          50
        )

        .animate(
          {
            left: "0px",
            bottom: "-40px",
            width: "100%",
            opacity: 1
          },
          250
        );
  });
  $(".product-price-and-name")
    .mouseover(function() {
      $("h5", this).hide();
      $(".product-icons", this).show();
    })
    .mouseout(function() {
      $("h5", this).show();
      $(".product-icons").hide();
    });

  $(".input-search").keyup(function() {
    $(".search-suggest").addClass("search-suggest-active");
    if ($(this).val().length === 0)
      $(".search-suggest").removeClass(["search-suggest-active"]);
  });
  $(".grid-view").click(() => {
    $(".shop-item")
      .addClass("col-md-4")
      .removeClass(["col-12"]);
  });
  $(".list-view").click(() => {
    $(".shop-item")
      .addClass("col-12")
      .removeClass(["col-md-4"]);
  });
});
