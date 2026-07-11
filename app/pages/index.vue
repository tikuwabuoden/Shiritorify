<script setup lang="ts">
type Track = {
  id: number;
  name: string;
  artist: string;
};

const query = ref("");
const serchResults = ref<Track[]>([]);

const tracks = [
  { id: 1, name: "夜に駆ける", artist: "YOSASOBI" },
  { id: 2, name: "ルージュの伝言", artist: "荒井由実" },
];

const searchTracks = () => {
  const keyword = query.value.trim();
  serchResults.value = tracks.filter(
    (track) => track.name.includes(keyword) || track.artist.includes(keyword),
  );
  console.log(serchResults.value);
};
</script>

<template>
  <header>
    <h1 class="header">Shiritorify</h1>
  </header>
  <main>
    <div class="main-div">
      <div class="now-song">
        <p class="now-song-label">Now Songs...</p>
        <p class="now-song-title">夜に駆ける</p>
      </div>
      <form class="form" @submit.prevent="searchTracks">
        <input v-model="query" class="search-input" type="search" />
        <button class="search-button" type="submit">検索</button>
      </form>
    </div>
  </main>
</template>

<style scoped>
.header {
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  margin: 10px auto;
}

.main-div {
  max-width: 720px;
  margin: 0 auto;
}

.now-song {
  display: flex;
  justify-content: flex-end;
  align-items: end;
  gap: 20px;
}

.now-song-label {
  font-size: 30px;
}

.now-song-title {
  font-size: 40px;
}

.form {
  display: flex;
  gap: 10px;
}

.search-input {
  border: 2px solid #999;
  border-radius: 6px;
}

.search-input:focus {
  outline: none;
  border: 2px solid #16a34a;
  border-radius: 6px;
}

.search-button {
}
</style>
