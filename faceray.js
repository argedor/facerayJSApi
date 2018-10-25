"use strict"

window.faceray = {
	img:null,
	apiKey:null,
	apiId:null,
	ip:"159.69.86.20",
	lnk:"/faceray/progress",
	promise:null,
	init:function(callback){
		var url = 'http://'+this.ip+this.lnk;
		const Http = new XMLHttpRequest();
		if ("withCredentials" in Http) 
		{
  	 		 Http.open('POST', url, true);
  	 		 var data = faceray.header(Http);
			 Http.send(data);
			 faceray.onReady(Http);
  	 	}
  	 	else if (typeof XDomainRequest != "undefined") 
  	 	{
		    Http = new XDomainRequest();
		    Http.open('POST', url,true);
		    var data = faceray.header(Http);
			Http.send(data);
			faceray.onReady(Http);
		} 
		else 
		{
			Http = null;
		}
	},
	header:function(Http){
		Http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  	 	var data = 	"apilogin=1&";
  	 		data += "apikey="+this.apiKey+"&";
  	 		data += "apiid="+this.apiId;
  	 	return data
	},
	onReady:function(Http,promise){
		this.promise = new Promise(function(resolve, reject){
			Http.onreadystatechange=(e)=>{
		    	if(Http.readyState==4 || Http.readyState==200)
		    	{
		    		var response = JSON.parse(Http.responseText);
		    		if(response.success==true)
		    		{
		    			resolve(eval('({'+response.data+ '})'));
		    		}
		    		else
		    		{
		    			alert(response.error);
		    			reject(false);
		    		}
		    	}
			}
		});
	},
	client:function()
	{
		if(this.promise!=null)
			return this.promise;
		else
			return null;
	}
}	
