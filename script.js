const menu_icon = document.querySelector(".ri-menu-3-fill")
const menu = document.querySelector(".menu")
const close_icon=document.querySelector(".ri-close-large-line")

console.log(menu_icon)
const handleMenuClick = () => {
    menu.style.display = "flex";
}
menu_icon.addEventListener("click", handleMenuClick)
const handleCloseClick = () => {
    menu.style.display="none"
}
close_icon.addEventListener("click",handleCloseClick)
