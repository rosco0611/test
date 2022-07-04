let dcMovie=comics
(function test(){
    const comics = [{"movie" : "어벤져스", "studio" : "마블"},
                    {"movie" : "스파이더맨", "studio" : "마블"},
                    {"movie" : "원더우면", "studio" : "DC"},
                    {"movie" : "토르", "studio" : "마블"},
                    {"movie" : "블랙펜서", "studio" : "마블"},
                    {"movie" : "아쿠아맨", "studio" : "DC"},
                    {"movie" : "더 배트맨", "studio" : "DC"}];
comics = JSON.stringify(comics);
const newJson = JSON.parse(comics).filter(function(element){
    console.log(element);
    return element.name == "마블";
    });
    console.log("newObj");
    console.log(newJson);
})();