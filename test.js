var btn = document.createElement("BUTTON");
btn.innerHTML = `<a href="#" class="float">
<i class="fa fa-plus my-float"></i>
</a>`;
document.body.appendChild(btn);
var style = document.createElement('style');
  style.innerHTML = `
.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#0C9;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
}

.my-float{
	margin-top:22px;
}
  `;
  document.head.appendChild(style);
