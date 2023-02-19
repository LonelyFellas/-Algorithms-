// https://leetcode.cn/problems/binary-search/

/**
 * title：二分查找
 * @param numArr 给定的数组
 * @param target 查找的目标数字
 * @return [number] - 返回在 给定的数组 的匹配到地 目标数字 的下标
 */
function search(numArr: number[], target: number): number {
  let start = 0;
  let end = numArr.length;

  while (start !== end) {
    let midIndex = Math.floor((start + end) / 2);
    const currentValue = numArr[midIndex - 1];
    if (currentValue < target && start !== midIndex) {
      start = midIndex;
    } else if (currentValue > target && end !== midIndex) {
      end = midIndex;
    } else if (currentValue === target) {
      return midIndex;
    } else { // no found out
      return -1;
    }
  }

  return -1;
}
