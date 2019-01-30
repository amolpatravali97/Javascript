function createQueue() {
    const queue = []

    return{
        enqueue(item) {
            queue.unshift(item)
        },
        dequeue(item) {
            return queue.pop()
        },
        peek() {
            return queue[queue.length - 1]
        },
        get length() {
            return queue.length
        },
        isEmpty() {
            return queue.length == 0
        }
    }
}
const q = createQueue()
console.log("Is the array empty?")
console.log(q.isEmpty())
console.log("Lets start inserting texts")
q.enqueue("First")
q.enqueue("Second")
q.enqueue("Third")
console.log("Lets delete")
q.dequeue()
console.log("What's left")
console.log(q.peek())
var l = q.length
console.log("This is in "+l+" position")
console.log("Lets remove this now")
q.dequeue()
console.log("Remove the last text")
q.dequeue()
console.log("Checking if its empty")
console.log(q.isEmpty())
