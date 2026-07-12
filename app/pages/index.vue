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
  if (keyword == "") {
    serchResults.value = [];
  } else {
    serchResults.value = tracks.filter(
      (track) => track.name.includes(keyword) || track.artist.includes(keyword),
    );
  }
  console.log(serchResults.value);
};
</script>

<template>
  <div class="page">
    <header>
      <h1 class="header">Shiritorify</h1>
    </header>
    <main>
      <div class="main-div">
        <div class="now-song">
          <p class="now-song-label">Now Songs...</p>
          <p class="now-song-title">夜に駆ける</p>
        </div>
        <div class="search-box">
          <form class="form">
            <input
              v-model="query"
              class="search-input"
              type="search"
              @input="searchTracks"
            />
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  margin: 10px auto;
}

main {
  flex: 1;
  display: flex;
}

.main-div {
  flex: 1;
  width: min(720px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr auto;
}

.now-song {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.now-song-label {
  font-size: 30px;
}

.now-song-title {
  font-size: 40px;
}

.search-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  display: flex;
}

.search-input {
  width: 500px;
  border: 2px solid #999;
  border-radius: 6px;
}

.search-input:focus {
  outline: none;
  border: 2px solid #16a34a;
  border-radius: 6px;
}
</style>
