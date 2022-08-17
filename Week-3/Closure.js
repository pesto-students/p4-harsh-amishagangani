// function createincrement() is created.
function createincrement() {
    let count = 0;
    /* count is initalized 0 */

    function increment() {
        count++;
    }
    /* count will be incremented from 0 to 1 */
    let message = `Count is ${count}`;
    function log() {
        console.log(message);/* the message will be printed "count is " */
    }
    return [increment, log];
}
const [increment1, log1] = createincrement(); //functions of createincrement are moved to array [increment, log] *I have changed the name for my understanding*
increment1();
increment1();
increment1();
log1();

// since the message is executing one time only under "createincrement", the message will remain the same as it is not defined within the increment function. 
