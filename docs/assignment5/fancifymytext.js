function handleClick() {
    document.getElementById("text").style.fontSize = "24pt"
}

function handleChange() {
    const el = document.getElementById("check")

    if (el.checked)
    {
        document.getElementById("text").style.fontWeight = "bold"
        document.getElementById("text").style.color = "blue"
        document.getElementById("text").style.textDecoration = "underline"
    }
    else
    {
        document.getElementById("text").style.fontWeight = "inherit"
        document.getElementById("text").style.color = "black"
        document.getElementById("text").style.textDecoration = "none"
    }
}

function handleMoo() {
    var t = document.getElementById("text").value
    t = t.toUpperCase()
    t = t.split(" ")
    t[t.length - 1] = t[t.length - 1].slice(0, -1) + "-Moo" + t[t.length - 1].charAt(t[t.length - 1].length - 1)
    t = t.join(" ")
    document.getElementById("text").value = t
}