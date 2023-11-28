
const top_nav_buttons_expanded = {
    "top-nav-item-tutorials": false,
    "top-nav-item-exercises": false,
    "top-nav-item-certificates": false,
    "top-nav-item-services": false
}

for (const id of Object.keys(top_nav_buttons_expanded))
{
    const element = document.getElementById(id)
    element.addEventListener(("click"), () => {
        const expanded = !top_nav_buttons_expanded[id]
        top_nav_buttons_expanded[id] = expanded
    
        if (expanded) {
            element.classList.remove("arrow-down")
            element.classList.add("arrow-up")
            document.getElementById("nav-menu").hidden=false
        }
        else {
            element.classList.remove("arrow-up")
            element.classList.add("arrow-down")
            document.getElementById("nav-menu").hidden=true

        }
    })
}
