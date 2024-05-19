let val =0;

function ileri(){
if(val!=5)
    val++;
else
val=0;
aciklayici(val);


}

function aciklayici(v){
if(v==0){document.getElementById("aciklama").innerHTML='KULA PERİ BACALARI: Kula ve çevresi, volkanik özellikli jeolojik yapıya sahiptir. Burgaz mevkiinde Gediz Nehri’nin üst kısmında ısı değişiklikleri, yağmur, rüzgar ve erozyon etkisiyle oluşmuş, peri bacaları görünümlü doğal oluşumlar görülür. Gediz Vadisi içinde, pastel tonlarda görkemli bir peyzaj oluşturur.';}
else if(v==1){document.getElementById("aciklama").innerHTML="NİOBE AĞLAYAN KAYA:Niobe’nin 14 çocuğu olur.Her fırsatta çocukları ile gururlanan Niobe’nin kendisinin çok çocuğu olduğunu, Leto’nun ise sadece iki çocuğunun olduğunu söylemesi Tanrıça Leto’yu öfkelendirir ve çocuklarından Niobe’yi cezalandırmalarını ister. Niobe’nin bütün çocukları Apollon ve Artemis’in oklarıyla öldürülürler. Niobe çocuklarının cesetleri başında günlerce ağlar. Sonunda tanrı Zeus, Niobe’nin haline acır ve ızdırabına son vermek için onu taş haline getirir.";}
else if(v==2){document.getElementById("aciklama").innerHTML="MURADİYE CAMİİ:III.Murat adına 1583-1592 yılları arasında yaptırılan külliye; cami, medrese, imarethane ve dükkanlardan oluşmaktadır. Projesi Mimar Sinan’a ait olan külliyenin inşası Mimar Mahmut Ağa tarafından başlatılmış ve ölümü üzerine Mimar Mehmet Ağa tarafından tamamlanmıştır. Medrese, klasik Osmanlı medrese plan ve şekline bağlı kalınarak yapılmıştır.";}
else if(v==3){document.getElementById("aciklama").innerHTML="KULA EVLERİ:18. yy Osmanlı İmparatorluğu'nun altındaki hemen her bölgede karşımıza çıkan ve TÜRK EVİ olarak tabir edilen ahşap evlerdir. Gerek plan, kuruluş ve gerekse ahşap, alçı ve kalem işi gibi zengin sistemleriyle bu dönem Osmanlı Sanatı nın başarılı örnekleridir. 19, yy da devam eden yapı tipiyle Kula tipik bir Osmanlı Kent dokusuna sahiptir.";}
else if(v==4){document.getElementById("aciklama").innerHTML="YENİ HAN:Hacı Mehmet Sadık Bey tarafından yaptırılmıştır. 19. yy.'la tarihlenir. Dikdörtgen planlı, avlulu, ahırlı, iki katlı bir ticaret hanıdır. Ana girişe geç devirlerde ilaveler yapılmıştır.";}
else if(v==5){document.getElementById("aciklama").innerHTML="KULA-SALİHLİ JEOPARKI:sahası doğal, jeolojik, kültürel ve arkeolojik zenginliğinden dolayı antik dönemlerden günümüze dek pek çok seyyahın ve araştırmacının ilgisini çekmiş ve eserlerine konu olmuştur.Türkiye’de genç volkanizmanın büyük ölçüde bulunduğu başlıca alanlardan biridir.";}
val=v;
}

function geri(){
    if(val!=0)
        val--;
    else
    val=5;
    aciklayici(val);
    
    
    }
   
  
    function searchMovies() {
        var searchInput = document.getElementById("searchInput").value;
        var apiUrl = "http://www.omdbapi.com/?apikey=5d439c65&t=" + encodeURIComponent(searchInput);
    
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayMovieInfo(data);
        })
        .catch(error => console.log("Error:", error));
    }
    
    function displayMovieInfo(movie) {
        var movieResults = document.getElementById("movieResults");
        movieResults.innerHTML = "";
    
        if (movie.Response === "True") {
            var imdbRating = parseFloat(movie.imdbRating);
            var director = movie.Director;
    
            var rating = imdbRating * 1;
    
            var movieDiv = document.createElement("div");
            movieDiv.innerHTML = `
                <h2>${movie.Title}</h2>
                <p>Yönetmen: ${director}</p>
                <p>IMDB Puanı: ${rating.toFixed(1)}</p>
                <img src="${movie.Poster}" alt="${movie.Title}"/>
            `;
            movieResults.appendChild(movieDiv);
        } else {
            movieResults.innerHTML = "Film bulunamadı.";
        }
    }
    
    
    
    
    