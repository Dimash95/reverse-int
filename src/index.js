module.exports = function reverse(n) {
   let last;
   let rev = 0;
   let num = Math.abs(n);

   while (num != 0) {
      last = num % 10;
      rev = rev * 10 + last;
      num = Math.floor(num / 10);
   }
   if (num < 0) {
      return -1 * rev
   }
   return rev;
};
