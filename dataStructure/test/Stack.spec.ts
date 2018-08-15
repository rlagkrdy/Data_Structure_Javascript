import * as mocha from 'mocha';
import * as should from 'should';
import { Stack } from '../src/Stack/Stack';

describe('Stack test', () => {
    let stack: Stack<string> = new Stack<string>();

    it('push(data) :: 데이터가 입력되며 마지막 요소와 같아야 한다.', () => {
        stack.push('aaa');
        should(stack.top()).be.equal('aaa');
    });

    it('pop() :: 마지막 요소를 삭제하고 데이터 반환', () => {
        stack.push('bbb');
        let beforeLength: number = stack['data'].length;
        let data: string = stack.pop();
        let afterLength: number = stack['data'].length;
        should(data).be.equal('bbb');
        should(afterLength).be.equal(beforeLength - 1);
    });

    it('top() :: 마지막 요소를 삭제하지 않고 반환', () => {
        should(stack.top()).be.equal('aaa');
    });

    it('isEmpthStack() :: stack이 비여있는지 여부 반환', () => {
        should(stack.isEmptyStack()).be.false();
    });

    it('isFullStack() :: stack이 꽉찾는지 여부 반환', () => {
        should(stack.isFullStack()).be.false();
    });

    it('isFullStack() :: maxLength설정시 stack이 꽉찾는지 여부 반환', () => {
        stack = new Stack<string>(1);
        stack.push('bbb');
        should(stack.isFullStack()).be.true();
    });

    it('isFullStack() :: 이 true라면 더이서 요소를 추가하지 못한다.', () => {
        stack.push('bbb');
        should(stack['data'].length).be.equal(1);
    });
});
