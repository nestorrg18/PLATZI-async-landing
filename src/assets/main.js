const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCDgBT5xhWGLzQoYUmxNOKHQ&part=snippet%2Cid&order=date&maxResults=16';
const content = document.getElementById("Content")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '14f0840f79mshcaeaaffeff119d7p152518jsn8533c0fb5e27',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}
/// La que sigue es una función anonima autoejecutable
(async () => {
    try {
        const videos = await fetchData(API);
        let view = `${videos.items.map(video => `
            <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.title}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-lg text-gray-200">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.snippet.title}
                        </h3>
                    </div>
                </div>
            </a>
        `).join("")}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();


//{
    // "kind": "youtube#searchListResponse",
    // "nextPageToken": "CAoQAA",
    // "regionCode": "DE",
    // "pageInfo": {
    //   "totalResults": 521,
    //   "resultsPerPage": 10
    // },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "o5j1pukZDhA"
//         },
//         "snippet": {
//           "publishedAt": "2023-04-11T02:00:10Z",
//           "channelId": "UCDgBT5xhWGLzQoYUmxNOKHQ",
//           "title": "Ganar La Liga NO JUSTIFICA una mala temporada",
//           "description": "Los mejores momentos de Cal y Arena | MQVChango los encuentras en https://www.tiktok.com/@barakfever ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/o5j1pukZDhA/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/o5j1pukZDhA/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/o5j1pukZDhA/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Barak Fever",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-04-11T02:00:10Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "86D2pIZr4lY"
//         },
//         "snippet": {
//           "publishedAt": "2023-04-10T01:00:02Z",
//           "channelId": "UCDgBT5xhWGLzQoYUmxNOKHQ",
//           "title": "¿Cuáles son los CLUBES DE IZQUIERDA?",
//           "description": "Próximamente equipos de Derecha: Los mejores momentos de Cal y Arena | MQVChango los encuentras en ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/86D2pIZr4lY/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/86D2pIZr4lY/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/86D2pIZr4lY/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Barak Fever",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-04-10T01:00:02Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "8cUQMQUtWiw"
//         },
//         "snippet": {
//           "publishedAt": "2023-04-09T02:00:03Z",
//           "channelId": "UCDgBT5xhWGLzQoYUmxNOKHQ",
//           "title": "¡Messi no va A VOLVER!",
//           "description": "Los mejores momentos de Cal y Arena | MQVChango los encuentras en https://www.tiktok.com/@barakfever ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/8cUQMQUtWiw/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/8cUQMQUtWiw/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/8cUQMQUtWiw/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Barak Fever",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-04-09T02:00:03Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "s2oWXffmeXA"
//         },
//         "snippet": {
//           "publishedAt": "2023-04-08T02:30:19Z",
//           "channelId": "UCDgBT5xhWGLzQoYUmxNOKHQ",
//           "title": "EQUIPOS BLAUGRANAS por el mundo",
//           "description": "Los mejores momentos de Cal y Arena | MQVChango los encuentras en https://www.tiktok.com/@barakfever ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/s2oWXffmeXA/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/s2oWXffmeXA/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/s2oWXffmeXA/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Barak Fever",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-04-08T02:30:19Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "ut-Kx8DLrkM"
//         },
//         "snippet": {
//           "publishedAt": "2023-04-07T02:00:15Z",
//           "channelId": "UCDgBT5xhWGLzQoYUmxNOKHQ",
//           "title": "Cracks que SE RETIRARON JÓVENES. ¿Cuál era la prisa?",
//           "description": "Los mejores momentos de Cal | Arena y MQVChango los encuentras en https://www.tiktok.com/@barakfever ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/ut-Kx8DLrkM/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/ut-Kx8DLrkM/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/ut-Kx8DLrkM/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Barak Fever",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-04-07T02:00:15Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "Dtlx4VK-WvQ"
//         },
//         "snippet": {
//           "publishedAt": "2023-04-06T17:24:17Z",
//           "channelId": "UCDgBT5xhWGLzQoYUmxNOKHQ",
//           "title": "¡Barcelona FUERA DE LA ELITE! Están en un DESPRESTIGIO TOTAL",
//           "description": "Los mejores momentos de Cal | Arena y MQVChango los encuentras en https://www.tiktok.com/@barakfever ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/Dtlx4VK-WvQ/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/Dtlx4VK-WvQ/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/Dtlx4VK-WvQ/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Barak Fever",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-04-06T17:24:17Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "JMxRLmwaTAA"
//         },
//         "snippet": {
//           "publishedAt": "2023-04-06T01:30:08Z",
//           "channelId": "UCDgBT5xhWGLzQoYUmxNOKHQ",
//           "title": "CHICOS MARAVILLA en mundiales 🌎",
//           "description": "Los mejores momentos de Cal y Arena y MQVChango los encuentras en https://www.tiktok.com/@barakfever ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/JMxRLmwaTAA/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/JMxRLmwaTAA/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/JMxRLmwaTAA/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Barak Fever",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-04-06T01:30:08Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "f014v5LbW2Y"
//         },
//         "snippet": {
//           "publishedAt": "2023-04-05T03:00:14Z",
//           "channelId": "UCDgBT5xhWGLzQoYUmxNOKHQ",
//           "title": "Los equipos MÁS SOBREVALORADOS de la historia",
//           "description": "Los mejores momentos de Cal y Arena y MQVChango los encuentras en https://www.tiktok.com/@barakfever ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/f014v5LbW2Y/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/f014v5LbW2Y/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/f014v5LbW2Y/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Barak Fever",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-04-05T03:00:14Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "UBJXm2iObxs"
//         },
//         "snippet": {
//           "publishedAt": "2023-04-04T00:59:39Z",
//           "channelId": "UCDgBT5xhWGLzQoYUmxNOKHQ",
//           "title": "Árbitros que ENLOQUECIERON 😤",
//           "description": "Los mejores momentos de Cal y Arena y MQVChango los encuentras en https://www.tiktok.com/@barakfever ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/UBJXm2iObxs/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/UBJXm2iObxs/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/UBJXm2iObxs/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Barak Fever",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-04-04T00:59:39Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "VSs0QvkOsq0"
//         },
//         "snippet": {
//           "publishedAt": "2023-04-03T05:03:55Z",
//           "channelId": "UCDgBT5xhWGLzQoYUmxNOKHQ",
//           "title": "¡Jugadores en PELIGRO DE EXTINCIÓN!",
//           "description": "Los mejores momentos de Cal y Arena y MQVChango los encuentras en https://www.tiktok.com/@barakfever ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/VSs0QvkOsq0/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/VSs0QvkOsq0/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/VSs0QvkOsq0/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Barak Fever",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-04-03T05:03:55Z"
//         }
//       }
//     ]
//   }