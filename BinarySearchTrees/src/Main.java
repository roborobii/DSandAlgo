public class Main {

    public static void main(String[] args) {
        Tree intTree = new Tree();
        intTree.insert(25);
        intTree.insert(20);
        intTree.insert(15);
        intTree.insert(27);
        intTree.insert(30);
        intTree.insert(29);
        intTree.insert(26);
        intTree.insert(22);
        intTree.insert(32);

        intTree.traverse();

        System.out.println(intTree.get(29));
        System.out.println(intTree.getMax());
        System.out.println(intTree.getMin());

        Tree intTree2 = new Tree();
        System.out.println(intTree2.getMax());

        intTree.delete(25);
        intTree.traverse();
    }
}
