let dark_val = localStorage.getItem("darktoggle");

const onDark = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darktoggle", "right");
}

const offDark = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darktoggle", "left");
}

const toggle = document.getElementById("darkMode");

if(dark_val === 'right') {
  onDark();
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  dark_val = localStorage.getItem("darktoggle");
  if(toggle.checked){
    onDark();
  } else {
    offDark();
  }
})