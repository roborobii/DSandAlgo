import java.util.List;
import java.util.ArrayList;
import java.util.Vector;

public class Main {

    public static void main(String[] args) {
        List<Employee> employeeList = new Vector<>();
        employeeList.add(new Employee("Jane","Jones", 123));
        employeeList.add(new Employee("Rob","Cris", 321));
        employeeList.add(new Employee("Juju","Wong", 456));
//        for (Employee employee: employeeList) {
//            System.out.println(employee);
//        }
//        System.out.println(employeeList.get(1));
        employeeList.set(1,new Employee("On that","Beat",155)); // O(1)
        for (Employee employee: employeeList) {
            System.out.println(employee);
        }
        System.out.println(employeeList.size());
        employeeList.add(2, new Employee("Kind", "Sir", 423)); // O(n)
        for (Employee employee: employeeList) {
            System.out.println(employee);
        }

        System.out.println(employeeList.contains(new Employee("Jane","Jones",123)));
        System.out.println(employeeList.indexOf(new Employee("Kind", "Sir", 423)));

        employeeList.remove(0);
        employeeList.forEach(employee -> System.out.println(employee));

        // similar to vector but vectors handle multi threading. it's synchronized, thread safe
        // it has synchronization overhead.
        // arraylist is not synchronized.
        // if multiple threads are only reading to the arraylist then it's okay
        // if multiple threads are writing(changing, setting, adding, removing) to the arraylist then it is not!
        // thread safety: use vector
        // if not needed sync then: use arraylist
    }

}
