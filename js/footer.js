const notification = $("#notification");

function copyUrl() {
  navigator.clipboard.writeText("+54 9 11 3668-9258");
  notification.css("animation", "notification-up .2s ease-out 0s 1 forwards");

  setTimeout(() => {
    notification.css(
      "animation",
      "notification-down .3s ease-in 0s 1 forwards"
    );
  }, 2000);
}
