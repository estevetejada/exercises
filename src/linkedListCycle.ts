export class Node {
    value: number;
    next?: Node;

    constructor(value: number, next?: Node) {
        this.value = value;
        this.next = next;
    }
}

export class LinkedList {
    head?: Node;

    constructor(head?: Node) {
        this.head = head;
    }

    hasCycle(): boolean {
        if (this.head === undefined) {
            return false;
        }
        let slow = this.head;
        let fast = this.head.next;

        while (slow !== fast) {
            if (fast?.next === undefined ||
                fast?.next.next === undefined ||
                slow.next === undefined) {
                return false;
            }
            slow = slow.next;
            fast = fast.next.next;
        }

        return true;
    }
}
