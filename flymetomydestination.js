 var nums=[1,6,3,4,5,0,0,0,6];  //airports

 let len = nums.length - 1, curr = -1, next = 0, ans = 0

 /*
      len: This variable is assigned the value of the last index of the array nums.
      curr: This variable represents the index of the current position of the jump. Initially, it is set to -1 because we have not started jumping yet.
      next: This variable represents the index of the next position of the jump. Initially, it is set to 0 because the first jump starts from the first element of the array.
      ans: This variable is used to keep track of the minimum number of jumps needed to reach the last element of the array.  
     */


    for (let i = 0; next < len; i++) {  //for (let i = 0; next < len; i++) {: This line starts a for loop that iterates over the elements of the array nums until we reach the last element of the array.
        if (i > curr) ans++, curr = next   //   if (i > curr) ans++, curr = next: This line checks if the index i is greater than or equal to the current position of the jump (curr).
        //  If it is, it means we need to make another jump to reach the next position. So we increment the ans variable to indicate that we have made another jump, and we update curr to the value of next.


        next = Math.max(next, nums[i] + i)     //next = Math.max(next, nums[i] + i): This line calculates the index of the next position of the jump. We take the maximum of the
        //current value of next and the sum of the value of the current element of the array (nums[i]) and its index (i).
         //This is because we want to make the longest possible jump.
    }
    console.log(ans); //This line outputs the minimum number of jumps needed to reach the last element of the array.

   //TC=O(N) SC=O(1)