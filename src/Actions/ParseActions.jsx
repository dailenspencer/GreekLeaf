import Parse from 'parse';
import ParseReact from 'parse-react';


/******************************************
Post Board Query Actions
******************************************/

export function queryPosts(universityExtension){
	var Posts = Parse.Object.extend("Posts");
    var query = new Parse.Query(Posts).descending('createdAt');
    query.equalTo("universityExtension", "Test Group");
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