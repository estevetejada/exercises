import {LinkedList} from './linkedListCycle';
import {Node} from './linkedListCycle';

const node1 = new Node(5);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(1);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = undefined;
const list = new LinkedList(node1);


test('check list with no cycle', () => {
    expect(list.hasCycle()).toBe(false);
});
