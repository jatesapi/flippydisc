<template>
  <div class="dice">
    <slot></slot>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@500&display=swap');
.dice {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #161C21;
  color: white;
  word-break: break-all;
  text-overflow: ellipsis;
  text-transform: uppercase;
  height: 150px;
  width: 150px;
  border-radius: 0.8rem;
  font-size: 2rem;
  font-family: 'Saira Extra Condensed', sans-serif;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.green {
  border: 2px solid #80e7c4;
}
.pink {
  border: 2px solid #ff69b4;
}

</style>
