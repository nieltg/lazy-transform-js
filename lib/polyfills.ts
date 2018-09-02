/**
 * Copyright (c) 2018-present by nieltg, Daniel
 *
 * This source code is licensed under the MIT license found in the
 * license file in the root directory of this project.
 */

export interface SymbolIteratorTarget {
  iterator?: symbol
  asyncIterator?: symbol
}

export function symbolIterator(value: SymbolIteratorTarget) {
  if (!value.iterator) {
    value.iterator = Symbol.for("Symbol.iterator")
  }

  if (!value.asyncIterator) {
    value.asyncIterator = Symbol.for("Symbol.asyncIterator")
  }
}

// Apply polyfills
symbolIterator(Symbol)
