import LinkedListNode from './LinkedListNode';

class LinkedList {
    constructor() {
        /** @var LinkedListNode */
        this.head = null;

        /** @var LinkedListNode */
        this.tail = null;
    }

    pushFront(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
    }

    pushBack(value) {
        const newNode = new LinkedListNode(value, null);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    insert(value, rawIndex) {
        const index = rawIndex < 0 ? 0 : rawIndex;

        if (index === 0 || !this.head) {
            this.pushFront(value);
        } else {
            let count = 1;
            let curNode = this.head;
            const newNode = new LinkedListNode(value, null);
            while (curNode) {
                if (count === index) break;
                newNode = newNode.next;
                count += 1;
            }

            if (curNode) {
                newNode.next = curNode.next;
                curNode.next = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        let deleteNode = null;

        // delete head.
        while (this.head && this.head.value === value) {
            deleteNode = this.head;
            this.head = this.head.next;
        }

        let curNode = this.head;

        if (curNode) {
            while (curNode.next) {
                if (curNode.next.value === value) {
                    deleteNode = curNode.next;
                    curNode.next = curNode.next.next;
                } else {
                    curNode = curNode.next;
                }
            }
        }

        if (this.tail.value === value) {
            this.tail = curNode;
        }

        return deleteNode;
    }

    find(value) {
        if (!this.head) {
            return null;
        }

        let curNode = this.head;

        while (curNode) {
            if (value !== undefined && curNode.value === value) {
                return curNode;
            }
            curNode = curNode.next;
        }

        return null;
    }

    popBack() {
        const deleteNode = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }

        let curNode = this.head;
        while (curNode.next) {
            if (!curNode.next.next) {
                curNode.next = null;
            } else {
                curNode = curNode.next;
            }
        }
        this.tail = curNode;

        return deleteNode;
    }

    popFront() {
        if (!this.head) {
            return null;
        }

        const deleteNode = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deleteNode;
    }
}

export default LinkedList;
