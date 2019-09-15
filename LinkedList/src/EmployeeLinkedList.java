public class EmployeeLinkedList {

    private EmployeeNode head;
    private int size = 0;

    public void addToFront(Employee employee) {
        EmployeeNode node = new EmployeeNode(employee);
        node.setNext(head);
        head = node;
        size++;
    }

    public EmployeeNode removeFromFront() {
        if (isEmpty()) {
            return null;
        }
        EmployeeNode removeNode = head;
        head = removeNode.getNext();
        size--;
        removeNode.setNext(null);
        return removeNode;
    }

    public EmployeeNode getHead() {
        return this.head;
    }

    public int getSize() {
        return size;
    }

    public boolean isEmpty() {
        return head==null;
    }

    public void setHead(EmployeeNode head) {
        this.head = head;
    }

    public void printList() {
        EmployeeNode current = this.head;
        System.out.print("head -> ");
        while (current != null) {
            System.out.print(current.getEmployee());
            System.out.print(" -> ");
            current = current.getNext();
        }
        System.out.print("null");
//        System.out.println(this.head.getEmployee());
    }
}
