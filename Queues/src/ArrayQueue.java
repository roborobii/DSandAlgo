import java.util.ArrayList;

public class ArrayQueue {

    private Employee[] queue;
    private int front;
    private int back;

    public ArrayQueue(int capacity) {
        queue = new Employee[capacity];
    }

    public void add(Employee employee) {
        if (size() == queue.length - 1) {
            int numItems = size();
            Employee[] newArray = new Employee[queue.length * 2];
            for (int i = front, j = 0; i < queue.length; i++, j++) {
                newArray[j] = queue[i];
            }
            for (int i = 0, j = front; j < queue.length - front; i++, j++) {
                newArray[j] = queue[i];
            }
            queue = newArray;

            front = 0;
            back = numItems;
        }
        queue[back] = employee;
        if (back < queue.length - 1) {
            back++;
        }
        else {
            back = 0;
        }
    }

    public Employee remove() {
        if (size() == 0) {
            return null;
        }
        Employee removed = queue[front];
        queue[front] = null;
        front++;
        if (size() == 0) {
            front = 0;
            back = 0;
        } else if (front == queue.length) {
            front = 0;
        }
//        for (int i = 1; i < queue.length; i++) {
//            queue[i-1] = queue[i];
//        }
        return removed;
    }

    public Employee peek() {
        if (size() == 0) {
            return null;
        }
        return queue[front];
    }

    public int size() {
        if (front <= back) {
            return back - front;
        } else {
            return back - front + queue.length;
        }
    }

    public void printQueue() {
        if (front <= back) {
            for (int i = front; i < back; i++) {
                System.out.println(queue[i]);
            }
        } else {
            for (int i = front; i < queue.length; i++) {
                System.out.println(queue[i]);
            }
            for (int i = 0; i < back; i++) {
                System.out.println(queue[i]);
            }
        }

    }
}
