<template>
  <div class="default-layout-container">
    <header>
      <h3>PAINEL</h3>
    </header>
    <main>
      <q-card class="main-content">
        <q-card-section>
          <router-view />
        </q-card-section>
      </q-card>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';
.default-layout-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  width: 100vw;

  header {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 12rem;
    padding: 2rem;

    background-color: $primary;

    .img-nutricao {
      cursor: pointer;
    }

    .header-buttons {
      position: absolute;
      right: 1rem;
      top: 1rem;

      color: #ffffff;
      font-size: 1.2rem;
      font-weight: 400;
      text-transform: capitalize;
    }

    h3{
      color: #ffffff
    }
  }

  main {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    margin-top: -2.5rem;
    margin-bottom: 3rem;

    padding: 0;

    width: 90%;
    max-width: 1600px;

    .main-content {
      width: 100%;
    }
  }
}
</style>

<script lang="ts" setup>
import { computed } from 'vue';
// import { useLogout } from '@/composables/';
import { useRouter } from 'vue-router';
// import { useStore } from 'vuex';

const router = useRouter();
// const store = useStore();


</script>
