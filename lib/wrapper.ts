/**
 * Copyright (c) 2018-present by nieltg, Daniel
 *
 * This source code is licensed under the MIT license found in the
 * license file in the root directory of this project.
 */

import { AsyncWrapper } from "./async-wrapper"

export class Wrapper<T> implements Iterable<T> {
  constructor(protected iterable: Iterable<T>) {}

  [Symbol.iterator]() {
    return this.iterable[Symbol.iterator]()
  }

  map<U>(mapFunc: (value: T) => U) {
    return new Wrapper(
      (function*(values) {
        for (const value of values) {
          yield mapFunc(value)
        }
      })(this.iterable)
    )
  }

  mapAwait<U>(mapFunc: (value: T) => Promise<U>) {
    return new AsyncWrapper(
      (async function*(values) {
        for (const value of values) {
          yield await mapFunc(value)
        }
      })(this.iterable)
    )
  }
}
