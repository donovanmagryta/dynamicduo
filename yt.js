var media1 = decodeURIComponent(media1.replace(/\+/g, '%20') );
let re = /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i; // added 7-12-2020;
let id = media1.match(re)[7]; // added 7-12-2020
//alert(id);
var media1 = 'https://youtube.com/embed/' + id + '?autoplay=1';
//alert(media1);
document.getElementById('ytmedia1').src = media1;
