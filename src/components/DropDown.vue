<template>
  <div class="dropdown" @click="toggleDropdown">
    <div class="dropdown-title">
      {{ title }}
      <span class="material-symbols-outlined">
        {{ isOpen ? 'expand_less' : 'expand_more' }}
      </span>
    </div>
    <div v-if="isOpen" class="dropdown-content">
      <a v-for="(item, index) in items" :key="index" :href="item.link" class="dropdown-item">
        {{ item.title }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    items: Array
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
.dropdown {
  position: relative;
  cursor: pointer;
}

.dropdown-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #FFFFFF;
  color: #01579B;

  font-family: Lato;
  font-size: 16px;
  font-weight: 500;

}

.dropdown-title:hover{
  background-color: #F7F7F7;
  font-weight: 700;

}

.dropdown-content {
  margin-top: 5px;
  border-radius: 8px;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.dropdown-content:hover{
  border-radius: 8px;

}

.dropdown-item {
  display: block;
  padding: 12px 16px;
  text-decoration: none;
  color: #01579B;

  font-family: Lato;
  font-size: 16px;
  font-weight: 500;


}

.dropdown-item:hover {
  background-color: #F7F7F7;
  font-weight: 700;

}
</style>