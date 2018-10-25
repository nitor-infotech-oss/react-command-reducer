export default class CommandReducer {
	constructor(initialState) {
		this.initialState = initialState;
		this.map = [];
	}

	add(action, command, type) {
		this.map.push({ action, command, type });
		return this;
	}

	reducer() {
		return this._reducer;
	}

	_reducer = (state, action) => {
		if (typeof state === 'undefined') {
			state = this.initialState;
		}

		return this.map.reduce((prevState, mapping) => {
			if (action.type === mapping.type) {
				return mapping.command(prevState, action.payload);
			} else {
				return prevState;
			}
		}, state);
	};
}
