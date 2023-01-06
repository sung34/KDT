const navBtns = document.querySelectorAll(".navbar li");

function onNavBtnClick(event){
  const selectedBtnName = event.target.innerText.toLowerCase();
  const selectedBtn = document.getElementsByClassName(selectedBtnName);
  selectedBtn.classList.toggle("hidden");
}

navBtns.forEach(btn => btn.addEventListener("click", onNavBtnClick));

 