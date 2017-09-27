// @flow
import "babel-polyfill"
import "isomorphic-fetch"
import { API3 } from "./api"
import { NodeReplacer } from "./replacer"

const api = new API3("https://github.build.ge.com/")
const replacer = new NodeReplacer(api)

replacer.watch(document.body)
