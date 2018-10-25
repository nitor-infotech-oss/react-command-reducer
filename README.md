# RxJS with React and Redux

This is a sample application which uses capabilities of RxJs (reactive programming) with React and Redux.

## Command Reducer

Application uses Command Reducer pattern for Redux Store implementation

```javascript
const threadReducer = commandReducer.add(
                        threadActions.getThread, 
                        threadCommands.getThread, 
                        ActionTypes.GET_THREAD
                    );
```

This help you to write clean and decoupled implementation of action dispatcher for redux store.

When you register an `action` you also specify the corresponding `command` to execute when the action is dispatched. This also address side effects using `Redux Observables`

## Tech stack

* ReactJS
* Redux
* Redux Observables
* RxJs
* Bootstrap


# Command Reducer

Following utility class help us to maintain command reducer mapping

```javascript
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

```