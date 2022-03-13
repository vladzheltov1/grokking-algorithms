// @ts-check

import { LinkedList } from "../structures/linkedList";

/**
 * @param {LinkedList} list 
 */
export const reverseLinkedList = (list) => {
    let prev = null;
    let current = list.head;

    while(current){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        list[0] = prev;
    }

    return list;
}

const list = new LinkedList();

list.append("first");

console.log(list.toArray());