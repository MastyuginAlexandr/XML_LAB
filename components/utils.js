/**
 * Склеивает массив строк с помощью указанного разделителя
 * @param {string[]} strings - массив строк для склеивания
 * @param {string} separator - символ-разделитель
 * @returns {string} - результирующая строка
 */
export function concatenate(strings, separator) {
    if (!Array.isArray(strings)) {
        throw new Error('First argument must be an array of strings');
    }
    if (typeof separator !== 'string') {
        throw new Error('Second argument must be a string');
    }
    return strings.join(separator);
}

/**
 * Очищает массив от нежелательных значений (false, undefined, пустые строки, ноль, null)
 * @param {Array} array - исходный массив
 * @returns {Array} - очищенный массив
 */
export function erase(array) {
    if (!Array.isArray(array)) {
        throw new Error('Argument must be an array');
    }
    return array.filter(item => {
        if (item === 0) return false;
        return Boolean(item);
    });
}

/**
 * Вычисляет сумму главной и побочной диагоналей квадратной матрицы
 * @param {number[][]} matrix - квадратная матрица
 * @returns {number} - сумма элементов главной и побочной диагоналей
 * @throws {Error} - если матрица не является квадратной
 */
export function getDiagonalsSum(matrix) {
    if (!Array.isArray(matrix) || !matrix.length || !Array.isArray(matrix[0])) {
        throw new Error('Argument must be a 2D array');
    }

    const n = matrix.length;
    // Проверяем, что матрица квадратная
    if (!matrix.every(row => row.length === n)) {
        throw new Error('Matrix must be square');
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        // Добавляем элемент главной диагонали
        sum += matrix[i][i];
        // Добавляем элемент побочной диагонали
        sum += matrix[i][n - 1 - i];
        
        // Если мы на центральном элементе в матрице нечетного размера,
        // то этот элемент был добавлен дважды, поэтому вычитаем его один раз
        if (n % 2 === 1 && i === Math.floor(n/2)) {
            sum -= matrix[i][i];
        }
    }
    return sum;
}

/**
 * Проверяет, является ли строка палиндромом (решение через реверс строки)
 * @param {string} str - строка для проверки
 * @returns {boolean} - true если строка является палиндромом
 */
export function isPalindrome1(str) {
    // Приводим к нижнему регистру и убираем все символы кроме букв и цифр
    const cleanStr = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    // Сравниваем строку с её перевёрнутой версией
    return cleanStr === cleanStr.split('').reverse().join('');
}

/**
 * Проверяет, является ли строка палиндромом (решение через два указателя)
 * @param {string} str - строка для проверки
 * @returns {boolean} - true если строка является палиндромом
 */
export function isPalindrome2(str) {
    // Приводим к нижнему регистру и убираем все символы кроме букв и цифр
    const cleanStr = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    
    // Используем два указателя: один с начала, другой с конца
    let left = 0;
    let right = cleanStr.length - 1;
    
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
} 