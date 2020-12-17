import React from 'react'
import { Provider } from 'react-redux'
import songReducer from '../reducer/songsReducer'

describe('Song Reducer Testing', () => {
	test('Default values ', () => {
		expect(songReducer(undefined, {})).toEqual({
			selectedSongs: [],
			value: null,
		})
	})

	test('Adding selected song to an empty array', () => {
		const song = 'Rain Must Fall'
		const action = {
			type: 'SET_SELECTED_SONGS',
			payload: song,
		}

		expect(songReducer({}, action)).toEqual({
			selectedSongs: song,
		})
	})

	test('Adding selected song to an array containing other selected songs', () => {
		const song = 'Rain Must Fall'
		const action = {
			type: 'SET_SELECTED_SONGS',
			payload: song,
		}

		const obj = {
			selectedSongs: ['You Take My Breath Away', "You're My Best Friend"],
		}

		expect(songReducer(obj, action)).toEqual({
			selectedSongs: [
				'You Take My Breath Away',
				"You're My Best Friend",
				'Rain Must Fall',
			],
		})
	})

	test('Unselecting/Removing selected song', () => {
		const song = 'Rain Must Fall'
		const action = {
			type: 'REMOVE_SONG',
			payload: song,
		}

		const obj = {
			selectedSongs: [
				'You Take My Breath Away',
				"You're My Best Friend",
				'Rain Must Fall',
			],
		}

		expect(songReducer(obj, action)).toEqual({
			selectedSongs: ['You Take My Breath Away', "You're My Best Friend"],
		})
	})
})
