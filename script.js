// Navbar Function
function sidebar() {
	const sidebar = document.querySelector(".sidebar");
	sidebar.style.display = "flex";
}
function hide() {
	const sidebar = document.querySelector(".sidebar");
	sidebar.style.display = "none";
}

//button redirect functions

function ser_btn(link) {
	console.log(link.value);
	location.href = "./services";
}

function banner(link) {
	console.log(link.value);
	location.href = "./banner-des";
}

function webdev(link) {
	console.log(link.value);
	location.href = "./web-dev";
}

function videdit(link) {
	console.log(link.value);
	location.href = "./video-edit";
}

function photoedit(link) {
	console.log(link.value);
	location.href = "./photo-edit";
}

function uiux(link) {
	console.log(link.value);
	location.href = "./ui-ux";
}

function logodes(link) {
	console.log(link.value);
	location.href = "./logo-des";
}

function hire_btn(link) {
	console.log(link.value);
	location.href = "./#hire-us";
}

//image slider
const carousel = document.querySelector(".carousel"),
	firstImg = carousel.querySelectorAll("img")[0],
	arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false,
	isDragging = false,
	prevPageX,
	prevScrollLeft,
	positionDiff;

const showHideIcons = () => {
	// showing and hiding prev/next icon according to carousel scroll left value
	let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
	arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
	arrowIcons[1].style.display =
		carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons.forEach((icon) => {
	icon.addEventListener("click", () => {
		let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
		// if clicked icon is left, reduce width value from the carousel scroll left else add to it
		carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
		setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
	});
});

const autoSlide = () => {
	// if there is no image left to scroll then return from here
	if (
		carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
		carousel.scrollLeft <= 0
	)
		return;

	positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
	let firstImgWidth = firstImg.clientWidth + 14;
	// getting difference value that needs to add or reduce from carousel left to take middle img center
	let valDifference = firstImgWidth - positionDiff;

	if (carousel.scrollLeft > prevScrollLeft) {
		// if user is scrolling to the right
		return (carousel.scrollLeft +=
			positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
	}
	// if user is scrolling to the left
	carousel.scrollLeft -=
		positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
	// updatating global variables value on mouse down event
	isDragStart = true;
	prevPageX = e.pageX || e.touches[0].pageX;
	prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
	// scrolling images/carousel to left according to mouse pointer
	if (!isDragStart) return;
	e.preventDefault();
	isDragging = true;
	carousel.classList.add("dragging");
	positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
	carousel.scrollLeft = prevScrollLeft - positionDiff;
	showHideIcons();
};

const dragStop = () => {
	isDragStart = false;
	carousel.classList.remove("dragging");

	if (!isDragging) return;
	isDragging = false;
	autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

//EMailJS code (Contact form)

function sendMessage() {
	(function () {
		emailjs.init("MPSGUwsps1r_YopKl");
	})();

	var params = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		message: document.getElementById("message").value,
	};

	const serviceID = "service_1oky7ma";
	const templateID = "template_vc1byil";

	emailjs
		.send(serviceID, templateID, params)
		.then((res) => {
			document.getElementById("name").value = "";
			document.getElementById("email").value = "";
			document.getElementById("message").value = "";
			console.log(res);
			alert("Your message sent successfully!");
		})
		.catch((err) => console.log(err));
}

//EMailJS code (Hire form)

function hire() {
	(function () {
		emailjs.init("MPSGUwsps1r_YopKl");
	})();

	var params = {
		email: document.getElementById("h-email").value,
		message: document.getElementById("h-message").value,
	};

	const serviceID = "service_41spcya";
	const templateID = "template_gdnwm4w";

	emailjs
		.send(serviceID, templateID, params)
		.then((res) => {
			document.getElementById("h-email").value = "";
			document.getElementById("h-message").value = "";
			console.log(res);
			alert("Your Hire request sent successfully!");
		})
		.catch((err) => console.log(err));
}

//EMailJS code (NFT request form)

function nft_btn() {
	(function () {
		emailjs.init("MPSGUwsps1r_YopKl");
	})();

	var params = {
		email: document.getElementById("h-email").value,
		message: document.getElementById("h-message").value,
	};

	const serviceID = "service_9imffya";
	const templateID = "template_vc1byil";

	emailjs
		.send(serviceID, templateID, params)
		.then((res) => {
			document.getElementById("h-email").value = "";
			document.getElementById("h-message").value = "";
			console.log(res);
			alert("Order Request Sent Successfully!");
		})
		.catch((err) => console.log(err));
}
