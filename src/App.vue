<template>
  <v-app>
    <!-- 데스크톱 크기에서 탐색 서랍이 하단에 툴바 표시되도록 함. app속성은 반드시 설정해야
			하며 v-app엘리먼트 안의 내용이 적절히 표시되도로 도움. -->
    <v-navigation-drawer clipped v-model="drawer" app>
      <v-list>
        <!-- items 배열을 읽어와서 차례로 메뉴로 바인딩 하여 표시함 -->
        <v-list-item value="true" v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item-action>
            <!-- html 엘리먼트의 값으로 바인딩할 때는 v-html 디렉티브 사용
							-->
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>



      </v-list>
    </v-navigation-drawer>
    <!-- 탑색서랍이 툴바 아래에 위치할 때 메뉴 아이콘이 적절히 좌측에
			배치되도록 app과 clipped-left 어트리뷰트 지정 -->
    <v-app-bar app clipped-left fixed color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title> GeonHee의 포트폴리오 입니다. </v-toolbar-title>
     
    </v-app-bar>
      

     
    
    <v-content>
      <div class="mt-5"></div>
      <router-view />
    </v-content>
    <v-footer color="secondary" fixed dark>
      <div class="mx-auto">Copyright 2021. Web Front-end developer portfolio
        <br><p>-- by GeonHee Han🌏 </p>
      </div>
        
        <v-list>
         <v-list-item value="true" v-for="(item, i) in items2" :key="i" :href="item.link">
          <v-list-item-action>
            <!-- html 엘리먼트의 값으로 바인딩할 때는 v-html 디렉티브 사용
							-->
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
        <!--   <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content> -->
        </v-list-item>
        </v-list>
    </v-footer>
  </v-app>
</template>

<script>
 export default {
   data() {
      // 탐색서랍과 툴바 메뉴명 항목 배열 반환
      return {
        drawer: false,
        items: [{
          icon: 'home',
            title: 'Home',
            to: '/'
          },
          {
            icon: 'sms',
            title: 'Introduce',
            to: '/introduce'
          },
          {
            icon: 'info',
            title: 'Carrea',
            to: '/carrea'
          },
          {
            icon: 'folder_open',
            title: 'Gh-project',
            to: '/gh-project'
          },
          {
            icon: 'call',
            title: 'Contact',
            to: '/contact'
          }
        ],
          items2: [{
            icon: 'coffee',
            title: '스타벅스',
            link: 'http://www.starbucks.com'
          },
          {
            icon: 'facebook',
            title: '페이스북',
            link: 'https://www.facebook.com/'
          },
     
          {
            icon: 'mdi-instagram',
            title: '인스타그램',
            link: 'https://www.instagram.com/geographer90/'
          },
            {
            icon: 'mdi-github',
            title: '깃허브',
            link: 'https://github.com/GeonheeHan0617'
          },
              {
            icon: 'mdi-email',
            title: '구글메일',
            link: 'https://mail.google.com/mail'
          }
          ]
      }
            
    },
    name: 'App'
  }
</script>
<style lang="scss" scoped>
.v-application--is-ltr 
.v-list-item__action:first-child, 
.v-application--is-ltr 
.v-list-item__icon:first-child {  margin-right: 0px; }

.theme--dark{
 display: flex;
}

</style>