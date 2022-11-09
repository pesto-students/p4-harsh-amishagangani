@@ -1,5 +1,3 @@
// REVERSE A LINKED LIST

class SLLNode {
  constructor(value) {
    this.value = value;
@@ -44,6 +42,6 @@ function reverseSLL() {
}

createSLL([1, 2, 3, 4, 5]);
traverseSLL(head); // 1 2 3 4 5
reverseSLL(head);
traverseSLL(head); // 5 4 3 2 1
traverseSLL(); // 1 2 3 4 5
reverseSLL();
traverseSLL(); // 5 4 3 2 1