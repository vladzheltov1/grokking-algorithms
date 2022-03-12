// @ts-check

class ListNode {
    data = null;
    next = null;
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append = (data) => {
        const node = new ListNode(data);

        if(!this.head){
            this.head = node;
        }

        if(!this.tail){
            this.tail = node;
        }

        this.tail.next = node;
        this.tail = node;
    }

    prepend = (data) => {
        const node = new ListNode(data, this.head);

        if(!this.tail){
            this.tail = node;
        }

        this.head = node;
    }

    insertAfter = (after, data) => {
        const found = this.find(after);

        if(!found){
            return;
        }

        let current = this.head;

        while(current){
            if(current.data === after){
                const node = new ListNode(data, current.next);
                current.next = node;
            }
            current = current.next;
        }
    }

    remove = (data) => {
        const found = this.find(data);
        
        if(!found){
            return;
        }
        
        if(!this.head){
            return;
        }
        
        while(this.head && this.head.data === data){
            this.head = this.head.next;
        }
    
        let current = this.head.next;
        while(current.next){
            if(current.next.data === data){
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }

        if(this.tail.data === data){
            this.tail = current;
        }
    }

    find = (data) => {
        let current = this.head;
        while(current){
            if(current.data === data){
                return current;
            }
            current = current.next;
        }
        return null;
    } 

    /**
     * @returns {Array<ListNode>} output
     */
    toArray = () => {
        const output = [];

        let current = this.head;

        while(current){
            output.push(current);
            current = current.next;
        }

        return output;
    }
}

const list = new LinkedList();

list.append("first");
list.append("second");
list.append("third");

/**
 * @param {LinkedList} list 
 */
const convertLinkedList = (list) => {
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

console.log(convertLinkedList(list));
// console.log(list.toArray())