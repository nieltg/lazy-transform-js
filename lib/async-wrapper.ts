/**
 * Copyright (c) 2018-present by nieltg, Daniel
 *
 * This source code is licensed under the MIT license found in the
 * license file in the root directory of this project.
 */

export class AsyncWrapper<T> implements AsyncIterable<T> {
  constructor(protected iterable: AsyncIterable<T>) {}

  [Symbol.asyncIterator]() {
    return this.iterable[Symbol.asyncIterator]()
  }

  map<U>(mapFunc: (value: T) => U) {
    return new AsyncWrapper(
      (async function*(values) {
        for await (const value of values) {
          yield mapFunc(value)
        }
      })(this.iterable)
    )
  }

  mapAwait<U>(mapFunc: (value: T) => Promise<U>) {
    return new AsyncWrapper(
      (async function*(values) {
        for await (const value of values) {
          yield await mapFunc(value)
        }
      })(this.iterable)
    )
  }
}
