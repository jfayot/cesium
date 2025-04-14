import BoxGeometry from "../Core/BoxGeometry.js";
import { defined } from "@cesium/utils";

function createBoxGeometry(boxGeometry, offset) {
  if (defined(offset)) {
    boxGeometry = BoxGeometry.unpack(boxGeometry, offset);
  }
  return BoxGeometry.createGeometry(boxGeometry);
}
export default createBoxGeometry;
