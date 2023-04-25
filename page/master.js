let pass1 = document.querySelector("#pass1")
let pass2 = document.querySelector("#pass2")
let passimg = document.querySelector("#passimg")

onload = () => {
    var 쿼리스트링 = new URLSearchParams(window.location.search)
    let text = 쿼리스트링.get('id')
    if(text === '서울') {
        $(pass1).append('서울 전 지역')
        pass2.textContent = '서울 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sk2%2F001.png?alt=media&token=06346496-20f8-4830-8068-736ead8eea0a'
    }
    if(text === '부산') {
        $(pass1).append('부산 전 지역')
        pass2.textContent = '부산 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sk2%2F002.png?alt=media&token=c1ca6d4f-d163-4d82-8ab4-b9dcf2012a58'
    }
    if(text === '대구') {
        $(pass1).append('대구 전 지역')
        pass2.textContent = '대구 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sk2%2F003.png?alt=media&token=8199b415-b534-4146-b79c-8c830d0e5baf'
    }
    if(text === '인천') {
        $(pass1).append('인천 전 지역')
        pass2.textContent = '인천 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sk2%2F004.png?alt=media&token=d9c30614-0e05-4465-926b-2bb40784a4cd'
    }
    if(text === '광주') {
        $(pass1).append('광주 전 지역')
        pass2.textContent = '광주 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sk2%2F005.png?alt=media&token=0b43034c-09ed-4f37-8cfd-c40d7264090c'
    }
    if(text === '대전') {
        $(pass1).append('대전 전 지역')
        pass2.textContent = '대전 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sk2%2F006.png?alt=media&token=e8f58346-8c86-4de4-9526-a46e25957d6f'
    }
    if(text === '울산') {
        $(pass1).append('울산 전 지역')
        pass2.textContent = '울산 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sk2%2F007.png?alt=media&token=cd8d0e8e-6235-476b-b0fa-fdbd0bf4a2e6'
    }
    if(text === '경기') {
        $(pass1).append('경기 전 지역')
        pass2.textContent = '경기 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sk2%2F008.png?alt=media&token=2281fc63-ac2c-4856-b7ea-1e2d3879c730'
    }
    if(text === '강원') {
        $(pass1).append('강원 전 지역')
        pass2.textContent = '강원 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sk2%2F009.png?alt=media&token=0d41a218-362f-40bc-9d96-348dad7fec1d'
    }
    if(text === '충북') {
        $(pass1).append('충북 전 지역')
        pass2.textContent = '충북 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sk2%2F010.png?alt=media&token=d072588d-32ea-4168-a000-1e4ce8adad02'
    }
    if(text === '충남') {
        $(pass1).append('충남 전 지역')
        pass2.textContent = '충남 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sk2%2F011.png?alt=media&token=c87fc5c5-b41b-4180-b155-0a1989a16e5b'
    }
    if(text === '전북') {
        $(pass1).append('전북 전 지역')
        pass2.textContent = '전북 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sk2%2F012.png?alt=media&token=02646527-59a2-4398-abc0-72e831ce2f8d'
    }
    if(text === '전남') {
        $(pass1).append('전남 전 지역')
        pass2.textContent = '전남 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sk2%2F013.png?alt=media&token=8ce99aba-dfec-4931-a1f0-5fea5dca2495'
    }
    if(text === '경북') {
        $(pass1).append('경북 전 지역')
        pass2.textContent = '경북 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sk2%2F014.png?alt=media&token=b7b88788-0988-4f62-9f59-281ff74fd6d2'
    }
    if(text === '경남') {
        $(pass1).append('경남 전 지역')
        pass2.textContent = '경남 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sk2%2F015.png?alt=media&token=ba4d7a2f-18ed-4a09-837a-9db507c4385e'
    }
    if(text === '세종') {
        $(pass1).append('세종 전 지역')
        pass2.textContent = '세종 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sk2%2F016.png?alt=media&token=5ce100bf-d5ed-4c48-86eb-1d805bf49383'
    }
    if(text === '제주') {
        $(pass1).append('제주 전 지역')
        pass2.textContent = '제주 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sk2%2F017.png?alt=media&token=904fd00c-828e-4ac9-b31c-a4cc0997799e'
    }
}