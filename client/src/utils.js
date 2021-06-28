export function getPathParameter(def) {
    let url = new URL(window.location.href)

    let id = new Number(url.pathname.split("/")[2])

    return isNaN(id) ? def : id
}