const baseURL = "../src/titles/";

function changeLink(pageName) {
    console.log("working");
    var frame = document.getElementById("products-frame");
    frame.src = `${baseURL}${pageName}.html`;
}
changeLink("Saree");
changeLink("Lehnga");
changeLink("SummerCollections");
changeLink("WinterCollections");
changeLink("Suits");
changeLink("Kurti");
