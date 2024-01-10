<template>
  <footer>
    <div class="footer-content">
      <p>2024 Asian Restaurant. All rights reserved.</p>
      <p class="address">123 Sample Street, Cityville, Country</p>
      <p>Contact: +1 (123) 456-7890</p>
      <img src="https://joomly.net/frontend/web/images/googlemap/map.png" alt="" class="google-maps-image">
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.google-maps-image {
  position: absolute;
  top: 0;
  right: -100px;
  max-width: 270px;
  max-height: 270px;
}
</style>
