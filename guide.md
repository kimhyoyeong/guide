# Swiper (Vue.js)



## Swiper.js

현재 Swiper 최신버전인 6은 Vue3에 최적화되어 있음

Vue2.x 버전에서 사용할 수 있는 Swiper 5.4.5를 사용함

- API : http://idangero.us/swiper/api/



## vue-awesome-swiper

Vue에서 Swiper을 사용하기 위한 vue-awesome-swiper 설치

- DEMO : https://github.surmon.me/vue-awesome-swiper/



### 기본셋팅방법

**package.json** 추가 후 npm install / yarn install

```json
"dependencies": {
    ...
    "swiper": "^5.4.5",
    "vue-awesome-swiper": "^4.1.1"
},
```

**src/main.js**

```js
import Swiper from "vue-awesome-swiper";

Vue.use(Swiper);
```

**src/App.vue**

```vue
<style lang="scss">
@import "./assets/css/library/swiper.css";
</style>
```



### 구조

```vue
<swiper class="swiper" ref="swiper1" :options="swiperOption1">
    <!-- slides -->
    <swiper-slide><img src="@/assets/images/@TEST01.jpg" alt=""/></swiper-slide>
    <swiper-slide><img src="@/assets/images/@TEST02.jpg" alt=""/></swiper-slide>
    <swiper-slide><img src="@/assets/images/@TEST03.jpg" alt=""/></swiper-slide>
    <swiper-slide><img src="@/assets/images/@TEST04.jpg" alt=""/></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar" slot="scrollbar"></div>
</swiper>
```

- `:options`  data 옵션 바인딩
- `ref` 속성으로 `Swiper`인스턴스를 특정화



### 옵션 사용

```js
data() {
    return {
        swiperOption1: {
            //기존 swiper 옵션, 콜백함수 모두 동일하게 사용
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: true,
            loop: true,
            on: {
                slideChange: function() {
                    console.log("slideChange");
                },
            },
        },
    };
},
      
mounted() {
    //ref 속성으로 특정 슬라이드 옵션 설정
    this.$refs.swiper1.$swiper.slideTo(3, 1000);
},
```




