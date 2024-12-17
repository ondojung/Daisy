import { v4 as uuidv4 } from "uuid"; 
import Database from '../database'

// 명사 리스트
const nouns = [
  "사랑", "별", "바람", "하늘", "꽃", "나무", "바다", "꿈", "우정", "행복",
  "소망", "마음", "시간", "추억", "그림", "이야기", "여행", "산", "강", "섬",
  "미소", "희망", "기억", "눈물", "빛", "어둠", "별빛", "햇살", "저녁", "아침",
  "노을", "음악", "계절", "시", "낙엽", "소리", "하모니", "정원", "숲", "강물",
  "비", "눈", "구름", "도서관", "공원", "거리", "언덕", "초원", "열정", "자유",
  "평화", "감동", "설렘", "우주", "호수", "달", "바위", "잔디", "세상", "인간",
  "인연", "여정", "고향", "도시", "마을", "사막", "열매", "자연", "문화", "전통",
  "예술", "동화", "모험", "바람결", "새벽", "정오", "오후", "한밤", "별자리", "꽃잎",
  "파도", "모래", "눈꽃", "향기", "여운", "시선", "빛깔", "계곡", "술", "온기",
  "향수", "마법", "환상", "이야기책", "동굴", "우물", "유리", "거울", "별빛길"
];

// 형용사 리스트
const adjectives = [
  "고운", "맑은", "따뜻한", "환한", "청명한", "부드러운", "사랑스러운", "달콤한", "우아한", 
  "향기로운", "반짝이는", "온화한", "싱그러운", "평화로운", "아름다운", "감미로운", "찬란한",
  "세련된", "다정한", "화사한", "정겨운", "황홀한", "신비로운", "청초한", "수려한", "고요한",
  "소담한", "그윽한", "여린", "정다운", "밝은", "시원한", "생기 있는", "조용한", "우렁찬",
  "고상한", "단정한", "소중한", "푸르른", "아늑한", "신선한", "알록달록한", "낭만적인",
  "기분 좋은", "햇살 같은", "별빛 같은", "은은한", "새벽 같은", "풋풋한", "따스한", 
  "명랑한", "예쁜", "환상적인", "멋진", "거룩한", "열정적인", "상쾌한", "평온한", "다채로운",
  "장엄한", "황금빛", "눈부신", "한적한", "무성한", "잔잔한", "고즈넉한", "흥미로운", 
  "기품 있는", "새하얀", "고운 빛깔의", "선명한", "섬세한", "포근한", "즐거운", "행복한",
  "희망찬", "낯익은", "향긋한", "울창한", "소박한", "자연스러운", "고급스러운", "화려한",
  "귀여운", "자랑스러운", "익숙한", "친근한", "고혹적인", "편안한", "독특한", 
  "호기심 가득한", "초록빛", "차분한", "자유로운", "경쾌한"
];

// 랜덤 요소 선택 함수
 


export default class {
    static initUser(avatar,name,bg){
        const user = this.getUser
        
        if(user) return user;
        else{
            const id = uuidv4();
            const data={
                _id:id,
                name:name,
                avatar:avatar,
                bg:bg
            }
            localStorage.setItem('user',JSON.stringify(data))
            return data
        }
        
    }
    static get getUser(){
        const Data=localStorage.getItem('user')
        return JSON.parse(Data)
    }
    static generateName() {
      const adjective = this.getRandomElement(adjectives);
      const noun = this.getRandomElement(nouns);
      return `${adjective} ${noun}`;
    }
    static getRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    static async joinRoom(id,name,icon){
        const DB=new Database()
        const result = await DB.addRoom({
            id:id,
            name:name,
            icon:icon
        })
        return result
    }
    
}