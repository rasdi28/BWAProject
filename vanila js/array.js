const namaMantan = ["nana","nini","nunu", "nene","nono"];

namaMantan.forEach( function(item,index,array){
  console.log(item, index);

});

namaMantan.push("dewi");
console.log(namaMantan);

namaMantan.pop();
console.log(namaMantan);

namaMantan.shift();
console.log(namaMantan);

var pos = namaMantan.indexOf("nini")+1;
console.log(pos);

var products = ["senter","radio","antena","tv","laptop"];

document.write("<h3> Daftar Produk : </h3>");
document.write("<ol>");
products.forEach((data)=>{
  document.write(`<li>${data}</li>`);
});

products.push("alarm","gembok","paku","cat");
document.write(products);
document.write("</ol>");
