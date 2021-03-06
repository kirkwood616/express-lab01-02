const body = document.querySelector("body");
const resultsDiv = document.getElementById("results");
const button = document.getElementById("load");
const inputForm = document.getElementById("inputForm");
const idForm = document.getElementById("idForm");
const allForm = document.getElementById("allForm");

// DISPLAY ALL RESULTS
allForm.addEventListener("submit", (e) => {
	e.preventDefault();
	clear();
	runAll();
});

// DISPLAY ITEM BY ID #
idForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let idInput = document.getElementById("idNumber").value;
	clear();
	runId(idInput);
});

// DISPLAY BY SEARCH QUERY PARAMS
inputForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let inputResult = "?";
	let startsWith = document.getElementById("startsWith").value;
	let maxPrice = document.getElementById("maxPrice").value;
	let pageSize = document.getElementById("pageSize").value;
	if (startsWith) {
		inputResult += `prefix=${startsWith}&`;
	}
	if (maxPrice) {
		inputResult += `maxPrice=${maxPrice}&`;
	}
	if (pageSize) {
		inputResult += `pageSize=${pageSize}&`;
	}
	clear();
	runQuery(inputResult);
});

// REMOVE ALL RESULTS FROM PAGE
function clear() {
	const dataContent = document.querySelectorAll(".dataResult");
	if (dataContent.length) {
		dataContent.forEach((i) => i.remove());
	}
}

// SEARCH BY ID API CALL
function runId(value) {
	const apiPromise = fetch(
		"http://localhost:3000/api/cart-items/" + value
	).then((res) => res.json());
	const results = apiPromise.then((data) => {
		const dataDiv = document.createElement("div");
		dataDiv.classList.add("dataResult");

		let idNum = data.id;
		let idProduct = data.product;
		let idPrice = data.price;
		let idQuantity = data.quantity;

		const idTitle = document.createElement("span");
		idTitle.classList.add("idSpan");
		idTitle.innerText = "ID #: " + idNum;
		dataDiv.appendChild(idTitle);

		const productTitle = document.createElement("span");
		productTitle.classList.add("productSpan");
		productTitle.innerText = "Product Name: " + idProduct;
		dataDiv.appendChild(productTitle);

		const priceTitle = document.createElement("span");
		priceTitle.classList.add("priceSpan");
		priceTitle.innerText = "Price: $" + idPrice;
		dataDiv.appendChild(priceTitle);

		const quantityTitle = document.createElement("span");
		quantityTitle.classList.add("priceSpan");
		quantityTitle.innerText = "Stock Qty: " + idQuantity;
		dataDiv.appendChild(quantityTitle);

		resultsDiv.appendChild(dataDiv);
	});
}

// SHOW ALL ITEMS API CALL
function runAll() {
	const apiPromise = fetch("http://localhost:3000/api/cart-items/").then(
		(res) => res.json()
	);
	const results = apiPromise.then((data) => {
		for (let i = 0; i < data.length; i++) {
			const dataDiv = document.createElement("div");
			dataDiv.classList.add("dataResult");

			let idNum = data[i].id;
			let idProduct = data[i].product;
			let idPrice = data[i].price;
			let idQuantity = data[i].quantity;

			const idTitle = document.createElement("span");
			idTitle.classList.add("idSpan");
			idTitle.innerText = "ID #: " + idNum;
			dataDiv.appendChild(idTitle);

			const productTitle = document.createElement("span");
			productTitle.classList.add("productSpan");
			productTitle.innerText = "Product Name: " + idProduct;
			dataDiv.appendChild(productTitle);

			const priceTitle = document.createElement("span");
			priceTitle.classList.add("priceSpan");
			priceTitle.innerText = "Price: $" + idPrice;
			dataDiv.appendChild(priceTitle);

			const quantityTitle = document.createElement("span");
			quantityTitle.classList.add("priceSpan");
			quantityTitle.innerText = "Stock Qty: " + idQuantity;
			dataDiv.appendChild(quantityTitle);

			resultsDiv.appendChild(dataDiv);
		}
	});
}

// SEARCH BY QUERY PARAMS API CALL
function runQuery(value) {
	const apiPromise = fetch("http://localhost:3000/api/cart-items" + value).then(
		(res) => res.json()
	);
	const results = apiPromise.then((data) => {
		for (let i = 0; i < data.length; i++) {
			const dataDiv = document.createElement("div");
			dataDiv.classList.add("dataResult");

			let idNum = data[i].id;
			let idProduct = data[i].product;
			let idPrice = data[i].price;
			let idQuantity = data[i].quantity;

			const idTitle = document.createElement("span");
			idTitle.classList.add("idSpan");
			idTitle.innerText = "ID #: " + idNum;
			dataDiv.appendChild(idTitle);

			const productTitle = document.createElement("span");
			productTitle.classList.add("productSpan");
			productTitle.innerText = "Product Name: " + idProduct;
			dataDiv.appendChild(productTitle);

			const priceTitle = document.createElement("span");
			priceTitle.classList.add("priceSpan");
			priceTitle.innerText = "Price: $" + idPrice;
			dataDiv.appendChild(priceTitle);

			const quantityTitle = document.createElement("span");
			quantityTitle.classList.add("priceSpan");
			quantityTitle.innerText = "Stock Qty: " + idQuantity;
			dataDiv.appendChild(quantityTitle);

			resultsDiv.appendChild(dataDiv);
		}
	});
}
