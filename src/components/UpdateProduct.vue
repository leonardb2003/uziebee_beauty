
<!-- <script>
function sorttbl() {
  create.sort();
  create.sort((a, b) => {
    if (a.productName.toLowerCase() < b.productName.toLowerCase()) return -1;
    if (a.productName.toLowerCase() > b.productName.toLowerCase()) return 1;
    return 0;
  });
  localStorage.setItem("create", JSON.stringify(create));
  document.querySelector(".prods").innerHTML = "";
  getTable();
}
//Delete
let g = document.querySelector("#bin");
function deleteBtn(r) {
  let id = document.querySelector(".no").value;
  let productName = document.querySelector("#name").value;
  let processor = document.querySelector("#chip").value;
  let price = document.querySelector("#price").value;
  let color = document.querySelector("#color").value;
  let editC = document.querySelector("#editBtn").value;
  let p = r.parentNode.parentNode.rowIndex;
  document.getElementById("tableData").deleteRow(p);
}
///UPDATE
let q=0
function updateItems(q){
  let info =create[q -1];
  console.log(info);
  document.querySelector("#editId").value = info.id;
  document.querySelector("#editName").value = info.productName;
  document.querySelector("#editChip").value = info.processor;
  document.querySelector("#editColor").value = info.color;
  document.querySelector("#editPrice").value = info.price;
  q = 1;
}
</script>  -->
