import * as actions from '../actions'
import * as types from '../actions'

describe('Testing actions', () => {
	test('Removing Song', () => {
		const song = 'We Will Rock You'
		const expectedAction = {
			type: types.REMOVE_SONG,
			payload: song,
		}
		expect(actions.removeSongActionCreator(song)).toEqual(expectedAction)
	})

	test('Selecting Song', () => {
		const song = 'We Will Rock You'
		const expectedAction = {
			type: types.SET_SELECTED_SONGS,
			payload: song,
		}
		expect(actions.setSelectedSongsActionCreator(song)).toEqual(expectedAction)
	})

	test('Set User Input', () => {
		const text = 'testing'
		const expectedAction = {
			type: types.SET_USER_INPUT,
			payload: text,
		}
		expect(actions.setUserInputActionCreator(text)).toEqual(expectedAction)
	})

	test('Set Value', () => {
		const text = 'testing'
		const expectedAction = {
			type: types.SET_VALUE,
			payload: text,
		}
		expect(actions.setValueActionCreator(text)).toEqual(expectedAction)
	})
})
