# DSA HW01 - OPERATIONS WITH SPARSE MATRIX

This is a Javascript Project that Load two sparse matrices from an input file and can perform addition, subtraction, and multiplication on the matrices depending on the option you are willing to chose.

## How to use it ?

### 1- Clone and Installing the node dependences

Cloning

```bash
git clone https://github.com/Nick-Lemy/DSA_HW01-Sparse_Matrix
```

Change dorectory

```bash
cd DSA_HW01-Sparse_Matrix/dsa/sparse_matrix/code/src
```

Install dependences

```bash
npm install
```

### 2- Runing the script

Here is the runing format

```bash
node main.js <operation> <matrix1_file> <matrix2_file> <output_file>
# Notes: options for the different operations are: add, subtract and multiply
```

### 3- Example of use

```console
zkaynl7@zkaynl7-ThinkPad-T480:~$ git clone https://github.com/Nick-Lemy/DSA_HW01-Sparse_Matrix
Cloning into 'DSA_HW01-Sparse_Matrix'...
remote: Enumerating objects: 114, done.
remote: Counting objects: 100% (114/114), done.
remote: Compressing objects: 100% (89/89), done.
remote: Total 114 (delta 25), reused 104 (delta 15), pack-reused 0 (from 0)
Receiving objects: 100% (114/114), 22.28 MiB | 5.51 MiB/s, done.
Resolving deltas: 100% (25/25), done.
zkaynl7@zkaynl7-ThinkPad-T480:~$ cd DSA_HW01-Sparse_Matrix/dsa/sparse_matrix/code/src
zkaynl7@zkaynl7-ThinkPad-T480:~/DSA_HW01-Sparse_Matrix/dsa/sparse_matrix/code/src$ npm install

up to date, audited 7 packages in 1s

found 0 vulnerabilities
zkaynl7@zkaynl7-ThinkPad-T480:~/DSA_HW01-Sparse_Matrix/dsa/sparse_matrix/code/src$ node main.js add ../../sample_inputs/easy_sample_03_2.txt ../../sample_inputs/easy_sample_03_2.txt ../../sample_inputs/result.text
Result written to ../../sample_inputs/result.text
zkaynl7@zkaynl7-ThinkPad-T480:~/DSA_HW01-Sparse_Matrix/dsa/sparse_matrix/code/src$
```

## Conclusion

This school assignment was really helpful in understanding OOP concepts deeper by implementing it and is preparing me for coding interview
