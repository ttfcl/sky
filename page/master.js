let pass1 = document.querySelector("#pass1")
let pass2 = document.querySelector("#pass2")
let passimg1 = document.querySelector("#passimg1")
let passimg2 = document.querySelector("#passimg2")
let passimg3 = document.querySelector("#passimg3")
let passimg4 = document.querySelector("#passimg4")
let passimg5 = document.querySelector("#passimg5")
let passimg6 = document.querySelector("#passimg6")
let passimg7 = document.querySelector("#passimg7")
let passimg8 = document.querySelector("#passimg8")
let passimg9 = document.querySelector("#passimg9")
let passimg10 = document.querySelector("#passimg10")
let passimg11 = document.querySelector("#passimg11")

onload = () => {
    var 쿼리스트링 = new URLSearchParams(window.location.search)
    let text = 쿼리스트링.get('id')
    if(text === '서울') {
        $(pass1).append('서울 전 지역')
        pass2.textContent = '서울 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/1.jpg?alt=media&token=cc0f8fd0-ab65-4278-add5-c945eee73a60'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/10.jpg?alt=media&token=5bfe88a4-8602-465d-a759-a9a3c7f963c1'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/100.jpg?alt=media&token=3fd8c260-80d5-473e-80a1-fc99adfc6871'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/101.jpg?alt=media&token=0b0b40a2-491e-45f0-9c9d-4776abe51a01'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/102.jpg?alt=media&token=913ab385-747f-4388-9f0f-517ad3be2c55'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/103.jpg?alt=media&token=a48f355a-22b2-4d95-8f2f-51ff45cdf81a'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/104.jpg?alt=media&token=cc0377f7-79c6-48e0-80ad-345e619bb465'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/105.jpg?alt=media&token=9365bff4-7ac9-46ac-a613-7a5f4a9302ff'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/106.jpg?alt=media&token=dd2ba796-f203-49d9-8331-64d836478ec2'
        passimg1.src = 'image2/서울.png'
    }
    if(text === '부산') {
        $(pass1).append('부산 전 지역')
        pass2.textContent = '부산 전 지역을'
       
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/107.jpg?alt=media&token=df815a7d-4914-4b3b-8f99-49571e9f7521'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/108.jpg?alt=media&token=083360be-65db-402b-9e10-31997e00f88d'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/109.jpg?alt=media&token=d0298e02-1c0b-4114-848b-db7ed7caf1ed'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/11.jpg?alt=media&token=8ad880e1-1986-444a-98d7-30a1095adb17'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/110.jpg?alt=media&token=a2c7e9ad-e015-4ae0-afaf-1a19ca33c2ec'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/111.jpg?alt=media&token=73b358db-20f7-4111-a32b-e967ad12687e'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/112.jpg?alt=media&token=04e088a0-92df-4d7a-b009-ec00fa37f54e'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/113.jpg?alt=media&token=a67b5c26-6bae-4272-a2b3-278ffabe62a6'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/114.jpg?alt=media&token=3504821d-2a5b-4695-8913-4aa10831b166'
        passimg1.src = 'image2/부산.png'
    }
    if(text === '대구') {
        $(pass1).append('대구 전 지역')
        pass2.textContent = '대구 전 지역을'
        
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/115.jpg?alt=media&token=83a9b91d-2ee8-41b3-b573-a6d5c9e8855a'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/116.jpg?alt=media&token=db876b60-1a99-4fa2-a7b2-9d7e5bc322c5'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/117.jpg?alt=media&token=f5286f2c-d0f0-4b21-814b-57b18af87bd0'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/118.jpg?alt=media&token=3ba032b0-957e-498d-a276-4cb973d46193'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/119.jpg?alt=media&token=0c10e2c2-68db-4bce-bacc-a7e7eff62507'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/12.jpg?alt=media&token=84844741-b94d-458d-9b77-a83bdfc58685'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/120.jpg?alt=media&token=5a7412f1-e6c5-46f1-bfc4-004ba9fe47bd'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/121.jpg?alt=media&token=df262bf8-06b6-4426-a950-ce8732473009'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/122.jpg?alt=media&token=e3d12c78-0989-457b-9dff-fc62f82c97e9'
        passimg1.src = 'image2/대구.png'
    }
    if(text === '인천') {
        $(pass1).append('인천 전 지역')
        pass2.textContent = '인천 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/123.jpg?alt=media&token=ddc48596-843a-4bc6-937a-e54267922589'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/124.jpg?alt=media&token=39b2f55e-588a-4743-b264-7807533e18f4'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/125.jpg?alt=media&token=b6693a46-3643-4ddf-8c68-ab7e15d47088'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/126.jpg?alt=media&token=ffa61a0e-38ba-4fa1-80b3-f6240642530e'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/127.jpg?alt=media&token=352ba525-f8be-4554-8655-a3a78d9a019a'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/128.jpg?alt=media&token=46872d0e-ccbf-4e6e-96ca-baf23b0691aa'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/129.jpg?alt=media&token=a0fb31f4-bd20-42c3-99d7-ca9df6b6686d'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/13.jpg?alt=media&token=920ee00c-abdc-4991-aea7-0dfc6bf205c3'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/130.jpg?alt=media&token=5d234ce6-5684-4244-b901-f67be42d4fbe'
        passimg11.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/98.jpg?alt=media&token=9244ce69-96c7-49e4-895f-044ac1b879f1'
        passimg1.src = 'image2/인천.png'
    }
    if(text === '광주') {
        $(pass1).append('광주 전 지역')
        pass2.textContent = '광주 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/131.jpg?alt=media&token=81205f82-5461-41f4-8f1e-30e00f1261ec'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/132.jpg?alt=media&token=aefd2fae-d878-4d3e-b9a2-68c1c91635f6'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/133.jpg?alt=media&token=e3d7f3a7-ff36-4bf7-afcf-126273d195d0'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/134.jpg?alt=media&token=96f828c5-4c79-4b08-af10-5638054134f6'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/135.jpg?alt=media&token=82dc4f0c-d2ec-46fb-9167-1ca099cb7179'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/136.jpg?alt=media&token=152b5fca-c964-456e-9bdd-7c37e1e9d6ee'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/137.jpg?alt=media&token=33db63e2-fce7-435f-84c6-28c350011cd3'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/138.jpg?alt=media&token=854ef7a4-be9b-4ba3-83ce-1f18cefaa7d3'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/139.jpg?alt=media&token=a8918d26-e72c-487a-bbd9-09eee6dcfb8b'
        passimg11.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/99.jpg?alt=media&token=effbbd15-5fe1-4414-a75b-cfc6fd3f61ff'
        passimg1.src = 'image2/광주.png'
    }
    if(text === '대전') {
        $(pass1).append('대전 전 지역')
        pass2.textContent = '대전 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/14.jpg?alt=media&token=39a72dc8-9df6-4e5c-ba9e-a19edac88330'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/140.jpg?alt=media&token=ecffba8a-9445-42d6-b25b-7b41c5872972'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/141.jpg?alt=media&token=8aef3e0a-8e7c-46ef-b25f-0d1bc0c52a30'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/142.jpg?alt=media&token=2c585790-292b-480c-9099-37b66c5f140e'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/143.jpg?alt=media&token=6858a998-4330-4957-b241-479e105c183e'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/144.jpg?alt=media&token=a830452f-b1d2-4d43-8542-c0344ac0dc95'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/145.jpg?alt=media&token=37dc9d2b-f92f-4cab-b279-59666f3d79b5'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/146.jpg?alt=media&token=9e2e52cd-9ca6-47bc-ad01-bd7bf4598beb'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/147.jpg?alt=media&token=cf8766f4-a0f6-4083-a191-f356ac71829b'
        passimg1.src = 'image2/대전.png'
    }
    if(text === '울산') {
        $(pass1).append('울산 전 지역')
        pass2.textContent = '울산 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/148.jpg?alt=media&token=d896ca24-d94d-4855-9aba-5d5f2df240fb'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/149.jpg?alt=media&token=b5aacbfb-07ab-4710-9147-3dbc8551f54d'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/15.jpg?alt=media&token=e011b80f-2fff-4863-9e3c-4bd0c37a89fe'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/150.jpg?alt=media&token=57a8c203-c790-4dd9-9b3e-2a8c554177ac'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/151.jpg?alt=media&token=405688fe-0ff7-4793-92f3-1aaa6adc2657'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/152.jpg?alt=media&token=831f63ea-6be3-4bd6-a868-d6db2862e983'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/153.jpg?alt=media&token=bba29ff6-e93c-4825-a7bf-fbbeea96f0b4'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/154.jpg?alt=media&token=2b7ddbb9-aed7-428e-9b4e-76dfbbc1fa2d'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/155.jpg?alt=media&token=148ae1ec-f798-4154-8370-2d47b06c1df3'
        passimg1.src = 'image2/울산.png'
    }
    if(text === '경기') {
        $(pass1).append('경기 전 지역')
        pass2.textContent = '경기 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/156.jpg?alt=media&token=6e69f4ef-108e-4502-a0fc-c169748abc05'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/157.jpg?alt=media&token=f5168aa8-261c-48fb-8e85-f6593d748765'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/16.jpg?alt=media&token=b768931d-2856-40e7-b567-639d2e12319e'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/17.jpg?alt=media&token=fb886fff-cd61-4b63-9d36-4b9e6f980cc1'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/18.jpg?alt=media&token=1788e2b4-0653-4bfc-ab36-cdba1024dc3c'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/19.jpg?alt=media&token=b5f97bc7-2e97-4223-ad4b-d29c8b7aa98c'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/2.jpg?alt=media&token=eead8637-879c-4912-a851-b0ef59501c16'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/20.jpg?alt=media&token=9838a3bb-0831-43ad-aff3-1789c8dbc303'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/21.jpg?alt=media&token=1a4bdbd6-9316-4356-bcae-4c258972a5f9'
        passimg1.src = 'image2/경기.png'
    }
    if(text === '강원') {
        $(pass1).append('강원 전 지역')
        pass2.textContent = '강원 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/22.jpg?alt=media&token=183ed552-aaf2-41a7-bd40-b892eafffe5d'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/23.jpg?alt=media&token=e5a2212f-3054-459b-a678-a357fcd740e2'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/24.jpg?alt=media&token=8af2df57-fc3b-4759-a37f-07304935e61d'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/25.jpg?alt=media&token=dce4c8c6-02cd-49f6-ad9d-88dfaa6c6592'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/26.jpg?alt=media&token=d0e271ac-3c30-4b71-903b-2068a4775f98'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/27.jpg?alt=media&token=29b25d4c-c1ce-4490-a520-39b58d57d21f'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/28.jpg?alt=media&token=6b513582-4f78-42aa-b0f6-7fb534e1e110'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/29.jpg?alt=media&token=7a6493b0-c536-4048-a20b-8b70571120ae'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/3.jpg?alt=media&token=87300bae-5e70-4d6c-b694-188a78f18810'
        passimg1.src = 'image2/강원.png'
    }
    if(text === '충북') {
        $(pass1).append('충북 전 지역')
        pass2.textContent = '충북 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/30.jpg?alt=media&token=9acb9b39-a729-4e7b-9637-0863819d033b'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/31.jpg?alt=media&token=0614a67f-c1da-4379-9424-b060398c8d08'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/32.jpg?alt=media&token=b36c694a-5e61-45bf-a7fa-b8a320fe9112'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/33.jpg?alt=media&token=4cff36ae-0f74-43d0-9e04-7061457b7a91'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/34.jpg?alt=media&token=b52089cf-3e7c-478b-8734-7804335d7d7d'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/35.jpg?alt=media&token=6194953e-44c0-4159-9dc9-32376748e79c'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/36.jpg?alt=media&token=6c74dc14-badc-48c8-bc19-486b1e68565f'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/37.jpg?alt=media&token=820daa53-bbbe-4d60-96f9-156405100ecf'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/38.jpg?alt=media&token=58302260-cb48-473c-b584-a523e8ee3635'
        passimg1.src = 'image2/충북.png'
    }
    if(text === '충남') {
        $(pass1).append('충남 전 지역')
        pass2.textContent = '충남 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/39.jpg?alt=media&token=eaf93062-226d-49b1-8faf-bb372b308287'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/4.jpg?alt=media&token=cbf8a95e-3e3c-4f3c-9005-0651aeb46ebb'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/40.jpg?alt=media&token=06469e90-f8e9-43e7-b3e3-1370d07f0d49'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/41.jpg?alt=media&token=08debacf-9a16-40eb-996c-609f50943c30'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/42.jpg?alt=media&token=059dde6d-5419-491b-ae47-6b861eaeb124'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/43.jpg?alt=media&token=ce6e02bf-c617-42c9-80e1-640cd17de4f7'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/44.jpg?alt=media&token=93f186c6-4297-4597-9a86-f7be01c36baf'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/45.jpg?alt=media&token=3a051542-a038-4557-85e3-424465a2efcf'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/46.jpg?alt=media&token=ae56f9b0-8152-4fb9-acc3-01b68994061e'
        passimg1.src = 'image2/충남.png'
    }
    if(text === '전북') {
        $(pass1).append('전북 전 지역')
        pass2.textContent = '전북 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/47.jpg?alt=media&token=28e2d803-98ff-4bef-a738-9e560fb6ecee'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/48.jpg?alt=media&token=67475afb-7116-4a78-8509-bfc573278248'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/49.jpg?alt=media&token=90754eed-6fe7-4ea7-b703-5410ebf780ff'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/5.jpg?alt=media&token=d03de676-c485-4384-ad5d-27a206b0ea33'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/50.jpg?alt=media&token=10f0eebc-435a-401c-8cf9-7feca7e1b45f'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/51.jpg?alt=media&token=8abcbeec-8ade-4ebf-833b-82086632deaa'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/52.jpg?alt=media&token=0dc6892d-cbf2-4ef2-a6cc-5ad75ffe67b8'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/53.jpg?alt=media&token=4c589015-8d95-4fd8-9e0f-81ee7aa9393d'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/54.jpg?alt=media&token=451e4405-8017-497c-bba5-3f601aa89320'
        passimg1.src = 'image2/전북.png'
    }
    if(text === '전남') {
        $(pass1).append('전남 전 지역')
        pass2.textContent = '전남 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/55.jpg?alt=media&token=8aa11868-53ec-42e5-a00d-d48a75918275'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/56.jpg?alt=media&token=9be65c8b-7677-478b-bc76-c2f799237b71'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/57.jpg?alt=media&token=461bb448-f5f4-4dde-9524-1754c5991d69'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/58.jpg?alt=media&token=f4e14851-b3f8-4af7-84e1-00d22f316859'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/59.jpg?alt=media&token=66b3b9ba-2ddf-4bba-8cff-4a20889fbe89'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/6.jpg?alt=media&token=c39a713a-4293-4a55-992e-53ac712496b2'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/60.jpg?alt=media&token=d39b602f-c504-4cfe-915a-7505d633053c'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/61.jpg?alt=media&token=00c66456-3b62-493b-be81-c492a0b75a24'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/62.jpg?alt=media&token=147d72c7-c3ba-4275-8b63-3afbcee40d69'
        passimg1.src = 'image2/전남.png'
    }
    if(text === '경북') {
        $(pass1).append('경북 전 지역')
        pass2.textContent = '경북 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/63.jpg?alt=media&token=28563841-a842-44fb-ab9a-95fc36f29d24'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/64.jpg?alt=media&token=913f8f0a-af6f-445a-b8eb-3ed8bcd15024'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/65.jpg?alt=media&token=32fff43d-0afc-4930-b0b2-613deb49e17e'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/66.jpg?alt=media&token=6f1c3a62-8c2e-4d13-ab6b-5cf04997cd79'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/67.jpg?alt=media&token=e6645971-f0ff-458b-bfa6-0ebfaca6277b'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/68.jpg?alt=media&token=db35cd5c-218a-44e6-adba-be4e774e2180'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/69.jpg?alt=media&token=df1bac27-1499-4630-adf1-ed80f3c44f77'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/7.jpg?alt=media&token=908b323a-1177-4e38-865a-5eb0a1912a5e'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/70.jpg?alt=media&token=d64a015b-11a7-4e5d-aa9c-d4c24d91f61c'
        passimg1.src = 'image2/경북.png'
    }
    if(text === '경남') {
        $(pass1).append('경남 전 지역')
        pass2.textContent = '경남 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/71.jpg?alt=media&token=b1bd2373-df07-4400-ac80-1036465309f8'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/72.jpg?alt=media&token=3bd22fd1-5a05-40ce-b397-8052564975a2'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/73.jpg?alt=media&token=58994f10-4cd5-4409-b49d-d948f3c10e68'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/74.jpg?alt=media&token=c076bfce-a7b8-4596-8e5a-c9d8b1c3a8fc'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/75.jpg?alt=media&token=00fc6404-6eb3-46b5-b7f3-caac8b2db3e8'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/76.jpg?alt=media&token=8faf0c84-3c11-45c7-b6f9-53fd210d3221'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/77.jpg?alt=media&token=02ea5898-1d2a-4b3e-af91-73964a411686'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/78.jpg?alt=media&token=de6a0feb-0b08-4366-a2be-b217071ec3fe'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/79.jpg?alt=media&token=a51f84d5-d579-45bb-9703-346feafa8d8e'
        passimg1.src = 'image2/경남.png'
    }
    if(text === '세종') {
        $(pass1).append('세종 전 지역')
        pass2.textContent = '세종 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/8.jpg?alt=media&token=bd17d9eb-4810-478e-b922-7d9d964ca998'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/80.jpg?alt=media&token=d6014cdb-1713-4032-b10f-47e7aa510bc9'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/81.jpg?alt=media&token=0efd8e40-c1ed-4968-8821-20b2c384f4aa'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/82.jpg?alt=media&token=750c8fdf-d0ef-430c-b8be-2060d3ede749'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/83.jpg?alt=media&token=8cdb079d-14f4-4475-977e-eedefdda1016'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/83.jpg?alt=media&token=8cdb079d-14f4-4475-977e-eedefdda1016'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/84.jpg?alt=media&token=ad323097-02d5-41dc-92b5-4214c685dd01'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/85.jpg?alt=media&token=646ff60a-3c56-4629-976b-4883c93796bf'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/86.jpg?alt=media&token=171dd9f5-4ade-4484-8125-85346186c288'
        passimg1.src = 'image2/세종.png'
    }
    if(text === '제주') {
        $(pass1).append('제주 전 지역')
        pass2.textContent = '제주 전 지역을'
        passimg10.src = 'https://firebasestorage.googleapis.com/v0/b/bitscale-1b2d1.appspot.com/o/navi%2F017.png?alt=media&token=319c3343-25bd-43ee-812f-8c7fbde64835'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/87.jpg?alt=media&token=c2fcfc72-2701-4c6d-849f-8f0d026d8387'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/88.jpg?alt=media&token=3de53052-ee1d-48e1-9101-e29be3a802e3'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/89.jpg?alt=media&token=9a4bec24-260b-42ee-af96-43139ff7695d'
        passimg6.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/90.jpg?alt=media&token=b26b9f3f-5aef-49dc-ad00-6cdf286a651d'
        passimg7.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/91.jpg?alt=media&token=78e27e2a-d008-4b13-a752-97e95bcbf14a'
        passimg8.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/92.jpg?alt=media&token=b8c799fa-9943-450b-91aa-7864d940301c'
        passimg9.src = 'https://firebasestorage.googleapis.com/v0/b/longbottom-a7edf.appspot.com/o/93.jpg?alt=media&token=8c86e59f-a7ff-421f-b80a-78f013c70932'
        passimg1.src = 'image2/제주.png'
    }
}