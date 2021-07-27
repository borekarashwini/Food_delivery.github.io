//order window
let list = [];
let listv = [];
let totalv=0;
let items = [["Pav Bhaji","Samosa","Pizza","Pasta","Biryani","Chole Bharure","Dosa","Noodles"],
			 ["Daily Basket","Spice Basket","Snacks Basket","Dairy Basket","Fruit Basket","Vegetable Basket","Baby Care Basket","Women Hygiene Basket"],
			 ["Hydroxychloroquine Tablets","Favipiravir Tablets","Vitamin B Tablets","Vitamin C Tablets","Paracetamol","N-95 Mask","Sanitizer"]];
let price = [[100,20,120,45,200,120,90,70],
			  [350,150,75,300,210,550,520,250],
			  [182,1200,120,90,60,170,100]];
let pricel = [];
function a(l,i){
	totalv++;
	let o = document.getElementById("cartvalue");
	o.innerHTML = totalv;
	let flag=0;
	for(j=0;j<list.length;j++){
		if(list[j]==items[l][i]){flag=1;break;}
	}
	if(flag==1)listv[j]++;
	else {list[list.length] = items[l][i];listv[listv.length]=1;pricel[pricel.length]=price[l][i];}
}

function cartwindow(){
	sessionStorage.items = JSON.stringify(items);
	sessionStorage.list = JSON.stringify(list);
	sessionStorage.listv = JSON.stringify(listv);
	sessionStorage.price = JSON.stringify(pricel);
	window.location.href = 'order.html';
}
