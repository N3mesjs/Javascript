/**
 * `await` can be used inside an `async` function to wait for a Promise's result.
 * It pauses the execution of that function until the Promise settles, without
 * blocking the rest of the program. When the Promise is fulfilled, `await`
 * returns its value.
 *
 * An `async` function always returns a Promise. Therefore, using `await` is a
 * more readable alternative to chaining `.then()`: the code looks synchronous,
 * but it still runs asynchronously. If the Promise is rejected, `await` throws
 * the rejection reason, which can be handled with a `try...catch` block.
 */

async function foo(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
    })

    let result = await promise; // wait until the promise resolves (*)

    console.log(result); // "done!"
}

foo();

// Important thing to notice

async function f(){
    return 1; // Same as return Promise.resolve(1);
}
f().then(res => console.log(res)); // 1