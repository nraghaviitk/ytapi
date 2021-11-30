require('dotenv').config();
var {google} = require('googleapis'),
    youtubeV3 = google.youtube( { version: 'v3'} );

var request =  youtubeV3.search.list({
    key:process.env.YOUTUBE_TOKEN,		
    part: 'snippet',
    type: 'video',
    channelID:'UCZy9xs6Tn9vWqN_5l0EEIZA'
	//maxResults: 50,
    //order: 'date',
    //safeSearch: 'moderate',
    //videoEmbeddable: true
}, (err,response) => {
  // your code here
	console.log(response.data.items);
//	const resparsed = JSON.parse(response);
//	console.log("printing items");
//	console.log(resparsed);
	for(var i in response.data.items) {
    	var item = response.data.items;
 	console.log('[%s] Title: %s', item[i].id.videoId,item[i].snippet.title);
	}

});
