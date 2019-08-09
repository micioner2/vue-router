<template>
  <div class>
    <h1>Galería de fotos</h1>
    <router-link :to="{name: 'fotos', params: {id: item}}" v-for="item of fotos" :key="item.id">
      <button v-text="item"></button>
    </router-link>
    <Foto />

    <button @click="home">Home</button>
    <button @click="anterior">Anterior</button>
    <button @click="siguiente">Siguiente</button>
  </div>
</template>

<script>
import Foto from "@/components/Foto.vue";
export default {
  name: "fotos",
  components: {
    Foto
  },
  data() {
    return {
      fotos: [1, 2, 3, 4]
    };
  },

  methods: {
    home() {
      this.$router.push("/");
    },

    anterior() {
      this.$router.go(-1);
    },

    siguiente() {
      this.$router.go();
    }
  }
};
</script>

<style>
</style>
