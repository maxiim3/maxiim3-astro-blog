export function Page() {
  return (
    <div>
      <h1 className={"text-blue-500"}>Hello World</h1>
      <button>CLICK</button>
    </div>
  );
}

class State<T> {
  constructor(private readonly _value: T | undefined) {}

  get value() {
    return this._value;
  }

  setValue(value: T) {
    new State(value);
  }
}

function useMyState<T>(initialValue?: T) {
  let state = new State<T>(initialValue);
}
