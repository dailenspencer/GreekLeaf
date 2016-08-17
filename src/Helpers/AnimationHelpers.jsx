
export function showProfileModal(postData){
	var author = postData.author
	var profilePicture = author.get('ProfilePicture')
	var name = author.get('name')
	var phoneNumber = author.get('phonenumber')
	var email = author.get('email')
	var address = author.get('address')
	var year = author.get('year')
	var major = author.get('major')
	var company = author.get('company')
	
	$('.ProfileModalImage').attr('src', profilePicture.url());
	$('.ProfileModalInfoName').text(name)
	$('.ProfileModalInfoPhone').text(phoneNumber)
	$('.ProfileModalInfoEmail').text(email)
	$('.ProfileModalInfoAddress').text(address)
	$('.ProfileModalInfoYear').text(year)
	$('.ProfileModalInfoMajor').text(major)
	$('.ProfileModalInfoCompany').text(company)

	$('.ProfileModal').addClass('animateUp')
	$('.ProfileModal').removeClass('animateDown')
}

export function hideProfileModal(){
	console.log('hide profile modal')
	$('.ProfileModal').addClass('animateDown')
	$('.ProfileModal').removeClass('animateUp')

}