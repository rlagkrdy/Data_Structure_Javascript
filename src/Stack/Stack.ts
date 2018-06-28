export class Stack<T> {
    private data: Array<T> = [];
    constructor(private maxLength?: number) {}

    push(data: T): void {
        if (this.isFullStack()) {
            return;
        }
        this.data.push(data);
    }

    pop(): T {
        return this.data.pop();
    }

    top(): T {
        return this.data[this.data.length - 1];
    }

    isEmptyStack(): boolean {
        return this.data.length === 0;
    }

    isFullStack(): boolean {
        return !this.maxLength ? false : this.data.length >= this.maxLength;
    }
}
