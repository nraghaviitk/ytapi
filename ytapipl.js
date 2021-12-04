require('dotenv').config();
var {google} = require('googleapis'),
    youtubeV3 = google.youtube( { version: 'v3'} );

var request =  youtubeV3.playlistItems.list({
    	key:process.env.YOUTUBE_TOKEN,		
	part: 'snippet',
   	playlistId:'UUZy9xs6Tn9vWqN_5l0EEIZA',
	maxResults: '50'
}, (err,response) => {
//	console.log(response);
	var pgtoken=response.data.nextPageToken;
	var totalres = response.data.pageInfo.totalResults 
//	console.log(totalres, response.data.pageInfo.resultsPerPage);
	for(var i in response.data.items) {
    	var item = response.data.items;
	var vidid=item[i].snippet.resourceId.videoId;
	var vidtitle=item[i].snippet.title;
// 	console.log('[%s] Title: %s', item[i].resourceId.videoId,item[i].snippet.title);
	console.log(vidtitle,'\n',vidid);
	}

	for(var j=0;j<totalres/50-50;j++){
	var requestn =  youtubeV3.playlistItems.list({
    		key:process.env.YOUTUBE_TOKEN,		
		part: 'snippet',
   		playlistId:'UUZy9xs6Tn9vWqN_5l0EEIZA',
		maxResults: '50',
		pageToken:pgtoken
	}, (errn,responsen) => {
//		console.log(response);
		pgtoken=responsen.data.nextPageToken;
		//var totalres = response.data.pageInfo.totalResults 
		//console.log(totalres, response.data.pageInfo.resultsPerPage);
		for(var i in responsen.data.items) {
    		var itemn = responsen.data.items;
// 	console.log('[%s] Title: %s', item[i].resourceId.videoId,item[i].snippet.title);
		var vidid=itemn[i].snippet.resourceId.videoId;
		var vidtitle=itemn[i].snippet.title;
// 	console.log('[%s] Title: %s', item[i].resourceId.videoId,item[i].snippet.title);
		console.log(vidtitle,'\n',vidid);
		}
		
	
		}
	)}

});





