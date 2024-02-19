function newcard() {
  const content = document.getElementById("content")
  content.innerHTML = ""

  let submitCard = createForm()
  return submitCard
}

function createForm() {
  let f = document.createElement("form")
  f.setAttribute("method", "post")
  f.setAttribute("action", "#")

  let title = document.createElement("input")
  title.setAttribute("type", "text")
  title.setAttribute("name", "Title")

  let des = document.createElement("textarea")
  des.setAttribute("rows", "50")
  des.setAttribute("cols", "50")

  let b = document.createElement("button")
  b.type = "button"
  b.id = "submit"
  b.innerHTML = "Submit"

  f.appendChild(title)
  f.appendChild(des)
  f.appendChild(b)

  content.appendChild(f)
  
  let a;
  
  document.getElementById("submit").addEventListener("click", () => {
    a = submit(title.value, des.value)
  })

  return a
}

function submit(title, des) {

  let array = {title:title, description:des}
  return array

}

export {newcard}
