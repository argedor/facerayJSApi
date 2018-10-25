faceDetect:function(imgUrl)
{
	var url = 'http://'+faceray.ip+'/faceray/imgupload';
	const Http = new XMLHttpRequest();
		 Http.open('POST', url, true);
		 Http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	 	 var data = "apitxt=age3&";
	 		data += "imgurl="+imgUrl
	 	 Http.send(data);
	 Http.onreadystatechange=(e)=>{
    	if(Http.readyState==4 || Http.readyState==200)
    	{
    		var response = JSON.parse(Http.responseText);
    		console.log(response);
    	}
	}
}
