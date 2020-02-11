// function prototype 
function UI() {
    this.inputValue = document.querySelector("#inputValue");
    this.clear_item = document.querySelector(".clear-item");
    this.form = document.querySelector("form");
    this.clear_item.addEventListener("click", this.removeAll)
    this.form.addEventListener("submit", this.addItem)
}

// add item 
UI.prototype.addItem = function(e) {
    e.preventDefault();
    if (this.inputValue.value == "") {
        document.querySelector(".alert-show > h2").style.display = "block"
        document.querySelector(".alert-show > h2").classList.add("alert")
        document.querySelector(".alert-show > h2").innerHTML = "Please Input Someting"
        setTimeout(function() {
        document.querySelector(".alert-show > h2").style.display = "none"

        }, 1000)
    } else {
        let div = document.createElement("li");
        div.innerHTML = ` <p>${this.inputValue.value} </p> <i class="far fa-trash-alt"></i>`;
        document.querySelector(".result-list-item").appendChild(div);
        document.querySelector(".alert-show > h2").classList.remove("alert")
        document.querySelector(".alert-show > h2").style.display = "block"
        document.querySelector(".alert-show > h2").innerHTML = this.inputValue.value;
        setTimeout(function() {
        document.querySelector(".alert-show > h2").style.display = "none"

        }, 1000);
    }
    this.inputValue.value = ""
}
document.querySelector(".result-list-item").addEventListener("click", function(e) {
    if (e.target.classList.contains("fa-trash-alt")) {
        e.target.parentElement.remove();
        document.querySelector(".result-alert > h2").classList.remove("alert")
        document.querySelector(".result-alert > h2").style.display = "block"
        document.querySelector(".result-alert > h2").innerHTML = e.target.previousElementSibling.innerHTML;
        setTimeout(function() {
        document.querySelector(".result-alert > h2").style.display = "none"

        }, 1000)
    }
})

// remove all item 
UI.prototype.removeAll = function() {
    let li = document.querySelector(".result-list-item");
    if (li.children.length < 1) {
        document.querySelector(".result-alert > h2").style.display = "block"
        document.querySelector(".result-alert > h2").classList.add("alert")
        document.querySelector(".result-alert > h2").innerHTML = "No More Items To Delete";
        setTimeout(function() {
        document.querySelector(".result-alert > h2").style.display = "none"

        }, 1000)
    } else {
        for (let a = 0; a < li.children.length; a++) {
            li.children[a].classList.add("d-none");
        }
    }
};

let init = new UI();