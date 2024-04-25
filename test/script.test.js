import {
  calculateGrade,
  calculateStatus,
} from "../Submission/static/js/script";

describe("calculateGrade", () => {
  it("should calculate an E for a grade below 40%", () => {
    const result1 = calculateGrade(0);
    expect(result1).toEqual("E");

    const result2 = calculateGrade(25);
    expect(result2).toEqual("E");

    const result3 = calculateGrade(39);
    expect(result3).toEqual("E");
  });

  it("should calculate a D for a grade between 40% and 49%", () => {
    const result1 = calculateGrade(40);
    expect(result1).toEqual("D");

    const result2 = calculateGrade(43);
    expect(result2).toEqual("D");

    const result3 = calculateGrade(49);
    expect(result3).toEqual("D");
  });

  it("should calculate a C for a grade between 40% and 49%", () => {
    const result1 = calculateGrade(50);
    expect(result1).toEqual("C");

    const result2 = calculateGrade(60);
    expect(result2).toEqual("C");

    const result3 = calculateGrade(64);
    expect(result3).toEqual("C");
  });

  it("should calculate a B for a grade between 65% and 79%", () => {
    const result1 = calculateGrade(65);
    expect(result1).toEqual("B");

    const result2 = calculateGrade(70);
    expect(result2).toEqual("B");

    const result3 = calculateGrade(79);
    expect(result3).toEqual("B");
  });

  it("should calculate an A for a grade 80 and above", () => {
    const result1 = calculateGrade(80);
    expect(result1).toEqual("A");

    const result2 = calculateGrade(91);
    expect(result2).toEqual("A");

    const result3 = calculateGrade(100);
    expect(result3).toEqual("A");
  });
});

describe("calculateStats", () => {
  it("should calculate the correct status for an item that is passed", () => {
    const status = "pass";
    const comments = [];
    const result = calculateStatus(status, comments);
    expect(result).toEqual("pass");
  });

  it("should calculate the correct status for an item that has failed", () => {
    const status = "fail";
    const comments = [];
    const result = calculateStatus(status, comments);
    expect(result).toEqual("fail");
  });

  it("should calculate the correct status for an item that has comments and no status", () => {
    const comments = ["this is a comment"];
    const result = calculateStatus(undefined, comments);
    expect(result).toEqual("started");

    const result2 = calculateStatus("pass", comments);
    expect(result2).toEqual("pass");

    const result3 = calculateStatus("fail", comments);
    expect(result3).toEqual("fail");
  });

  it("should return todo if there is no status and no comments", () => {
    const status = null;
    const comments = [];
    const result = calculateStatus(status, comments);
    expect(result).toEqual("todo");
  });
});
