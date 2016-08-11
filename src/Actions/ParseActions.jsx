import Parse from 'parse';
import ParseReact from 'parse-react';

export function checkForCurrentUser(){
  return Parse.User.current()
}


export function checkForEmail(email){
  var members = Parse.Object.extend("User")
  var query = new Parse.Query(members)
  query.equalTo("email", email)
  return query.find({
    success: function(results){
      return results
    },
    error: function(error){
      alert("Error:" + error.code + " " + error.message);
    }
  })
}

export function parseLogin(username, password){
 return Parse.User.logIn(username, password, {
  success: function(user) {
    return user;
  },
  error: function(user, error) {
    return error;
  }
});


}


export function queryForGroups(){
  var groups = Parse.Object.extend("Groups");
  var query = new Parse.Query(groups);
  return query.find({
    success: function(results){
      return results;
    },
    error: function(error){
      alert("Error:" + error.code + " " + error.message);
    }
  })
}

export function signUpUser(userInfo, organization){
  var user = new Parse.User();
  user.set("universityExtension", organization);
  user.set("username", userInfo.email);
  user.set("email", userInfo.email);
  user.set("password", userInfo.password);
  user.set("phonenumber", userInfo.phone);
  user.set("name", userInfo.name);
  user.set("MessengerNotifications", true);
  user.set("searchText", userInfo.email + userInfo.password + userInfo.phone + userInfo.name);
  user.set("address", "Incomplete");
  user.set("year", "Incomplete");
  user.set("major", "Incomplete");
  user.set("company", "Incomplete");



  return user.signUp(null, {
    success: function(user) {
      // Hooray! Let them use the app now.
      return user;
    },
    error: function(user, error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  });

}

export function parseLogout(){
  console.log('parse logout');
  return Parse.User.logOut().then(() => {
    return
  });

}


/******************************************
Post Board Query Actions
******************************************/

export function queryPosts(universityExtension){
	var Posts = Parse.Object.extend("Posts");
    var query = new Parse.Query(Posts).descending('createdAt');
    query.equalTo("universityExtension", universityExtension);
    query.include("Author");
    return query.find({
      success: function(results) {
       	return results;
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
}

export function queryForComments(PostID){
  var Comments = Parse.Object.extend("Comments");
  var query = new Parse.Query(Comments).ascending('createdAt');
  query.equalTo("PostId", PostID);
  query.include("Author");
  return query.find({
    success: function(results) {
      return results
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  })
}


export function savePost(text, files){
  var Posts = Parse.Object.extend("Posts");
  var newPost = new Posts();

  var currentUser = Parse.User.current()

  newPost.set("universityExtension", currentUser.get("universityExtension"));
  newPost.set("Author", currentUser);
  newPost.set("body", text);
  newPost.set("uplikes", []);
  newPost.set("comments", []);
  newPost.set("executive", false);

  var parseFiles = files.map(function(file){
    return new Parse.File("file", file, "image/png");
  })



  newPost.set("Attachments", parseFiles);

  return newPost.save(null, {
    success: function(post) {
      return post
    },
    error: function(post, error) {
      alert('Failed to create new object, with error code: ' + error.message);
      return error;
    }
  });
}

export function saveComment(text, postId){
  var author = Parse.User.current();

  var Comments = Parse.Object.extend("Comments");
  var newComment = new Comments();

  newComment.set("PostId", postId);
  newComment.set("Text", text);
  newComment.set("Author", author);

  return newComment.save(null, {
    success: function(comment) {
      return comment
    },
    error: function(comment, error) {
      alert('Failed to create new object, with error code: ' + error.message);
      return error;
    }
  })


}

export function saveLike(postId) {
  var currentUserName = Parse.User.current().get("name");
  var query = new Parse.Query("Posts");
  query.equalTo("objectId", postId);
  return query.find({
    success: function(results){
      var post = results[0];
      var likes = post.get('uplikes');
      if(~likes.indexOf(currentUserName)){
        likes = removeFromLikes(likes, currentUserName);
        post.set('likes', likes);
        post.save();
        return;
      } 
      likes.push(currentUserName);
      post.set('likes', likes);
      post.save();
    },
    error: function(error) {
      alert("Error:" + error.code + " " + error.message);
    }
  })
}

function removeFromLikes(likes,name){
  var index = likes.indexOf(name);
  if (index > -1) {
    likes.splice(index, 1);
  }
  return likes;
}

export function findPost(postId){
  var currentUserName = Parse.User.current().get("name");
  var query = new Parse.Query("Posts");
  query.equalTo("objectId", postId);
  return query.find({
    success: function(results){
      return results;
    },
    error: function(error) {
      alert("Error:" + error.code + " " + error.message);
    }
  })
}


/******************************************
Directory Query Actions
******************************************/
export function queryForMembers(memberStatus){
  var members = Parse.Object.extend("User")
  var query = new Parse.Query(members).ascending("name");
  query.equalTo("universityExtension", "Test Group")
  query.equalTo("memberStatus",memberStatus);
  return query.find({
    success: function(results){
      return results
    },
    error: function(error){
      alert("Error:" + error.code + " " + error.message);
    }
  })
}

export function queryForStaff(){
  var members = Parse.Object.extend("Staff")
  var query = new Parse.Query(members).ascending("type");
  query.equalTo("universityExtension", "Test Group")
  return query.find({
    success: function(results){
      return results
    },
    error: function(error){
      alert("Error:" + error.code + " " + error.message);
    }
  })
}



export function queryForFood(){
  var foodMenu = Parse.Object.extend("FoodMenu");
  var query = new Parse.Query(foodMenu);
  query.equalTo("universityExtension", "Test Group")
  query.equalTo("Date", "27 July, 2016");
  return query.find({
    success: function(results){
      return results;
    },
    error: function(error){
       alert("Error:" + error.code + " " + error.message);
    }
  })
}




/****************************
Pledge Track Query Actions
*****************************/

export function queryForLocations(){
  var currentUser = Parse.User.current();
  var universityExtension = currentUser.get("universityExtension");
  console.log(universityExtension);
  var users = Parse.Object.extend("User");
  var query = new Parse.Query(users);
  query.equalTo("universityExtension", universityExtension);
  query.equalTo("memberStatus","new");
  query.equalTo("organizationVerified", true);
  return query.find({
    success: function(results){
      return results;
    },
    error: function(error){
       alert("Error:" + error.code + " " + error.message);
    }
  })
}
