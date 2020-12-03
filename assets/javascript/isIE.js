function isIE() {
  const ua = navigator.userAgent;
  const isIe = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return isIe;
};
/* Create an alert to show if the browser is IE or not */
if (isIE()) {
  alert('This website is most compatible with Chrome, FireFox, Safari, or Edge. Please download Edge.');
  window.location.replace("https://www.microsoft.com/en-us/edge");
} else {
}
