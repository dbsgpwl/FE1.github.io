
    var markerPosition = new kakao.maps.LatLng(35.8692507, 128.606094)
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
        mapOption = { 
            center: markerPosition, // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    var imageSrc = "https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/2021_05_free_parents/sparta-marker.png"; 
    var imageSize = new kakao.maps.Size(65, 86); 
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

    var marker = new kakao.maps.Marker({
        map: map,
        position: markerPosition,
        image : markerImage
    });

    var markerPosition = new kakao.maps.LatLng(35.8527761, 128.506683)
    var mapContainer = document.getElementById('map2'), // 지도를 표시할 div  
        mapOption = { 
            center: markerPosition, // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    var imageSrc = "https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/2021_05_free_parents/sparta-marker.png"; 
    var imageSize = new kakao.maps.Size(65, 86); 
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

    var marker = new kakao.maps.Marker({
        map: map,
        position: markerPosition,
        image : markerImage
    });

