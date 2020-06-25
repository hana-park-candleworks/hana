<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App!!!!!!">
<!--      slot: 컴포넌트 사이에 html 태그를 또 넣고 싶을 떄 사용 한다.
          template 에 #slot 이름을 써주고 추가하고 싶은 html 테그를 써준다.
          하위 컴포넌트에서 데이터를 받아 html에 같이 출력해준다. -->
      <template #helloTemplate="{ slotData }" >
        {{ slotData }}
      </template>
    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
