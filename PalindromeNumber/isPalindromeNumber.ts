// https://leetcode.cn/problems/palindrome-number/

/**
 * title: 判断是否是回文数
 * @param x 需要被判断的数字
 * @return 【boolean] true 为是回文数，false 为不是
 */
function isPalindrome(x: number): boolean {
    // 特殊情况
    // 如果小于0或者给定的数字（这个数字不能等于0）末尾不等于0的情况
    if (x < 0  || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let revertedNumber = 0;
    // 循环反转
    while(x > revertedNumber) {
        revertedNumber = x % 10 + revertedNumber * 10;
        x = Math.floor(x  / 10)
    }

    return revertedNumber == x || x === Math.floor(revertedNumber / 10)
};