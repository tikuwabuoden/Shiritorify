export type ReadingValidationResult = {
  ok: boolean
  reason?: string
}

export const normalizeReading = (reading: string): string => {
  // TODO: カタカナをひらがなに変換する
  // TODO: 小文字かなを通常のかなに正規化する
  // TODO: 長音「ー」を処理する
  // TODO: 記号，空白，英数字を除外する
  return reading
}

export const getFirstReadingChar = (reading: string): string => {
  // TODO: 正規化した読みの最初の文字を返す
  return normalizeReading(reading).at(0) ?? ''
}

export const getLastReadingChar = (reading: string): string => {
  // TODO: 正規化した読みの最後の文字を返す
  return normalizeReading(reading).at(-1) ?? ''
}

export const endsWithN = (reading: string): boolean => {
  // TODO: 読みが「ん」で終わるか判定する
  return getLastReadingChar(reading) === 'ん'
}

export const canConnectReadings = (
  previousReading: string,
  nextReading: string,
): boolean => {
  // TODO: 前の読みの最後の文字と，次の読みの最初の文字が一致するか判定する
  const previousLast = getLastReadingChar(previousReading)
  const nextFirst = getFirstReadingChar(nextReading)

  return previousLast !== '' && previousLast === nextFirst
}

export const validateNextReading = (
  previousReading: string,
  nextReading: string,
): ReadingValidationResult => {
  // TODO: 空文字，「ん」終わり，しりとり不一致を判定する
  if (normalizeReading(nextReading) === '') {
    return {
      ok: false,
      reason: '読み仮名を入力してください',
    }
  }

  if (endsWithN(nextReading)) {
    return {
      ok: false,
      reason: '「ん」で終わる曲は使えません',
    }
  }

  if (!canConnectReadings(previousReading, nextReading)) {
    return {
      ok: false,
      reason: '前の曲の最後の文字と，次の曲の最初の文字が一致していません',
    }
  }

  return {
    ok: true,
  }
}
