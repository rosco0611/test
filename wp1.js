const comics = [{"movie" : "어벤져스", "studio" : "마블"},
                {"movie" : "스파이더맨", "studio" : "마블"},
                {"movie" : "원더우면", "studio" : "DC"},
                {"movie" : "토르", "studio" : "마블"},
                {"movie" : "블랙펜서", "studio" : "마블"},
                {"movie" : "아쿠아맨", "studio" : "DC"},
                {"movie" : "더 배트맨", "studio" : "DC"}];

let dcMovie=comics.filter((item,index)=>{
    return item.studio=="DC";
})
dcMovie.forEach((item,index)=>{
    return item.movie=="DC";
    return item.studio=="DC";
    return v.item.studio.includes("DC");
})

console.log(dcMovie);
console.log('영화제목:',item.movie,'제작사:',item.studio);