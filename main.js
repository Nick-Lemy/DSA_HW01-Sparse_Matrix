import fs from "fs";

class SparseMatrix {
  constructor(numRows, numCols) {
    this.rows = numRows;
    this.cols = numCols;
    this.data = new Map();
  }

  static async fromFile(filePath) {
    try {
      const content = await fs.promises.readFile(filePath, "utf8");

      const lines = content.split("\n");

      const rows = parseInt(lines[0].substring(5));

      const cols = parseInt(lines[1].substring(5));

      const matrix = new SparseMatrix(rows, cols);

      for (let i = 2; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const values = line
          .slice(1, -1)
          .split(",")
          .map((x) => parseInt(x.trim()));
        matrix.setElement(values[0], values[1], values[2]);
      }

      return matrix;
    } catch (error) {
      throw new Error(`Error reading file: ${error.message}`);
    }
  }
}
