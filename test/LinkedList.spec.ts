import * as mocha from 'mocha';
import { LinkedList, Node } from '../src/LinkedList/LinkedList';
import * as should from 'should';
import * as chai from 'chai';

describe('Linked List Test', () => {
    const linkedList: LinkedList = new LinkedList();

    it('LinkedList는 function여야 한다.', () => {
        should(LinkedList).be.type('function');
    });

    it('LinkedList는 property로 length=0과 header=null을 가지고 있어야 한다.', () => {
        should(linkedList['length']).be.equal(0);
        should(linkedList['header']).be.equal(null);
    });

    it('LinkedList는 insert() 함수를 가지고 있어야 한다.', () => {
        should(linkedList.insert).be.type('function');
    });

    it('insert(data) :: header가 null이면 header는 new Node(data)와 같아야 한다.', () => {
        const nodeData: any = 'test';
        let node: Node = new Node(nodeData);
        linkedList.insert(nodeData);
        should(linkedList['header'].data).be.equals(node.data);
    });

    it('insert(data) :: header가 null이 아니라면 header.next는 new Node(data)와 같아야 한다.', () => {
        const nodeData: any = 'test2';
        let node: Node = new Node(nodeData);
        linkedList.insert(nodeData);
        should(linkedList['header'].next.data).be.equals(node.data);
    });

    it('insert(data) :: 함수가 실행되면 length 는 증가 되어야 한다.', () => {
        should(linkedList['length']).be.equal(2);
    });

    it('indexOf(data) :: 해당 데이터가 저장되어 있는 index를 return해야 한다.', () => {
        should(linkedList.indexOf('test')).be.equal(0);
    });

    it('indexOf(data) :: 해당 데이터가 없으면 -1을 return해야 한다.', () => {
        should(linkedList.indexOf('test3')).be.equal(-1);
    });

    it('count() :: return length', () => {
        should(linkedList.count()).be.equal(2);
    });

    it('delete(index) :: index 기준으로 삭제', () => {
        linkedList.delete(1);
        should(linkedList.indexOf('test2')).be.equal(-1);
    });

    it('delete(index) :: 가 실행되면 length는 -1 되야 한다.', () => {
        should(linkedList.count()).be.equal(1);
    });

    it('delete(index) :: index가 length보다 작으면 해당 인덱스 삭제후 다음 인덱스로 맵핑 해야 한다.', () => {
        linkedList.insert('aaa');
        linkedList.insert('bbb');
        linkedList.insert('ccc');
        linkedList.delete(1);
        should(linkedList.indexOf('bbb')).be.equal(1);
    });

    it('delete(index) :: index가 length 보가 크면 아무일도 일어나지 않는다.', () => {
        const length: number = linkedList.count();
        linkedList.delete(10);
        should(linkedList.count()).be.equal(length);
    });

    it('deleteLast() :: 마지막 요소가 삭제되어야 한다.', () => {
        linkedList.insert('ddd');
        linkedList.deleteLast();
        should(linkedList.indexOf('ddd')).be.equal(-1);
    });

    it('deleteList() :: 모든 요소를 삭제한다.', () => {
        linkedList.deleteList();
        should(linkedList['header']).be.equal(null);
        should(linkedList['length']).be.equal(0);
    });

    it('insertAt(data, index) :: 함수가 실행되면 해당 index에 해당 node가 들어가고, 원래 노드는 next로 맵핑 되야 한다.', () => {
        linkedList.insert('test1');
        linkedList.insert('test2');
        linkedList.insertAt('test3', 1);
        should(linkedList.indexOf('test3')).be.equal(1);
        should(linkedList.indexOf('test2')).be.equal(2);
    });

    it('insertAt(data, 0) :: 함수가 실행되면 index 0에 노드가 들어가고 원래 노드는 next로 맵핑 된다.', () => {
        linkedList.insertAt('test0', 0);
        should(linkedList.indexOf('test0')).be.equal(0);
        should(linkedList.indexOf('test1')).be.equal(1);
        should(linkedList.indexOf('test2')).be.equal(linkedList.count() - 1);

        linkedList.deleteList();
        linkedList.insertAt('test0', 0);
        should(linkedList.indexOf('test0')).be.equal(0);
    });

    it('insertAt(data, index) :: index가 length보다 크면 insert가 안되야 한다.', () => {
        linkedList.deleteList();
        linkedList.insertAt('test0', 2);
        should(linkedList.indexOf('test0')).be.equal(-1);
    });
});
