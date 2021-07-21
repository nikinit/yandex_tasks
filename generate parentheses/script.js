function getParentheses(n) {
    let res = [];
    function generate (p = [], left = 0, right = 0) {
        console.log(p.join(''));
        if (p.length === 2 * n) {
            res.push(p.join(''));
        }
        if (left < n) {
            p.push('(');
            generate(p, left + 1, right);
            p.pop();
        }
        if (right < left) {
            p.push(')');
            generate(p, left, right + 1);
            p.pop();
        }
    }
    generate();
    return res;
}
console.log(getParentheses(3));