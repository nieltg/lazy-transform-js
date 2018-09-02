/**
 * Copyright (c) 2018-present by nieltg, Daniel
 *
 * This source code is licensed under the MIT license found in the
 * license file in the root directory of this project.
 */

import { expect } from "chai"

import { SymbolIteratorTarget, symbolIterator } from "./polyfills"

describe("polyfills", () => {
  it("polyfills Symbol.iterator if needed", () => {
    expect(Symbol.iterator).to.be.ok
  })

  it("polyfills Symbol.asyncIterator if needed", () => {
    expect(Symbol.asyncIterator).to.be.ok
  })

  describe("#symbolIterator", () => {
    const target: SymbolIteratorTarget = {}

    before(() => {
      symbolIterator(target)
    })

    it("polyfills .iterator", () => {
      expect(target.iterator).to.be.ok
    })

    it("polyfills .asyncIterator", () => {
      expect(target.asyncIterator).to.be.ok
    })
  })
})
