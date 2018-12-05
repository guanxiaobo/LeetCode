/**
 * https://leetcode.com/problems/valid-parentheses/description/
 * Difficulty:Easy
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 *  1.Open brackets must be closed by the same type of brackets.
 *  2.Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 * 
 * Example:
 * Input: "{[]}"
 * Output: true
 * 
 */

 /**
 * @param {string} s
 * @return {boolean}
 */
var isValidOne = function(s) {
    let map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] in map) {
            stack.push(s[i]);
        } else {
            if (s[i] != map[stack.pop()]) {
                return false;
            }
            continue;
        }
    }
    if (!stack.length) {
        return true;
    } else {
        return false;
    }
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValidTwo= function(s) {
    var stack = []
    for (let i = 0; i < s.length; i++) {
        let x = s[i];
        switch (x) {
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '{':
                stack.push('}');
                break;
            default:
                if (!stack.length || stack.pop() != x) {
                    return false;
                }
        }
    }
    
    return stack.length == 0;
};

console.log(isValidTwo('()'));