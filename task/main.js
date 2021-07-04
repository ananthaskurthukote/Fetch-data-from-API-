 var preloader;

function preload(opacity) {
    if(opacity <= 0) {
        showContent();
    }
    else {
        preloader.style.opacity = opacity;
        window.setTimeout(function() { preload(opacity - 0.05) }, 100);
    }
}

function showContent() {
    preloader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    preloader = document.getElementById('preloader');
    preload(1);
});




var con=0;
var div=document.getElementById("cardDiv");

function getPost(){
	fetch('https://reqres.in/api/users')
	.then((res)=>{
		return res.json();
	})
	.then((post)=>{
		for(let index=0; index<post.data.length; index++){
			div.innerHTML+=`
			
			<div class="card col-4 m-1						 mx-auto">
			<div class="card-body">
			<img class="card-title" src="${post.data[index].avatar}"></img>
			<h5 class="card-title">First Name: ${post.data[index].first_name}</h5>
			<h5 class="card-title">Last Name: ${post.data[index].last_name}</h5>

  <input type="hidden" id="${post.data[index].id}" name="Id" value="${post.data[index].id}">

			<p class="card-text"></p>
			</div>
			</div>
<br>				`
			con=con+1;
		}
	})

	.catch((error)=>{
		console.log(error);
	})

}




$(function() {
    $(document).on("click", '.card-body', function() {
        location.href = "newPage.html";
			//$(location).attr('href', 'https://www.pythonprogramming.in/');

    });
});
/*<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>*/





