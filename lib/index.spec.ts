/**
 * Copyright (c) 2018-present by nieltg, Daniel
 *
 * This source code is licensed under the MIT license found in the
 * license file in the root directory of this project.
 */

import { expect } from "chai"
import isCallable = require("is-callable")

import { transform } from "."
import { Wrapper } from "./wrapper"
import { AsyncWrapper } from "./async-wrapper"

describe("index", () => {
  describe("#transform", () => {
    it("is callable", () => {
      expect(isCallable(transform)).to.be.ok
    })

    it("returns Wrapper if value is an Iterable", () => {
      expect(transform((function*(): Iterable<never> {})())).to.be.instanceof(
        Wrapper
      )
    })

    it("returns AsyncWrapper if value is an AsyncIterable", () => {
      expect(
        transform((async function*(): AsyncIterable<never> {})())
      ).to.be.instanceof(AsyncWrapper)
    })
  })
})
