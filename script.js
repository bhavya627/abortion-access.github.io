/* .js files add interaction to your website */

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if(scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  var name = document.getElementById("name").value;
  var state = document.getElementById("state").value;

displayScript.innerHTML = "Hello , my name is " + name + " and I live in " + state + ". I am contacting you to urge you to protect reproductive rights in " + state + ". Abortion bans don’t actually lower abortion rates. This study found that between 2008 and 2011, despite the fact that many states had reduced access to abortion, there was no corralation between these restrictions and the abortion rates. Similar results are found in this research, which analyzed the aftermath in 23 states after they passed laws restricting abortion access. This is because that abortion bans don’t prevent people from having an abortion- they prevent people from having a safe  abortion. Unsafe abortions can have servere consequences including death, severe bleeding, infection, and blood poisoning. I urge you to take this into consideration when making a decision. Thank you, " + name;
}
