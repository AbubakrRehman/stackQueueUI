const mode__btns__container = document.getElementById("mode__btns__container");
const stackQueue__box = document.getElementById("stackQueue__box");
const stack_mode = document.getElementById("stack_mode");
const queue_mode = document.getElementById("queue_mode");
const push_btn = document.getElementById("push_btn");
const pop_btn = document.getElementById("pop_btn");
const warning__msg = document.getElementById("warning__msg");
let mode = false;
let items = [];
let stackQueueCapacity = 10;
let counter = 0;

function emptyNode(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function fetchWarningMsg() {
    if (items.length === stackQueueCapacity) {
        warning__msg.innerText = mode ? "Stack Full!!" : "Queue Full";
        return;
    }

    if (counter !== 0 && items.length === 0) {
        counter = 0;
        warning__msg.innerText = mode ? "Stack empty. Can't pop further!!" : "Queue empty. Can't pop further!!";
        return;
    }

    warning__msg.innerText = "";

}

function renderStackQueueList() {

    emptyNode(stackQueue__box);
    items.forEach((item) => {
        let stackQueue__element = document.createElement("li");
        stackQueue__element.classList.add("stackQueue__element");
        stackQueue__element.innerText = item;
        stackQueue__box.appendChild(stackQueue__element);

    });

    fetchWarningMsg();



}


push_btn.addEventListener("click", (e) => {

    if (items.length < stackQueueCapacity) {
        if (mode) {
            items.push(++counter);
        } else {
            items.push(++counter);
        }
        renderStackQueueList();

    }

})


pop_btn.addEventListener("click", (e) => {

    if (items.length > 0) {
        if (mode) {
            items.pop();
        } else {
            items = items.slice(1);
        }
        renderStackQueueList();
    }
})


mode__btns__container.addEventListener("click", (e) => {
    console.log("mode btns container k andar");
    mode = !mode;
    if (mode) {
        queue_mode.classList.remove("black_background");
        stack_mode.classList.add("black_background");
    }
    else {
        stack_mode.classList.remove("black_background");
        queue_mode.classList.add("black_background");
    }

    counter = 0;
    items = [];
    renderStackQueueList();
})




window.addEventListener("load", (e) => {
    if (mode) {
        queue_mode.classList.remove("black_background");
        stack_mode.classList.add("black_background");
    }
    else {
        stack_mode.classList.remove("black_background");
        queue_mode.classList.add("black_background");
    }

})