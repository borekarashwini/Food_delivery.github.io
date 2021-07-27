let items = JSON.parse(sessionStorage.items);
let list = JSON.parse(sessionStorage.list);
let listv = JSON.parse(sessionStorage.listv);
let price = JSON.parse(sessionStorage.price);
let i = "";
let total=0;
for(j=0;j<list.length;j++){
	i+="<tr><td width='70%'><center>"+list[j]+"</center></td>";
	i+="<td width='15%'><center>"+listv[j]+"</center></td>";
	i+="<td width='15%'><center>"+price[j]+"</center></td></tr>";
	total+=price[j]*listv[j];
}
let o="<tr><td width='70%'><center>Total Price</center></td><td width='30%'><center>"+total+"</center></td></tr>";
document.getElementById("totalp").innerHTML=o;
document.getElementById("itemlist").innerHTML=i;
