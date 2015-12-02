# Looping Beatles

<img src="https://s3.amazonaws.com/after-school-assets/beatles.gif" hspace="10" width="300" align="right">

We've learned that arrays are really great for storing information, and we've learned how to add things to an array and how to return specific items to an array. But what if we wanted to take an action with every single item in an array? This lab is going to require that you do some learning on your own. Read through the examples below, and feel free to Google any questions you may have. If you have previous experience with loops, dive in!

###Looping

Let's take this array of numbers:

```js
var numbers = [1, 2, 3];
```

And we wanted to add 5 to every number in the array and return the sum, we could do something like this:

```js
numbers[0] + 5;
numbers[1] + 5;
numbers[2] + 5;
```

But what if the array was reallllllly big? Think about Twitter keeping an array of all their users. What if they had an email they wanted to send to all their users. It would take forever to trigger that email manually by using the index of the array. We can streamline this by using loops!

We're going to use a `for` loop to loop over an array.

```js
for (i = 0, i < numbers.length; i++ ){
    var sum = numbers[i] + 5;
    console.log(sum);
}
```

In this example, we set up the variable `i` to be an incrementer. It's going to count up the indexes of the array. We set the `for` loop to run as long as the `i` is less than the length of the array. Then we do `i++` to increment `i` by one every time we loop over an item in the array.

The first loop through `numbers[i]` is the same thing as `numbers[0]`, which would give us the first item in the array, `1`. The next time through, `numbers[i]` is the same thing as `numbers[1]`, which would give us `2`, and so on until there are more numbers in the array.

This code with `console.log` `6, 7, 8`

### Get To Work

You'll be coding your solution in `js/beatles.js`. Your job is to set up a `for` loop to loop over the `beatles` array. Each loop should `console.log` over the name of the Beatles, and print out "_name_ is a Beatle". `_name_` should be replaced by the names in the array.

**BONUS**
We've learned that arrays can store all types of data (string, integers, floats, etc.). But did you know that arrays can store arrays?! It's called nested arrays:

```js
var beatles = [["Paul McCartney", "Bass Guitar"], ["John Lennon", "Guitar"], ["George Harrison", "Lead Guitar"], ["Ringo Starr", "Drums"]]
```

Now, the `beatles` array is storing four arrays. Each nested array contains the name of a Beatle and the instrument he played. 

Given this array, can you figure out how to loop over the main array, and then the nested arrays to `console.log` "Paul McCartney played Bass Guitar", etc. for each Beatle.



<a href='https://learn.co/lessons/hs-intro-web-design-beatles-array-loops' data-visibility='hidden'>View this lesson on Learn.co</a>
