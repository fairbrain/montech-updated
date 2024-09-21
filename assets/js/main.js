Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

$(".team-slider").slick({
  centerMode: false,
  centerPadding: "60px",
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    ,
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

$(".partners-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  draggable: false, // Enables autoplay

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".project-slider").slick({
  arrows: true,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".projects .slider-nav .arrow-right").click(() => {
  $(".projects .slick-next").click();
});
$(".projects .slider-nav .arrow-left").click(() => {
  $(".projects .slick-prev").click();
});
$(".works .slider-nav .arrow-right").click(() => {
  $(".works .slick-next").click();
});
$(".works .slider-nav .arrow-left").click(() => {
  $(".works .slick-prev").click();
});

document.addEventListener("DOMContentLoaded", function () {
  const playBtn = document.getElementById("playBtn");
  const videoPopup = document.getElementById("videoPopup");
  const closeBtn = document.getElementById("closeBtn");
  const videoPlayer = document.getElementById("videoPlayer");
  let popupShown = false; // Flag to ensure the popup shows only once

  // Function to open the video popup
  function openVideoPopup() {
    videoPopup.style.display = "flex";

    // Load the video source dynamically when the popup is opened
    if (!videoPlayer.getAttribute("src")) {
      videoPlayer.setAttribute(
        "src",
        "https://new.businessenquiry.co.in/montech-demo.mp4"
      ); // Replace with your video file URL
      videoPlayer.load();
    }
  }

  // Event listener for the play button
  playBtn.addEventListener("click", function () {
    openVideoPopup();
  });

  // Function to close the video popup
  closeBtn.addEventListener("click", function () {
    videoPopup.style.display = "none";
    videoPlayer.pause(); // Pause the video when popup is closed
    videoPlayer.removeAttribute("src"); // Remove the video source
  });

  // Function to show the popup when scrolling past a certain point
  window.addEventListener("scroll", function () {
    if (!popupShown) {
      // Get the scroll position
      const scrollPosition = window.scrollY;

      // Define the scroll threshold (e.g., 500px)
      const scrollThreshold = 2000;

      if (scrollPosition > scrollThreshold) {
        openVideoPopup();
        popupShown = true; // Set the flag to true to prevent future triggers
      }
    }
  });
});

$("#freelance-work .slider-for-freelance").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav-freelance",
});

$("#freelance-work .slider-nav-freelance").slick({
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".slider-for-freelance",
  dots: false,
  focusOnSelect: true,
});

$("#ip-work .slider-for-ip").slick({
  slidesToShow: 1,
  slidesToScroll: 1,

  arrows: false,
  fade: true,
  asNavFor: ".slider-nav-ip",
});


$("#ip-work .slider-nav-ip").slick({
  arrows: false,
  slidesToShow: 3,

  slidesToScroll: 1,
  asNavFor: ".slider-for-ip",
  dots: false,
  focusOnSelect: true,

});

$(".slider-play-btn").on("click", function () {
  var videoUrl = $(this).data("video-url");
  var thumbnailUrl = $(this).data("thumbnail-url");
  var video = document.getElementById("my-video");

  // Update video source
  video.src = videoUrl;

  // Update poster (thumbnail)
  video.poster = thumbnailUrl;

  // Show the modal
  $(".video-modal").removeClass("hidden");
});

$(".close-btn").on("click", function () {
  var video = document.getElementById("my-video");

  // Pause and reset video
  video.pause();
  video.currentTime = 0;

  // Hide the modal
  $(".video-modal").addClass("hidden");

  // Clear the source and poster
  video.src = "";
  video.poster = "";
});
