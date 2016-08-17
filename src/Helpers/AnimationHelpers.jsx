
export function showProfileModal(postData){
	var author = postData.author
	var name = author.get('name')

	$('.ProfileModal').addClass('animateUp')
	$('.ProfileModal').removeClass('animateDown')
}

export function hideProfileModal(){
	console.log('hide profile modal')
	$('.ProfileModal').addClass('animateDown')
	$('.ProfileModal').removeClass('animateUp')

}