function newcard() {
  const content = document.getElementById("content")
  content.innerHTML = ""

  createForm() 
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

  f.appendChild(title)
  f.appendChild(des)

  content.appendChild(f)
}

export {newcard}
