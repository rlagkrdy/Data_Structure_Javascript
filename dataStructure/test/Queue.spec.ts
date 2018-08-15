import * as mocha from 'mocha';
import * as should from 'should';
import { Queue } from '../src/Queue/Queue';
import { Query } from 'mysql';
describe('Queue test', () => {
    let queue: Queue<string> = new Queue<string>();

    it('EnQueue(data) :: 큐의 끝에 요소에 data가 삽입되어야 한다', () => {
        queue.EnQueue('aaa');
        should(queue['dataArr'][0]).be.equal('aaa');
    });

    it('DeQueue() :: 큐의 맨 앞에서 요소를 제거하고 반환한다.', () => {
        queue.EnQueue('bbb');
        let queueData: string = queue.DeQueue();
        should(queueData).be.equal('aaa');
    });

    it('Front() :: 큐의 맨 앞에서 요소를 제거하지 않고 반환', () => {
        let queueData: string = queue.Front();
        should(queueData).be.equal('bbb');
        should(queue['dataArr']).be.length(1);
    });

    it('QueueSize() :: 큐의 저장된 요소 수를 반환', () => {
        should(queue.QueueSize()).be.equal(1);
    });

    it('isEmptyQueue() :: 큐에 요소가 저장 되어 있는지 여부를 반화', () => {
        should(queue.isEmptyQueue()).be.false();
    });
});
