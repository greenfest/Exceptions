class Example {
    static method1(): void {
        // Throws an error with a custom message when the method1 is called.
        throw new Error('This is a custom error from method1');
    }

    static method2() {
        // Throws a custom exception with message "Custom exception" and code of 222.
        throw { message: "Custom exception", code: 222 };
    }

    static method3() {
        // Throws a TypeError if an invalid type is provided.
        throw new TypeError('Invalid type!');
    }

    static calculateDifference(arr1: number[], arr2: number[]): number[] {
        if (arr1.length !== arr2.length) {
            // Throws an error if the length of two arrays are not equal
            throw new RangeError('Arrays are of different lengths!');
        }
        let arr3: number[] = [];
        for (let i: number = 0; i < arr1.length; i++) {
            arr3[i] = arr1[i] - arr2[i];
        }
        return arr3;
    }

    static divideArrays(arr1: number[], arr2: number[]): number[] {
        if (arr1.length !== arr2.length) {
            throw new Error('Arrays are of different lengths!');
        }

        const result: number[] = [];

        for (let i = 0; i < arr1.length; i++) {
            if (arr2[i] === 0) {
                throw new Error('Division by zero!');
            }
            result.push(arr1[i] / arr2[i]);
        }

        return result;
    }

}

// Call methods from the Example class to get exceptions.
Example.method1();
Example.method2();
Example.method3();
Example.calculateDifference([1, 2, 3], [4, 5]);
Example.divideArrays([1, 2, 3], [4, 5]);