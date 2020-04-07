// const checkLoto = (firstname, lastname, email) => {

// 	console.log(`hello ${firstname + lastname}`);
// };


// checkLoto(onButtonClick);



	
// window.addEventListener('load', function() {
//     console.log('All assets are loaded')
// });

// var btn = document.getElementById('submit');

// var onButtonClick = function() {
	// var firstname = document.getElementById("firstname").value;
	// var lastname = document.getElementById("lastname").value;
	// var email = document.getElementById("email").value;
	// var number = document.getElementById("number").value;
	// console.log(firstname, lastname, email, number);
// }

// btn.addEventListener('click', onButtonClick);




const getInputValues = () => {
  	const firstname = document.getElementById("firstname").value;
	const lastname = document.getElementById("lastname").value;
	const email = document.getElementById("email").value;
	const number1 = document.getElementById("number1").value;
	const number2 = document.getElementById("number2").value;
	const number3 = document.getElementById("number3").value;
	const number4 = document.getElementById("number4").value;
	const number5 = document.getElementById("number5").value;
	const number6 = document.getElementById("number6").value;
	const ticket =
    number1 +
    "" +
    number2 +
    "" +
    number3 +
    "" +
    number4 +
    "" +
    number5 +
    "" +
    number6;
	
	checkLoto(firstname, lastname, email, ticket);
}

document.getElementById("submit").addEventListener('click', getInputValues);


const checkLoto = (firstname, lastname, email, ticket) => {
	console.log(typeof ticket);

	const randomNumber = Math.floor(100000 + Math.random() * 900000);
	const firstnameError = document.getElementById("firstname");
	const lastnameError = document.getElementById("lastname");
	const emailError = document.getElementById("email");
	const ticketError = document.getElementById("ticket");
	// const emailRegex = /([A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3})$/;
	const emailRegex = /^.{7,30}([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/;
	const test = email.match(emailRegex);


	const interface = document.getElementById("response");
	const inputErrorFirstname = '<p> fourni un prénom valide </p>';
	const inputErrorLastname = '<p> fourni un nom valide </p>';
	const inputErrorEmailFormat = '<p> fourni un email valide </p>';
	const inputErrorEmailPresence = '<p> fourni un email </p>';
	const inputErrorTicket = '<p> le numéro doit contenir 6 chiffres </p>';
	 
	// (firstname.length > 0 ? true : firstnameError.insertAdjacentHTML('afterend', inputErrorFirstname) && false);
	// (lastname.length > 0 ? true : lastnameError.insertAdjacentHTML('afterend', inputErrorLastname));
	// (email != ''  ? true : emailError.insertAdjacentHTML('afterend', inputErrorEmailPresence));
	// (email.match(emailRegex) ? true : emailError.insertAdjacentHTML('afterend', inputErrorEmailFormat)); 
	// (ticket.length == '6' ? true : ticketError.insertAdjacentHTML('afterend', inputErrorTicket));
	// parseInt(ticket) === randomNumber ? interface.textContent = "TU AS GAGNÉ LE MILLION !!!" : interface.textContent =`PERDU ! Les numéros gagnant étaient ${randomNumber}`;
	if (firstname.length == '') {
		firstnameError.insertAdjacentHTML('afterend', inputErrorFirstname);
		return false;
	};

	if (lastname.length == '') {
		lastnameError.insertAdjacentHTML('afterend', inputErrorLastname);
		return false;
	};

	if (email == '') {
		emailError.insertAdjacentHTML('afterend', inputErrorEmailPresence);
		return false;
	};

	if (!email.match(emailRegex) || email.length < 8  || email.length > 30) {
		emailError.insertAdjacentHTML('afterend', inputErrorEmailFormat);
		return false;
	}

	if (ticket.length != '6') {
		ticketError.insertAdjacentHTML('afterend', inputErrorTicket)
		return false;
	};

	if (parseInt(ticket) != randomNumber) {
		interface.textContent = `PERDU ! Les numéros gagnant étaient ${randomNumber}`;
		return false;
	} else {
		interface.textContent = "TU AS GAGNÉ LE MILLION !!!"
	}
}	

