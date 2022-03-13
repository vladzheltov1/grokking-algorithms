// @ts-check

import { reverseLinkedList } from "./src/algorithms/reverseLinkedList.js";
import { LinkedList } from "./src/structures/linkedList.js";

const list = new LinkedList();

list.append("test");
list.append("test2");

const list1 = reverseLinkedList(list);

console.log(list1.toArray());