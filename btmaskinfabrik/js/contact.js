$(document).ready(function (){
	$('.submit').click(function (event) {
		console.log('Clicked button')

		var name = $('.name').val()
		var email = $('.email').val()
		var subject = $('.subject').val()
		var message = $('.message').val()
		var statusElm = $('.status')
		statusElm.empty()

		if(name.length >= 2){
		statusElm.append('<div>Dit navn er godkendt</div>')
		} else {
		event.preventDefault()
		statusElm.append('<div>Angiv venligst et navn</div>')
		}

		if(email.length > 5 && email.includes('@') && email.includes('.')){
		statusElm.append('<div>Din email er godkendt</div>')
		} else {
		event.preventDefault()
		statusElm.append('<div>Angiv venligst en email</div>')
		}

		if(subject.length >= 2){
			statusElm.append('<div>Dit emne er godkendt</div>')
		} else {
		event.preventDefault()
		statusElm.append('<div>Angiv venligst et emne længere end 2 anslag</div>')
		}

		if(message.length >= 10){
			statusElm.append('<div>Din besked er godkendt</div>')
		} else{
		event.preventDefault()
		statusElm.append('<div>Skriv venligst en besked længere end 10 anslag</div>')
		}
	})
})