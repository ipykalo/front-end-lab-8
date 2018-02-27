let rootNode = document.getElementById("root");
let treeView = document.createElement("div");
rootNode.appendChild(treeView);

function domTree(obj, parentDomElement) {
	for (let prop in obj) {
		let value = obj[prop];

		if (isFolder(value)) {
			let newDomParentElement = createFolder(value, parentDomElement);
			if (isNotEmpty(value)) {
				domTree(value.children, newDomParentElement);
			} else {
				let i = document.createElement("i");
				i.innerText = "Folder is empty";
				newDomParentElement.appendChild(i);
			}
		} else {
			createFile(value, parentDomElement);
		}
	}
}

domTree(structure, treeView);

function createFolder(obj, parentDomElement) {
	let ul = document.createElement("ul");
	ul.classList.add("folder");

	//create div tag
	let div = document.createElement("div");

	//create p tag
	let p = document.createElement("p");
	p.style.cssText = "cursor: pointer";

	let span = document.createElement("span");
	span.innerText = obj["title"];
	p.appendChild(span);
	// create i tag
	let i = document.createElement("i");
	i.classList.add("material-icons");
	i.innerText = "folder";

	p.insertBefore(i, span);
	ul.appendChild(p);

	p.onclick = function(e) {
		changeVisibilityOfChildren(p);
		e.stopPropagation();
	};
	parentDomElement.appendChild(ul);

	return ul;
}

function changeVisibilityOfChildren(obj) {
	let element = obj,
		siblings = [];
	while ((element = element.nextElementSibling)) {
		siblings.push(element);
	}

	for (let i = 0; i < siblings.length; i++) {
		let sibling = siblings[i];

		if (sibling.style.display === "none") {
			sibling.style.display = "block";
			obj.querySelector("i").innerText = "folder_open";
		} else {
			sibling.style.display = "none";
			obj.querySelector("i").innerText = "folder";
		}
	}
}

function createFile(obj, parentDomElement) {
	let li = document.createElement("li");
	li.classList.add("file");

	//create p tag
	let p = document.createElement("p");
	let span = document.createElement("span");
	span.innerText = obj["title"];
	p.appendChild(span);

	// create i tag
	let i = document.createElement("i");
	i.classList.add("material-icons");
	i.innerText = "insert_drive_file";
	p.insertBefore(i, span);
	li.appendChild(p);

	li.onclick = function(e) {
		e.stopPropagation();
	};
	parentDomElement.appendChild(li);
}

function isNotEmpty(obj) {
	return obj.hasOwnProperty("children") && obj.children instanceof Array;
}

function isFolder(obj) {
	return obj.folder != undefined && obj.folder === true;
}
