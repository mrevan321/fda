function drugSearch(){
	$("#reveal").html('');
	var key = "7PcXD9iQU905xvCopWU8Nqkiy8GoiEnwpCQkcl5O"
	var searchTerm = document.getElementById("search").value

	$.ajax({
    
	   	url: "https://api.fda.gov/drug/event.json?api_key="+ key + "&search=" + searchTerm+"&count=patient.reaction.reactionmeddrapt.exact",
	   	dataType: "json",
	   	success: function(data) {
	   		for(i=0;i<10;i++){
	    		var results = (data.results[i].term)
          if(data.results[i].term === "DRUG INEFFECTIVE"){
            results[i].term = ""
          }else if(data.results[i].term === ""){
            document.write("Try another search") 
          }else{
            		$("#reveal").append(results + " " + "<br>")
				console.log(data.results[i].term)
          }
  
	    
			}
			// for loops runs all the drugs that will bring up the pop up
			var drugs=['marijuana','weed','pot','heroin','crack','meth','alcohol','dmt','ghb','mushrooms','heroin','lsd','ecstacy','painkillers','pcp','opiods','salvia','bath salt','tobacco','cocaine'];
			for(i=0;i<drugs.length;i++)
			        if(searchTerm===drugs[i]){
			        	// popup
swal({ title:"Need help with drug abuse?",
html:'<a href="https://www.drugabuse.gov/" target="_blank">click here</a>' ,
imageUrl:"img/support.jpg"});
}
	   	},
	   type: 'GET'
	});
}
// when clicked use function
document.getElementById('button').addEventListener('click',drugSearch,false)


