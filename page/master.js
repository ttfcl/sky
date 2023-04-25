let pass1 = document.querySelector("#pass1")
let pass2 = document.querySelector("#pass2")
let passimg = document.querySelector("#passimg")

onload = () => {
    var 쿼리스트링 = new URLSearchParams(window.location.search)
    let text = 쿼리스트링.get('id')
    if(text === '서울') {
        $(pass1).append('서울 전 지역')
        pass2.textContent = '서울 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F001s%20(1).png?alt=media&token=695084d1-58a9-4f7d-8c22-7fd83a7480b1'
    }
    if(text === '부산대구인천광주대전울산') {
        $(pass1).append('부산 / 대구 / 인천 / 광주 / 대전 / 울산')
        pass2.textContent = '부산, 대구, 인천, 광주, 대전, 울산을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F001s%20(2).png?alt=media&token=becadb4b-e98b-4bb3-a118-08c599af3ba5'
    }
    if(text === '경기강원충북충남전북전남경북경남') {
        $(pass1).append('경기 / 강원 / 충북 / 충남 / 전북 / 전남 / 경북 / 경남')
        pass2.textContent = '경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F001s%20(3).png?alt=media&token=548dfd0f-4075-46da-8378-b3a2bb89e8fe'
    }
    if(text === '세종') {
        $(pass1).append('세종')
        pass2.textContent = '세종을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F001s%20(4).png?alt=media&token=8c40d27f-8c73-4f74-83e2-d409d382fdd1'
    }
    if(text === '제주') {
        $(pass1).append('제주')
        pass2.textContent = '제주를'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F001s%20(5).png?alt=media&token=136153e4-667b-4308-b539-4b01eeb31584'
    }
}