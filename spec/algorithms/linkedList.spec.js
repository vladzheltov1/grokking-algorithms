import { reverseLinkedList } from "../../algorithms/reverseLinkedList";
import { LinkedList } from "../../structures/linkedList";

describe('reverse linked list', () => {
    const list = new LinkedList();

    list.append("first");
    list.append("second");
    list.append("third");

    test('must reverse the linked list', () => {
        expect(reverseLinkedList(list).toArray()).toBe("third", "second", "first");
    });
    
});
