import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class Main {

    public static void main(String[] args) {

        Employee janeJones = new Employee("Jane", "Jones", 123);
        Employee johnDoe = new Employee("John", "Doe", 4567);
        Employee marySmith = new Employee("Mary", "Smith", 22);
        Employee mikeWilson = new Employee("Mike", "Wilson", 3245);
        Employee billEnd = new Employee("Bill", "End", 78);

//        SimpleHashtable ht = new SimpleHashtable();
//        LinearProbingHashtable ht = new LinearProbingHashtable();
        ChainingHashtable ht = new ChainingHashtable();

        ht.put("Jones", janeJones);
        ht.put("Doe", johnDoe);
        ht.put("Smith", marySmith);
        System.out.println(ht.get("Smith"));
        System.out.println("----");
//        ht.printHashtable();

        Map<String, Employee> hashMap = new HashMap<String, Employee>();
        hashMap.put("Jones", janeJones);
        hashMap.put("Doe", johnDoe);
        hashMap.put("Smith", marySmith);

        Iterator<Employee> iterator = hashMap.values().iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        hashMap.forEach((k,v) -> System.out.println(v));

    }
}
