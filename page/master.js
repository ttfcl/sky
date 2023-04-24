let passname = document.querySelector("#passname")
let pass1 = document.querySelector("#pass1")
let pass2 = document.querySelector("#pass2")
let pass3 = document.querySelector("#pass3")
let passimg = document.querySelector("#passimg")

onload = () => {
    var 쿼리스트링 = new URLSearchParams(window.location.search)
    let text = 쿼리스트링.get('id')
    if(text === '서울남서') {
        passname.textContent = '서울남서'
        $(pass1).append('서울남서지역</br>강서 / 양천 / 구로 / 영등포 / 금천')
        pass2.textContent = '서울남서지역인'
        pass3.textContent = '강서 / 양천 / 구로 / 영등포 / 금천을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F001.png?alt=media&token=69c83993-92b5-4f49-bb03-60d8dfa32921'
    }
    if(text === '서울중앙') {
        passname.textContent = '서울중앙'
        $(pass1).append('서울중앙지역</br>동작 / 관악 / 서초 / 강남 / 용산 / 중구 / 성동')
        pass2.textContent = '서울중앙지역인'
        pass3.textContent = '동작 / 관악 / 서초 / 강남 / 용산 / 중구 / 성동을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F002.png?alt=media&token=47cdcdc5-d756-43d4-90cd-9ba1be1cfe0a'
    }
    if(text === '서울남동') {
        passname.textContent = '서울남동'
        $(pass1).append('서울남동지역</br>광진 / 강동 / 송파')
        pass2.textContent = '서울남동지역인'
        pass3.textContent = '광진 / 강동 / 송파를'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F003.png?alt=media&token=fd16c24c-1ece-43f7-86a6-6dcd2684fb80'
    }
    if(text === '서울북서') {
        passname.textContent = '서울북서'
        $(pass1).append('서울북서지역</br>은평 / 서대문 / 종로')
        pass2.textContent = '서울북서지역인'
        pass3.textContent = '은평 / 서대문 / 종로'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F005.png?alt=media&token=7661c4a7-5f0b-4cd5-a431-619b4578e3b7'
    }
    if(text === '서울북동') {
        passname.textContent = '서울북동'
        $(pass1).append('서울북동지역</br>성북 / 동대문 / 중랑 / 노원 / 도봉 / 강북')
        pass2.textContent = '서울북동지역인'
        pass3.textContent = '성북 / 동대문 / 중랑 / 노원 / 도봉 / 강북을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F004.png?alt=media&token=2c8d5a5e-ffd5-46d3-87a9-7dfedcd50211'
    }
    if(text === '경기중앙') {
        passname.textContent = '경기중앙'
        $(pass1).append('경기중앙지역</br>부천 / 광명 / 시흥 / 안양 / 군포 / 과천 / 의왕 / 성남 / 하남 / 구리')
        pass2.textContent = '경기중앙지역인'
        pass3.textContent = '부천 / 광명 / 시흥 / 안양 / 군포 / 과천 / 의왕 / 성남 / 하남 / 구리를'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F006.png?alt=media&token=1786f94a-d0b7-4f4d-a11b-b8dbee248095'
    }
    if(text === '경기북서') {
        passname.textContent = '경기북서'
        $(pass1).append('경기북서지역</br>김포 / 고양 / 파주 / 양주 / 동두천 / 연천')
        pass2.textContent = '경기북서지역인'
        pass3.textContent = '김포 / 고양 / 파주 / 양주 / 동두천 / 연천을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F010.png?alt=media&token=c8b7391f-da4e-4ad8-8b41-8daf2e753aa5'
    }
    if(text === '경기북동') {
        passname.textContent = '경기북동'
        $(pass1).append('경기북동지역</br>남양주 / 양평 / 가평 / 의정부 / 포천')
        pass2.textContent = '경기북동지역인'
        pass3.textContent = '남양주 / 양평 / 가평 / 의정부 / 포천을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F009.png?alt=media&token=82b83c46-e2e4-4016-98c9-3f5e36212b3b'
    }
    if(text === '경기남동') {
        passname.textContent = '경기남동'
        $(pass1).append('경기남동지역</br>광주 / 용인 / 이천 / 여주 / 안성')
        pass2.textContent = '경기남동지역인'
        pass3.textContent = '광주 / 용인 / 이천 / 여주 / 안성을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F007.png?alt=media&token=a7f0af8e-47d4-4c4c-942e-e6614f268da9'
    }
    if(text === '경기남서') {
        passname.textContent = '경기남서'
        $(pass1).append('경기남서지역</br>안산 / 수원 / 오산 / 화성 / 평택')
        pass2.textContent = '경기남서지역인'
        pass3.textContent = '안산 / 수원 / 오산 / 화성 / 평택을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F008.png?alt=media&token=2b658e6e-29f8-4802-b3c4-f66fb1219e3d'
    }
    if(text === '부산남서') {
        passname.textContent = '부산남서'
        $(pass1).append('부산남서지역</br>강서 / 사상 / 사하 / 서구 / 중구 / 영도')
        pass2.textContent = '부산남서지역인'
        pass3.textContent = '강서 / 사상 / 사하 / 서구 / 중구 / 영도를'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F011.png?alt=media&token=635aa1b7-b6f4-485d-94fd-5b92e9d40be1'
    }
    if(text === '부산중앙') {
        passname.textContent = '부산중앙'
        $(pass1).append('부산중앙지역</br>북구 / 동래 / 연제 / 부산진 / 수영 / 동구 / 남구')
        pass2.textContent = '부산중앙지역인'
        pass3.textContent = '북구 / 동래 / 연제 / 부산진 / 수영 / 동구 / 남구를'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F012.png?alt=media&token=c805e5f7-e556-4233-b522-9b46c4b3fd77'
    }
    if(text === '부산북동') {
        passname.textContent = '부산북동'
        $(pass1).append('부산북동지역</br>금정 / 해운대 / 기장')
        pass2.textContent = '부산북동지역인'
        pass3.textContent = '금정 / 해운대 / 기장을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F013.png?alt=media&token=aa147865-31e2-4152-9de3-b7fd5e81e59f'
    }
}