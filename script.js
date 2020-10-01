//smooth transition
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
        return false;
      }
    }
  });
});

// scrollreveal
window.addEventListener("load", function () {
  window.sr = ScrollReveal();

  sr.reveal(".showcaseImg", {
    duration: 2000,
    origin: "top",
    distance: "300px",
    delay: 100,
  });

  sr.reveal(".about .container h1", {
    duration: 2000,
    origin: "bottom",
    distance: "100px",
    viewFactor: 0.2,
  });
});

//simple-lightbox
const lightbox = new SimpleLightbox(".imgGallery .container a");
