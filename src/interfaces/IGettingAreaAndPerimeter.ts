import { IGettingArea } from "./IGettingArea";
import { IGettingPerimeter } from "./IGettingPerimeter";

export interface IGettingAreaAndPerimeter
  extends IGettingArea,
    IGettingPerimeter {}
