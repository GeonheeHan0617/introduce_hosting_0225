
<template>
<v-app>
  <h1> Project </h1>
          <header>
      헤더 부분
      </header>
        <section>
            section 부분
        </section>


</v-app>
</template>
<script>
 
</script>

<style lang="scss" scoped>
h1 {
text-align: center;

}
 header, section  {
  width: 100%;
  position: relative;
  padding: 20px 0;
  color: #292929;
  font-size: 14px;
  text-align: center;
  border-top: 1px solid #cccccc;

  p {
    max-width: calc(100% - 40px);
    margin: 0 auto;
  }
}
</style>