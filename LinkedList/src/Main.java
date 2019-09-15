import java.util.Iterator;
import java.util.LinkedList;

public class Main {

    public static void main(String[] args) {

        Employee e1 = new Employee("Jane","Jones", 123);
        Employee e2 = new Employee("Rob","Cris", 321);
        Employee e3 = new Employee("Juju","Wong", 456);

        EmployeeLinkedList ell = new EmployeeLinkedList();
        System.out.println(ell.isEmpty());
        ell.addToFront(e1);
        ell.addToFront(e2);
        ell.addToFront(e3);

//        EmployeeNode h = ell.getHead();
//        while (h != null) {
//            System.out.println(h.getEmployee());
//            h = h.getNext();
//        }
        ell.printList();
        System.out.println();
        System.out.println(ell.getSize());

        ell.removeFromFront();
        System.out.println(ell.getSize());
        ell.printList();

        System.out.println();
        EmployeeDoublyLinkedList ell2 = new EmployeeDoublyLinkedList();
        System.out.println("doubly linkedlist");
        ell2.addToFront(e2);
//        ell2.addToFront(e2);
        ell2.addToEnd(e1);
        ell2.addToEnd(new Employee("mike", "jones",3132));
//        ell2.removeFromFront();
//        ell2.removeFromFront();
        ell2.removeFromBack();
        ell2.removeFromBack();
        ell2.removeFromBack();
        ell2.removeFromBack();
        ell2.printList();
        System.out.println();

        LinkedList<Employee> ll = new LinkedList<>();
        ll.addFirst(e1);
        ll.addFirst(e2);
        ll.addFirst(e3);

        ll.addLast(e1); // .addLast and .add are the equivalent
        for (Employee e: ll) {
            System.out.println(e);
        }
        System.out.println("hello");
        ll.removeFirst();
        ll.removeLast();
        Iterator iter = ll.iterator();
        while (iter.hasNext()) {
            System.out.println(iter.next());
        }

    }
}
