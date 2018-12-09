public class Tree {

    private TreeNode root;

    public void insert(int value) {
        if (root == null) {
            root = new TreeNode(value);
        } else {
            root.insert(value);
        }
    }

    public TreeNode get(int value) {
        if (root != null) {
            return root.get(value);
        }
        return null;
    }

    public void delete(int value) {
        root = delete(root, value);
    }

    private TreeNode delete(TreeNode subtree, int value) {
        if (subtree == null) {
            return null;
        }
        if (value < subtree.getData()) {
            subtree.setLeft(delete(subtree.getLeft(), value));
        }
        else if (value > subtree.getData()) {
            subtree.setRight(delete(subtree.getRight(), value));
        }
        else {
            // 0 or 1 child
            if (subtree.getLeft() == null) {
                return subtree.getRight();
            } else if (subtree.getRight() == null) {
                return subtree.getLeft();
            }

            // has 2 children
            // replace the value in the subtree with the smallest value from the right subtree
            subtree.setData(subtree.getRight().getMin());

            // delete the node that has smallest value in the right subtree
            subtree.setRight(delete(subtree.getRight(),subtree.getData()));
        }
        return subtree;
    }

    public int getMin() {
        if (root != null) {
            return root.getMin();
        }
        return Integer.MIN_VALUE;
    }

    public int getMax() {
        if (root != null) {
            return root.getMax();
        }
        return Integer.MAX_VALUE;
    }

    public void traverse() {
        if (root != null) {
            System.out.print("Pre-Order: ");
            root.traversePreOrder();
            System.out.println();
            System.out.print("In-Order: ");
            root.traverseInOrder();
            System.out.println();
            System.out.print("Post-Order: ");
            root.traversePostOrder();
            System.out.println();
        }
    }
}
