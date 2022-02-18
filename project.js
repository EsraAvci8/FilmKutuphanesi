const form=document.getElementById("film-form");///form seçildi
const titleElement=document.getElementById("title");
const directorElement=document.getElementById("director");
const urlElement=document.getElementById("url");


//UI objesini başlat
const ui =new UI();

//tüm eventleri yükle
evenListenner();
function evenListenner(){
    form.addEventListener("submit",addFilm);

}
function addFilm(e){
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;
 
    //eğer herhangi bir değer boşsa uyarı mesajı versin
    if(title===""||director===""||url===""){
        //hata
    }
    else{//yeni film
        const newfilm=new film(title,director,url);
        ui.addFilmToUI(newfilm);//arayüze film ekleme
    }

    e.preventDefault();
}