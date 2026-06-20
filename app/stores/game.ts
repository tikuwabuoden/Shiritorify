import { defineStore } from "pinia";

export type Track = {
  spotifyId: string;
  name: string;
  artistName: string;
  albumImageUrl: string;
  spotifyUrl: string;
  previewOrEmbedUrl?: string;
  reading: string;
};

export type GameStatus =
  | "ready"
  | "playing"
  | "success"
  | "failed"
  | "finished";

export type GameState = {
  status: GameStatus;
  currentTrack: Track | null;
  usedTracks: Track[];
  score: number;
  remainingSeconds: number;
  failureReason: string | null;
};

const initialRemainingSeconds = 30;

export const useGameStore = defineStore("game", {
  state: (): GameState => ({
    status: "ready",
    currentTrack: null,
    usedTracks: [],
    score: 0,
    remainingSeconds: initialRemainingSeconds,
    failureReason: null,
  }),

  getters: {
    isPlaying: (state): boolean => state.status === "playing",

    lastUsedTrack: (state): Track | null => {
      // usedTracks の最後の曲を返す
      return state.usedTracks.at(-1) ?? null;
    },
    usedSpotifyIds: (state): string[] => {
      return state.usedTracks.map((track) => track.spotifyId);
    },
  },

  actions: {
    startGame(firstTrack: Track) {
      // ゲーム開始時の状態に更新する
      this.status = "playing";
      this.currentTrack = firstTrack;
      this.usedTracks = [firstTrack];
      this.score = 0;
      this.remainingSeconds = initialRemainingSeconds;
      this.failureReason = null;
    },

    submitTrack(nextTrack: Track) {
      // TODO: 再使用、読み、しりとり接続を判定してゲーム状態を更新する
      throw new Error("Not implemented");
    },

    tick() {
      // TODO: 残り時間を減らし、0秒になったら失敗状態にする
      throw new Error("Not implemented");
    },

    finishGame() {
      // TODO: 結果画面に進むための状態に更新する
      throw new Error("Not implemented");
    },

    resetGame() {
      // TODO: 初期状態に戻す
      throw new Error("Not implemented");
    },
  },
});
