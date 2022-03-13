// @ts-check

export class ListNode {
    data = null;
    next = null;
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

export class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append = (data) => {
        const node = new ListNode(data);

        if(this.tail){
            this.tail.next = node;
        }

        if(!this.head){
            this.head = node;
        }

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
     * @returns {Array<string>} output
     */
    toArray = () => {
        const output = [];

        if(!this.head){
            return [];
        }

        let current = this.head;

        while(current){
            output.push(current.data);
            current = current.next;
        }

        return output;
    }

    clear = () => {
        this.head = null;
        this.tail = null;
    }
}