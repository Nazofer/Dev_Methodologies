const LinkedList = require('../src/linkedList');

describe('Linked list based on array', () => {
  let linkedList;

  beforeAll(() => {
    linkedList = new LinkedList();
  });

  it('should append one node', () => {
    linkedList.append('First node');
    expect(linkedList.getByIndex(0)).toBe('First node');
  });

  it('should return length of the list', () => {
    linkedList.append('Second node');
    expect(linkedList.getLength()).toBe(2);
  });

  it('should clear the list', () => {
    linkedList.clear();
    expect(linkedList.getLength()).toBe(0);
  });

  it('should get first node in list by value', () => {
    linkedList.append('First node');
    linkedList.append('Second node');
    linkedList.append('Second node');
    linkedList.append('Second node');

    expect(linkedList.findFirstByValue('Second node')).toBe(1);
    expect(linkedList.findFirstByValue('Third node')).toBe(-1);
  });

  it('should get last node in list by value', () => {
    expect(linkedList.findLastByValue('Second node')).toBe(3);
    expect(linkedList.findLastByValue('Third node')).toBe(-1);
  });

  it('should get node by index', () => {
    expect(linkedList.getByIndex(0)).toBe('First node');
    expect(linkedList.getByIndex(1)).toBe('Second node');
  });

  it('should insert node in the list', () => {
    linkedList.insert('Node between 1st and 2nd', 1);
    expect(linkedList.getByIndex(1)).toBe('Node between 1st and 2nd');
  });

  it('should delete node by index', () => {
    expect(linkedList.getLength()).toBe(5);

    const deleted = linkedList.deleteByIndex(1);

    expect(deleted).toBe('Node between 1st and 2nd');
    expect(linkedList.findFirstByValue('Node between 1st and 2nd')).toBe(-1);
    expect(linkedList.getLength()).toBe(4);
  });

  it('should delete all nodes with some value', () => {
    linkedList.append('First node');
    linkedList.append('First node');

    expect(linkedList.getLength()).toBe(6);

    linkedList.deleteAll('First node');

    expect(linkedList.findFirstByValue('First node')).toBe(-1);
  });

  it('should clone the list', () => {
    const newList = linkedList.clone();
    expect(newList.getByIndex(0)).toBe(linkedList.getByIndex(0));
  });

  it('should reverse the list', () => {
    linkedList.append('First node');

    expect(linkedList.getByIndex(0)).toBe('Second node');
    expect(linkedList.getByIndex(3)).toBe('First node');

    linkedList.reverseList();

    expect(linkedList.getByIndex(0)).toBe('First node');
    expect(linkedList.getByIndex(3)).toBe('Second node');
  });

  it('should extend the list', () => {
    const secondList = linkedList.clone();
    expect(linkedList.getLength()).toBe(4);
    expect(secondList.getLength()).toBe(4);

    linkedList.extend(secondList);
    expect(linkedList.getLength()).toBe(8);

    secondList.append('Third node in 2nd list. Should not be in 1st list');
    expect(secondList.getLength()).toBe(5);
    expect(linkedList.getLength()).not.toBe(9);
  });
});