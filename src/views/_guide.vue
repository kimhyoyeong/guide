<template>
  <main>
    <section class="row">
      <h2>슬라이드</h2>

      <h3>basic</h3>
      <swiper class="swiper" ref="swiper1" :options="swiperOption1">
        <!-- slides -->
        <swiper-slide
          ><img src="@/assets/images/@TEST01.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/images/@TEST02.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/images/@TEST03.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/images/@TEST04.jpg" alt=""
        /></swiper-slide>
      </swiper>

      <h3>Navigation</h3>
      <swiper class="swiper" ref="swiper2" :options="swiperOption2">
        <!-- slides -->
        <swiper-slide
          ><img src="@/assets/images/@TEST01.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/images/@TEST02.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/images/@TEST03.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/images/@TEST04.jpg" alt=""
        /></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>

      <h3>Pagination</h3>
      <h4>v-for 사용</h4>
      <swiper class="swiper" ref="swiper3" :options="swiperOption3">
        <!-- slides -->
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"
          ><img :src="`${slide}`" alt=""
        /></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <h3>Progress pagination</h3>
      <swiper class="swiper" ref="swiper4" :options="swiperOption4">
        <!-- slides -->
        <swiper-slide
          ><img src="@/assets/images/@TEST01.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/images/@TEST02.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/images/@TEST03.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/images/@TEST04.jpg" alt=""
        /></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>

      <h3>Fraction pagination</h3>
      <swiper class="swiper" ref="swiper5" :options="swiperOption5">
        <!-- slides -->
        <swiper-slide
          ><img src="@/assets/images/@TEST01.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/images/@TEST02.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/images/@TEST03.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/images/@TEST04.jpg" alt=""
        /></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <h3>Multiple slides per view</h3>
      <swiper class="swiper" ref="swiper6" :options="swiperOption6">
        <!-- slides -->
        <swiper-slide
          ><img src="@/assets/images/@TEST01.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/images/@TEST02.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/images/@TEST03.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/images/@TEST04.jpg" alt=""
        /></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
  </main>
</template>

<script>
export default {
  name: "Guide",
  components: {},
  directives: {},
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
      swiperOption2: {
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOption3: {
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
      swiperOption4: {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOption5: {
        autoHeight: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOption6: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      swiperSlides: [
        require("@/assets/images/@TEST01.jpg"),
        require("@/assets/images/@TEST02.jpg"),
        require("@/assets/images/@TEST03.jpg"),
        require("@/assets/images/@TEST04.jpg"),
      ],
    };
  },
  computed: {},
  mounted() {
    //ref 속성으로 특정 슬라이드 옵션 설정
    this.$refs.swiper3.$swiper.slideTo(3, 1000);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
//guide css
main {
  padding-bottom: 20px;
}
.row {
  padding: 0 20px;
}
h2 {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 9;
  margin: 0 -20px 24px;
  padding: 14px 20px;
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
}
h3 {
  margin-bottom: 12px;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 500;
  &:nth-of-type(n + 2) {
    margin-top: 20px;
  }
  &:before {
    content: "* ";
  }
}
h4 {
  margin-bottom: 8px;
  font-size: 14px;
  &:nth-of-type(n + 2) {
    margin-top: 12px;
  }
  &:before {
    content: "- ";
  }
}
</style>
