const ytIDs = [
    "EqUP26j4XWU",
    "ljYSblGWWRc",
    "_JgwyxF2vfE",
    "DsCd9tUdUS8",
    "cCFKbHwOYEA",
    "2fbiZhLtRDE",
    "MMK3L4W70g4",
    "UDxID0_A9x4",
    "ZBl48MK17cI",
    "hkXHJEL1yqo",
    "tG6t9LSU9Co",
    "l6p8FDJqUj4",
    "wYSj0Cxw2r4",
    "SQzTfDTnXmg",
]

const spotifyIDs = [
    "1j8kzYnKuztDWliT8V8Qto",
    "0U4KHBtfmuJSz7SrLFIXim",
    "2sN27KkVSnHvqi0MA2YxcZ",
    "0hJloArA2Kb9xNBIv34osS",
    "6aqu4yyygUhblGo3N3LEgG",
]

function getYTDom(id) {
    const d = document.createElement("iframe")
    const src = "https://www.youtube-nocookie.com/embed/" + id
    d.setAttribute('src', src);
    d.setAttribute('width', '560');
    d.setAttribute('height', '315');
    d.setAttribute('title', 'YouTube video player');
    d.setAttribute('frameborder', '0');
    d.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    d.setAttribute('allowfullscreen', true);
    return d
}

function getSpotifyDom(id) {
    const d = document.createElement("iframe")
    const src = "https://open.spotify.com/embed/album/" + id
    d.setAttribute('src', src);
    d.setAttribute('style', 'border-radius: 12px;');
    d.setAttribute('width', '100%');
    d.setAttribute('height', '352');
    d.setAttribute('frameborder', '0');
    d.setAttribute('allowfullscreen', true);
    d.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture');
    d.setAttribute('loading', 'lazy');
    return d
}

const ytdiv = document.querySelector("#yt-videos")
ytIDs.forEach(id => {
    ytdiv.appendChild(getYTDom(id))
});

const spotifydiv = document.querySelector("#spotify-playlists")
spotifyIDs.forEach(id => {
    spotifydiv.appendChild(getSpotifyDom(id))
})