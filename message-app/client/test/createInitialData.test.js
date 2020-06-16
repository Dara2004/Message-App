import dataFromBackend from "../src/data-new";
import { createInitialReduxState } from "../src/utils/functions";
import data from "../src/data";

const assert = require("assert");

describe("create initial data", () => {
  it("should create initial data", () => {
    const transformedData = createInitialReduxState(dataFromBackend);
    console.log(transformedData);
    console.log(data);
    assert.deepEqual(transformedData, data);
  });
});
