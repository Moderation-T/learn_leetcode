/* 
*题目：斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
给定 N，计算 F(N)。

 

示例 1：

输入：2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
示例 2：

输入：3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
示例 3：

输入：4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
 

提示：

0 ≤ N ≤ 30

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fibonacci-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 解法1 ：递归算法 O(2^n)
 */
const fib = function (n) {
  if (n === 1) {
    return 1;
  }
  if (n === 0) {
    return 0;
  }
  return fib(n - 1) + fib(n - 2);
};

/**
 * 解法2 ：普通算法 O(n)
 */

var fib = function (n) {
  let first = 0;
  let second = 1;

  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  for (let i = 1; i < n; i++) {
    second = first + second;
    first = second - first;
  }

  return second;
};

/**
 * 解法2 ：queue(队列) 算法 O(n)
 */

//  队列
function Queue() {
  const items = [];

  this.enqueue = function (item) {
    items.push(item);
  };

  this.dequeue = function () {
    return items.shift();
  };

  this.head = function () {
    return items[0];
  };

  this.tail = function () {
    return items[items.length - 1];
  };
}

var fib = function (n) {
  const queue = new Queue();
  queue.enqueue(0);
  queue.enqueue(1);

  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  for (let i = 1; i < n; i++) {
    const del_item = queue.dequeue();
    const new_item = del_item + queue.head();
    queue.enqueue(new_item);
  }

  return queue.tail();
};
