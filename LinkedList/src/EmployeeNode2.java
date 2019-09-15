public class EmployeeNode2 {
    private Employee employee;
    private EmployeeNode2 next;
    private EmployeeNode2 prev;

    public EmployeeNode2(Employee employee) {
        this.employee = employee;
        this.next = null;
        this.prev = null;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public EmployeeNode2 getNext() {
        return next;
    }

    public void setNext(EmployeeNode2 next) {
        this.next = next;
    }

    public EmployeeNode2 getPrev() {
        return prev;
    }

    public void setPrev(EmployeeNode2 prev) {
        this.prev = prev;
    }
}
