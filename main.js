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

  getElement(row, col) {
    const rowData = this.data.get(row);
    return rowData ? rowData.get(col) || 0 : 0;
  }

  setElement(row, col, value) {
    if (value === 0) {
      const rowData = this.data.get(row);

      if (rowData) {
        rowData.delete(col);
        if (rowData.size === 0) {
          this.data.delete(row);
        }
      }
    } else {
      if (!this.data.has(row)) {
        this.data.set(row, new Map());
      }
      this.data.get(row).set(col, value);
    }
  }

  add(other) {
    if (this.rows !== other.rows || this.cols !== other.cols) {
      throw new Error("Matrix dimensions must match for addition");
    }

    const result = new SparseMatrix(this.rows, this.cols);

    for (const [row, rowData] of this.data) {
      for (const [col, value] of rowData) {
        result.setElement(row, col, value);
      }
    }
    for (const [row, rowData] of other.data) {
      for (const [col, value] of rowData) {
        const sum = result.getElement(row, col) + value;
        result.setElement(row, col, sum);
      }
    }

    return result;
  }
}
