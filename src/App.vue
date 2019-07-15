<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './style/all';
*{
	padding: 0;
	margin: 0;
}
body{
  height: 100vh;
  overflow: hidden;
}
@media screen and (min-width: 300px) {
    html {font-size: 14px;}
}
 
@media screen and (min-width: 360px) {
    html {font-size: 16px;}
}
 
@media screen and (min-width: 400px) {
    html {font-size: 18px;}
}
 
@media screen and (min-width: 440px) {
    html {font-size: 20px;}
}
 
@media screen and (min-width: 480px) {
    html {font-size: 22px;}
}
 
@media screen and (min-width: 640px) {
    html {font-size: 28px;}
}
</style>
