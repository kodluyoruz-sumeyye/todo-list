console.log("hello world");
const list = document.getElementById("list");
const errorToast = document.getElementById("errorToast");
const successToast = document.getElementById("successToast");
function newElement() {
  const input = document.getElementById("task");
  let userText = input.value;
  userText = userText.replace(/^\s+/, "").replace(/\s+$/, "");
  if (input.value.length <= 0 || userText === "") {
    errorToast.classList.remove("hide");
    errorToast.classList.add("show");
    setTimeout(() => {
      errorToast.classList.remove("show");
      errorToast.classList.add("hide");
    }, 3000);

    input.value = "";
  } else {
    let li = document.createElement("li");
    li.innerHTML = `<div onclick="handleDone()" class="span">${input.value}</div>
          <span class="close" onclick="handleDelete()">&times;</span>`;
    li.onclick = "handleDone()";
    list.appendChild(li);
    successToast.classList.remove("hide");
    successToast.classList.add("show");
    successTimeOut = setTimeout(() => {
      successToast.classList.remove("show");
      successToast.classList.add("hide");
    }, 3000);
  }
}

function handleDone(evt) {
  evt = window.event || evt; //window.event for IE
  let span = evt.target;
  let li = evt.path[1];
  console.log(li);
  if (!span.classList.value.includes("span-done")) {
    span.classList.add("span-done");
    li.classList.add("li-done");
  } else {
    span.classList.remove("span-done");
    li.classList.remove("li-done");
  }
}
function handleDelete(evt) {
  evt = window.event || evt; //window.event for IE
  let li = evt.path[1];
  li.style.display = "none";
}
