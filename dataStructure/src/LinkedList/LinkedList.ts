export class LinkedList {
    private length: number = 0;
    private header: Node = null;

    insert(data: any): void {
        let node: Node = new Node(data);
        if (this.header === null) {
            this.header = node;
        } else {
            let curr: Node = this.header;

            while (curr.next) {
                curr = curr.next;
            }

            curr.next = node;
        }
        this.length++;
    }

    insertAt(data: any, idx: number): void {
        let node: Node = new Node(data),
            curr: Node = this.header,
            next: Node = null,
            index: number = -1;
        if (idx > this.length) {
            return;
        }

        this.length++;
        if (idx === 0) {
            next = curr;
            this.header = node;
            this.header.next = next;
        } else {
            while (curr) {
                index += 1;
                if (index === idx - 1) {
                    next = curr.next;
                    curr.next = node;
                    node.next = next;
                    return;
                }
                curr = curr.next;
            }
        }
    }

    delete(idx: number): void {
        let curr: Node = this.header,
            index: number = -1;

        if (idx > this.length - 1) {
            return;
        }

        this.length -= 1;

        if (idx === 0) {
            curr.data = curr.next.data;
            curr.next = curr.next.next;
        } else {
            while (curr) {
                index += 1;
                if (index === idx - 1) {
                    curr.next = idx < this.length - 1 ? curr.next.next : null;
                    return;
                }
                curr = curr.next;
            }
        }
    }

    deleteList(): void {
        this.header = null;
        this.length = 0;
    }

    deleteLast(): void {
        console.log(this.length);
        this.delete(this.length - 1);
    }

    indexOf(data: any): number {
        let curr: Node = this.header;
        let index = -1;

        while (curr) {
            index += 1;
            if (curr.data === data) {
                return index;
            }
            curr = curr.next;
        }
        return -1;
    }

    count(): number {
        return this.length;
    }
}

export class Node {
    data: any;
    next: any = null;
    constructor(data: any) {
        this.data = data;
    }
}
