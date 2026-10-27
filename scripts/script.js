const select = document.getElementById("select");
const desc = document.getElementById("desc");

function changeVal() {
    const val = select.value;
    if (val === "cpp") desc.textContent = "bunlar guzel seviyom bunlari ama cok zor helping pls yaa gotum terliyo proje yaparken ama ana dilim budur meen";
    else if (val === "java") desc.textContent = "android eycede konsolde bok gibiyim aslinda ikisindede kotuyum ama nys ya";
    else if (val === "python") desc.textContent = "normal dil abi peak";
    else if (val === "js") desc.textContent = "html ile birlikte kodlama disinda kodlamayi bilmiyom ama anlasilir";
    else if (val === "rust") desc.textContent = "terket burayi abi sen ol ya yasama sen";
    else if (val === "asm") desc.textContent = "zoruz abi piciz abi ocuz abi";
    else if (val === "html") desc.textContent = "guzel (yazmaya usendim iyi isteq)";
}