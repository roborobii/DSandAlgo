public class SimpleHashtable {
    private Employee[] hashtable;

    public SimpleHashtable() {
        hashtable = new Employee[10];
    }

    public void put(String key, Employee employee) {
        int hashedKey = hashKey(key);
        if (isOccupied(hashedKey)) {
            System.out.println("There's an employee there");
        } else {
            hashtable[hashedKey] = employee;
        }
    }

    private boolean isOccupied(int index) {
        return hashtable[index] != null;
    }

    public Employee get(String key) {
        int hashedKey = hashKey(key);
        if (hashedKey == -1) {
            return null;
        }
        return hashtable[hashedKey];
    }

    public Employee remove(String key) {
        int hashedKey = hashKey(key);
        if (!isOccupied(hashedKey)) {
            return null;
        }
        Employee employee = hashtable[hashedKey];
        hashtable[hashedKey] = null;
        return employee;
    }

    private int hashKey(String key) {
        return key.length() % hashtable.length;
    }

    public void printHashtable() {
        for (int i = 0; i < hashtable.length; i++) {
            System.out.println(hashtable[i]);
        }
    }
}
