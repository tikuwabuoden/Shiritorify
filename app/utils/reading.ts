export type ReadingValidationResult = {
  ok: boolean;
  reason?: string;
};

const map: Record<string, string> = {
  ぁ: "あ",
  ぃ: "い",
  ぅ: "う",
  ぇ: "え",
  ぉ: "お",
  っ: "つ",
  ゃ: "や",
  ゅ: "ゆ",
  ょ: "よ",
  ゎ: "わ",
  ゕ: "か",
  ゖ: "け",
};

const getVowel = (char: string): string => {
  if ("あかさたなはまやらわがざだばぱぁゃ".includes(char)) return "あ";
  if ("いきしちにひみりぎじぢびぴぃ".includes(char)) return "い";
  if ("うくすつぬふむゆるぐずづぶぷぅゅ".includes(char)) return "う";
  if ("えけせてねへめれげぜでべぺぇ".includes(char)) return "え";
  if ("おこそとのほもよろをごぞどぼぽぉょ".includes(char)) return "お";
  return char;
};

export const normalizeReading = (reading: string): string => {
  // カタカナをひらがなに変換する
  reading = reading.replace(/[ァ-ヶ]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0x60),
  );
  // 小文字かなを通常のかなに正規化する
  reading = reading.replace(/[ぁぃぅぇぉっゃゅょゎゕゖ]/g, (char) => map[char]);
  // 長音「ー」を前の文字の母音に変換する
  reading = reading.replace(/ー/g, (_, offset) =>
    getVowel(offset > 0 ? reading[offset - 1] : ""),
  );
  // 記号，空白，英数字を除外する
  reading = reading.replace(/[^ぁ-ゖゔ]]/g, "");

  return reading;
};

export const getFirstReadingChar = (reading: string): string => {
  // 正規化した読みの最初の文字を返す
  return normalizeReading(reading).at(0) ?? "";
};

export const getLastReadingChar = (reading: string): string => {
  // 正規化した読みの最後の文字を返す
  return normalizeReading(reading).at(-1) ?? "";
};

export const endsWithN = (reading: string): boolean => {
  //  読みが「ん」で終わるか判定する
  return getLastReadingChar(reading) === "ん";
};

export const canConnectReadings = (
  previousReading: string,
  nextReading: string,
): boolean => {
  // 前の読みの最後の文字と，次の読みの最初の文字が一致するか判定する
  const previousLast = getLastReadingChar(previousReading);
  const nextFirst = getFirstReadingChar(nextReading);
  return previousLast !== "" && nextFirst !== "" && previousLast === nextFirst;
};

export const validateNextReading = (
  previousReading: string,
  nextReading: string,
): ReadingValidationResult => {
  // 空文字，「ん」終わり，しりとり不一致を判定する
  if (
    normalizeReading(nextReading) === "" ||
    endsWithN(nextReading) ||
    !canConnectReadings(previousReading, nextReading)
  ) {
    return {
      ok: false,
    };
  } else {
    return {
      ok: true,
    };
  }
};
