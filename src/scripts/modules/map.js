module.exports = () => {
  if (document.getElementById('map')) {
    const center = {lat: 34.86979430494269, lng: -111.75781395239258};
    const home = {lat: 34.86979430494269, lng: -111.75781395239258}
    const map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 10,
      draggable: false,
      
    });
    
    const marker = new google.maps.Marker({
      position: home,
      map: map,
      animation: google.maps.Animation.DROP,
    });
    }
    
}