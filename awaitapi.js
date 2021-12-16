require('dotenv').config();
var async = require('async');
var {google} = require('googleapis'),
    youtubeV3 = google.youtube( { version: 'v3'} );

(async() =>{
		
	pt = await apireq();	
//	console.log(pt[0],pt[1],pt[2]);
	token=pt[0]
	for(var j=1;j<pt[1]/pt[2];j++){	
	ptn= await apinextpg(token);	
//	console.log(j,ptn);
		token=ptn;
		}
})();

async function apireq(){
	let pgtoken='';
	maxResults=50;
	const response= await youtubeV3.playlistItems.list({

    	key:process.env.YOUTUBE_TOKEN,		
	part: 'snippet',
   	playlistId:'UUZy9xs6Tn9vWqN_5l0EEIZA',
	maxResults: maxResults
}) 
	pgtoken= response.data.nextPageToken;
	var totalres = response.data.pageInfo.totalResults 
    	var item = response.data.items;
//	console.log(totalres, response.data.pageInfo.resultsPerPage);

	for(var i in item) {
	var vidid=item[i].snippet.resourceId.videoId;
	var vidtitle=item[i].snippet.title;
	console.log(vidtitle,'\n',vidid);
	};


//	console.log("inside",pgtoken);
	return [pgtoken,totalres,maxResults];
}

async function apinextpg(pgtoken){
	let nextpgtoken='';
	const response= await youtubeV3.playlistItems.list({

    	key:process.env.YOUTUBE_TOKEN,		
	part: 'snippet',
   	playlistId:'UUZy9xs6Tn9vWqN_5l0EEIZA',
	maxResults: '50',
	pageToken:pgtoken
}) 
	nextpgtoken= response.data.nextPageToken;
	var totalres = response.data.pageInfo.totalResults 
    	var item = response.data.items;
//	console.log(totalres, response.data.pageInfo.resultsPerPage);

	for(var i in item) {
	var vidid=item[i].snippet.resourceId.videoId;
	var vidtitle=item[i].snippet.title;
	console.log(vidtitle,'\n',vidid);
	};

//	console.log("inside",pgtoken);
	return nextpgtoken;
}



