let link = "google";

a = document.links;

Array.from(a).forEach(function(element) {
    if(element.href.includes(link)) {
    console.log(element);
}})
