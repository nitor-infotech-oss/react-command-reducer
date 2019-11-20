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
    return (state, action) => {
      return this.map.reduce(
        (prevState, mapping) => {
          if (action.type === mapping.type) {
            return mapping.command(prevState, action.payload);
          }
          return prevState;
        },
        typeof state === 'undefined' ? this.initialState : state,
      );
    };
  }
}
