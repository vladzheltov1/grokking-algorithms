import { LinkedList } from "../../src/structures/linkedList";

describe('test linked list', () => {
    const list = new LinkedList();

    test('should add items to the end', () => { 
        list.clear();
        list.append("first");
        expect(list.toArray()).toEqual(["first"]);
    });

    test('should add items to the end', () => { 
        list.clear();
        list.append("first");
        list.append("second");
        expect(list.toArray()).toEqual(["first", "second"]);
    });
    
    test('should add item to the end and then add one to the beginning', () => {
        list.clear();
        list.append("second");
        list.prepend("first");
        expect(list.toArray()).toEqual(["first", "second"]);
    });

    test('should remove items from middle of the list', () => {
        list.clear();
        list.append("first");
        list.append("second");
        list.append("third");
        list.remove("second");
        expect(list.toArray()).toEqual(["first", "third"]);
    });

    test('should not remove items from empty array', () => {
        list.clear();
        list.remove("second");
        expect(list.toArray()).toEqual([]);
    });
});