let x = 0;

const increment = () => {

    x++;
}

const on_x_change = ()=> {
    const x_container = document.getElementById("x-container");
    x_container.innerText = x.toString();

}


const increment_button = document.getElementById("increment-button");

increment_button.addEventListener(("click"), ()=> {

    increment();
    on_x_change();
    console.log(x);
})