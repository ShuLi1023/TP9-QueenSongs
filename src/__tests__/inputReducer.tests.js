import inputReducer from '../reducer/inputReducer'

describe('Input Reducer Testing', () => {
	test('Default values ', () => {
		expect(inputReducer(undefined, {})).toEqual('')
	})

	test('Set User Input ', () => {
		const action = {
			type: 'SET_USER_INPUT',
			payload: 'test',
		}

		expect(inputReducer(undefined, action)).toEqual('test')
	})
})
