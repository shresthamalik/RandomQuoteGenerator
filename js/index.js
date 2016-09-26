var quot="";
var author="";

$(document).ready(function(){
  $("#next").on("click", function(){  getQuote();
  });
  $("#tweet").on("click",function(){ 
    var url = "https://twitter.com/intent/tweet?text=" + quot;
    $("#tweet").attr('href',url);
  });
  
});

function getQuote(){
  //call api
  var apiCall=$.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) { //console.dir((data.source)); 
      quot=data.quote;
      author=data.author;
      
      $("#quote").html("\""+quot +"\"");
      //$("#author").html(JSON.stringify(author));
      $("#author").html(author);     
//decodeURIComponent(url);        
  },
    error: function(err) { 
      alert(err); 
    },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "OW4qbAAJBbmshlPxb4GOiuOJB5wZp1iUjdbjsndFtLgwhUdjLi"); // Enter here your Mashape key
    }
});
  
}