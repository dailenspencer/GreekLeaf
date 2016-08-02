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
  console.log('query for groups');
  var groups = Parse.Object.extend("Groups");
  var query = new Parse.Query(groups);
  return query.find({
    success: function(results){
      console.log('results',results);
      return results;
    },
    error: function(error){
      alert("Error:" + error.code + " " + error.message);
    }
  })
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
  console.log(universityExtension);
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
  var query = new Parse.Query(Comments).descending('createdAt');
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
      console.log(results);
      return results;
    },
    error: function(error){
       alert("Error:" + error.code + " " + error.message);
    }
  })
}