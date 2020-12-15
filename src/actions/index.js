import { onRemoveSong } from '../helpers'

export const REMOVE_SONG = 'REMOVE_SONG'

export const removeSong = (song) => ({
	type: REMOVE_SONG,
	payload: onRemoveSong(song),
})
