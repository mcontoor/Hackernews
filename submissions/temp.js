document.getElementById("new_comment_form").style.display ="none";

function myFunction() {
    console.log("asd");
// document.getElementById("new_comment_form").style.display ="block";
    if(document.getElementById("new_comment_form").style.display === "block"){
        document.getElementById("new_comment_form").style.display ="none";
    }
    else{
        document.getElementById("new_comment_form").style.display ="block";
    }

  }

// to prevent the default action of submit element use the preventDefault method
  function handleSubmit(e){
    e.preventDefault();
    console.log("sub");
    //to get value of text from textarea and inputusing jquery
    var commentText= $('textarea').val();
    var input= $('input:text').val();

    console.log(commentText);
    console.log(input);

    // add comment and name to the ul
    $("ul").append('<li class = "comment"><hr><article><p class="c">'+commentText+'</p><span class="author">'+input+'</span></article></li>');


    // to clear the comment and name function fields and set to default
  }