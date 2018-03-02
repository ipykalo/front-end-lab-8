let parentDom = document.querySelector("#root");

// Start creating page 1
(function tankPreview(array) {
	let div = document.createElement("div");
	div.classList.add("thumbnails");
	let h2 = document.createElement("h2");
	h2.innerText = "Most popular tanks";
	div.appendChild(h2);
	parentDom.appendChild(div);

	for (let i in array) {
		let element = array[i];
		createDomPreview(element, div);
	}
})(tanks);

function createDomPreview(elemObj, domElement) {
	let a = document.createElement("a");
	let img = document.createElement("img");
	let imgFlag = document.createElement("img");
	let div = document.createElement("div");
	let spanLevel = document.createElement("span");
	let spanName = document.createElement("span");

	a.setAttribute("title", "Click to details");
	img.setAttribute("src", elemObj.preview);
	a.appendChild(img);
	a.appendChild(div);
	imgFlag.setAttribute("src", elemObj.country_image);
	imgFlag.setAttribute("title", elemObj.country);
	div.appendChild(imgFlag);
	spanLevel.innerHTML = elemObj.level;
	spanLevel.classList.add("level");
	spanName.innerHTML = elemObj.model;
	spanName.classList.add("name");
	spanName.setAttribute("title", elemObj.model);

	div.appendChild(spanLevel);
	div.appendChild(spanName);
	domElement.appendChild(a);

	a.addEventListener("click", () => (location.hash = elemObj.model));
}

// End creating page 1

window.addEventListener("hashchange", function() {
	let hash = location.hash;
	let model = hash.slice(1);
	tanks.forEach(function(item) {
		if (model === item.model) {
			tankDetails(item);
		}
	});
});

// Start creating page 2
function tankDetails(obj) {
	document.querySelector(".thumbnails").style.display = "none";
	let div = document.createElement("div");
	let h2 = document.createElement("h2");
	let imgFlag = document.createElement("img");
	let spanLevel = document.createElement("span");
	let spanName = document.createElement("span");
	let p = document.createElement("p");
	let divContainerTable = document.createElement("div");
	let imgTank = document.createElement("img");
	let a = document.createElement("a");

	div.classList.add("tank-details");
	div.appendChild(h2);
	imgFlag.setAttribute("src", obj.country_image);
	imgFlag.setAttribute("title", obj.country);
	h2.appendChild(imgFlag);
	spanName.innerText = obj.model;
	h2.appendChild(spanName);
	spanLevel.innerText = `( Level ${obj.level} )`;
	spanLevel.style.cssText = "text-transform: none;";
	h2.appendChild(spanLevel);
	p.innerText = "Preview";
	div.appendChild(p);
	divContainerTable.classList.add("count-table");
	div.appendChild(divContainerTable);
	imgTank.setAttribute("src", obj.preview);
	divContainerTable.appendChild(imgTank);
	parentDom.appendChild(div);
	a.innerText = "Back to list view";
	parentDom.appendChild(a);
	a.addEventListener("click", () => window.history.go(0));

	createTankDetailsTable(obj.details, divContainerTable);
}

function createTankDetailsTable(obj, parentElemrnt) {
	let cell, row, cellText;
	let table = document.createElement("table");
	let caption = document.createElement("caption");

	caption.innerText = "Characteristic";
	parentElemrnt.appendChild(table);
	table.appendChild(caption);

	for (let i in obj) {
		row = document.createElement("tr");

		for (let k = 0; k < 2; k++) {
			cell = document.createElement("td");
			if (k % 2 === 0) {
				if (i.indexOf("_")) {
					cellText = document.createTextNode(i.replace(/_/g, " "));
					cell.appendChild(cellText);
				}
			} else {
				cellText = document.createTextNode(obj[i]);
				cell.appendChild(cellText);
			}

			row.appendChild(cell);
		}
		table.appendChild(row);
	}
}
