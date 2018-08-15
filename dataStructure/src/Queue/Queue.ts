export class Queue<T> {
    private dataArr: Array<T> = [];

    EnQueue(data: T): void {
        this.dataArr.push(data);
    }

    DeQueue(): T {
        return this.dataArr.shift();
    }

    Front(): T {
        return this.dataArr[0];
    }

    QueueSize(): number {
        return this.dataArr.length;
    }

    isEmptyQueue(): boolean {
        return this.dataArr.length === 0;
    }
}
