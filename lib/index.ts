/**
 * Copyright (c) 2018-present by nieltg, Daniel
 *
 * This source code is licensed under the MIT license found in the
 * license file in the root directory of this project.
 */

import { AsyncWrapper } from "./async-wrapper"
import { Wrapper } from "./wrapper"

function isAsyncIterable<T>(
  iterable: Iterable<T> | AsyncIterable<T>
): iterable is AsyncIterable<T> {
  return !!(iterable as AsyncIterable<T>)[Symbol.asyncIterator]
}

export function transform<T>(iterable: Iterable<T> | AsyncIterable<T>) {
  if (isAsyncIterable(iterable)) {
    return new AsyncWrapper(iterable)
  } else {
    return new Wrapper(iterable)
  }
}
