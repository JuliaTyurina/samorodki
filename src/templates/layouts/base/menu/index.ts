import "./index.scss"
import { IMenu } from "./types.ts";

export const menu: IMenu = {
  isOpen: false,
  open() {
    this.isOpen = true
  },
  close() {
    this.isOpen = false
  }
}