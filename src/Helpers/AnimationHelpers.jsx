import {createMaterialAvatar, postEntryInitialAvatar} from './RenderHelpers'
export function showProfileModal(user){
	var author = user

	var profilePictureFile = author.get('ProfilePicture')
	var avatar;
	if(profilePictureFile){
      avatar = profilePictureFile.url()
    } else {
      avatar = './Images/user.png'
    }


	
	var name = author.get('name')
	var phoneNumber = author.get('phonenumber')
	var email = author.get('email')
	var address = author.get('address')
	var year = author.get('year')
	var major = author.get('major')
	var company = author.get('company')
	
	$('.ProfileModalImage').attr('src', avatar);
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
	$('.ProfileModal').addClass('animateDown')
	$('.ProfileModal').removeClass('animateUp')

}