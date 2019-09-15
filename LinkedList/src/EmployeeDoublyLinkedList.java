public class EmployeeDoublyLinkedList {

    private EmployeeNode2 head;
    private EmployeeNode2 tail;
    private int size = 0;

    public void addToFront(Employee employee) {
        EmployeeNode2 node = new EmployeeNode2(employee);
        node.setNext(head);
        if (head == null) {
            tail = node;
        } else {
            head.setPrev(node);
        }
        node.setPrev(null);
        head = node;
        size++;
    }

    public void addToEnd(Employee employee) {
        EmployeeNode2 node = new EmployeeNode2(employee);
        node.setPrev(tail);
        if (tail == null) {
            head = node;
        } else {
            tail.setNext(node);
        }
        node.setNext(null);
        tail = node;
        size ++;
    }

    public EmployeeNode2 removeFromFront() {
        if (isEmpty()) {
            return null;
        }

        EmployeeNode2 removeNode = head;
        head = removeNode.getNext();
        if (head == null) {
            tail = null;
        } else {
            head.setPrev(removeNode.getPrev());
        }
        size--;
        removeNode.setNext(null);
        removeNode.setPrev(null);
        return removeNode;
    }

    public EmployeeNode2 removeFromBack() {
        if (isEmpty()) {
            return null;
        }

        EmployeeNode2 removeNode = tail;
        tail = removeNode.getPrev();
        if (tail == null) {
            head = null;
        } else {
            tail.setNext(removeNode.getNext());
        }
        size--;
        removeNode.setNext(null);
        removeNode.setPrev(null);
        return removeNode;
    }

    public EmployeeNode2 getHead() {
        return this.head;
    }

    public int getSize() {
        return size;
    }

    public boolean isEmpty() {
        return head==null;
    }

    public void setHead(EmployeeNode2 head) {
        this.head = head;
    }

    public void printList() {
        EmployeeNode2 current = this.head;
        System.out.print("head -> ");
        while (current != null) {
            System.out.print(current.getEmployee());
            System.out.print(" <-> ");
            current = current.getNext();
        }
        System.out.print("tail");
//        System.out.println(this.head.getEmployee());
    }
}
