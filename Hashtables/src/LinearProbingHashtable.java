public class LinearProbingHashtable {
    private StoredEmployee[] hashtable;

    public LinearProbingHashtable() {
        hashtable = new StoredEmployee[10];
    }

    public void put(String key, Employee employee) {
        int hashedKey = hashKey(key);
        if (isOccupied(hashedKey)) {
            int stopIndex = hashedKey;
            if (hashedKey == hashtable.length - 1) {
                // if it's equal to the last index, loop back
                hashedKey = 0;
            } else {
                // if it's not equal to the last index
                // there is still room upwards the array
                hashedKey++;
            }
            while (isOccupied(hashedKey) && hashedKey != stopIndex) {
                hashedKey = (hashedKey + 1) % hashtable.length;
            }
        }
        if (isOccupied(hashedKey)) {
            System.out.println("hashtable full");
        } else {
            hashtable[hashedKey] = new StoredEmployee(key, employee);
        }
    }

    public boolean isOccupied(int index) {
        return hashtable[index] != null;
    }

    public Employee get(String key) {
        int hashedKey = findKey(key);
        if (hashedKey == -1) {
            return null;
        }
        return hashtable[hashedKey].employee;
    }

    public Employee remove(String key) {
        int hashedKey = findKey(key);
        if (hashedKey == -1) {
            return null;
        }
        Employee employee = hashtable[hashedKey].employee;
        hashtable[hashedKey] = null;

        // rehashing on remove: lower load factor and less collisions
        // but O(n)
        StoredEmployee[] oldHashtable = hashtable;
        hashtable = new StoredEmployee[oldHashtable.length];
        for (int i = 0; i < oldHashtable.length; i++) {
            if (oldHashtable[i] != null) {
                put(oldHashtable[i].key, oldHashtable[i].employee);
            }
        }
        return employee;
    }

    private int findKey(String key) {
        int hashedKey = hashKey(key);
        if (hashtable[hashedKey] != null && hashtable[hashedKey].key.equals(key)) {
            return hashedKey;
        }
        int stopIndex = hashedKey;
        if (hashedKey == hashtable.length - 1) {
            // if it's equal to the last index, loop back
            hashedKey = 0;
        } else {
            // if it's not equal to the last index
            // there is still room upwards the array
            hashedKey++;
        }
        while (hashedKey != stopIndex &&
                hashtable[hashedKey] != null &&
                !hashtable[hashedKey].key.equals(key)) {
            hashedKey = (hashedKey + 1) % hashtable.length;
        }

        if (hashtable[hashedKey] != null &&
                hashtable[hashedKey].key.equals(key)) {
            return hashedKey;
        } else {
            return -1;
        }
    }
    private int hashKey(String key) {
        return key.length() % hashtable.length;
    }

    public void printHashtable() {
        for (int i = 0; i < hashtable.length; i++) {
            if (hashtable[i] == null) System.out.println("empty");
            else System.out.println(hashtable[i].employee);
        }
    }
}
