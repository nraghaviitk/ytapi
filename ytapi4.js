require('dotenv').config();
var {google} = require('googleapis'),
    youtubeV3 = google.youtube( { version: 'v3'} );

var request =  youtubeV3.channels.list({
    	key:process.env.YOUTUBE_TOKEN,		
	part: 'contentDetails',
//	forUsername:'Lifeprint-signs'
   // type: 'video',
   	id:'UCZy9xs6Tn9vWqN_5l0EEIZA'
//	channelID:'UCACxqsL_FA-gMD2fwil7ZXA',
//	q:'suggest asl'
	//maxResults: 50,
    //order: 'date',
    //safeSearch: 'moderate',
    //videoEmbeddable: true
}, (err,response) => {
  // your code here
	console.log(response.data.items[0].contentDetails.relatedPlaylists.uploads)

	uploadid=response.data.items[0].contentDetails.relatedPlaylists.uploads;
});

