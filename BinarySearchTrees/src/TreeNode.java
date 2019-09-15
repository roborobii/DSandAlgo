public class TreeNode {

    private int data;
    private TreeNode left;
    private TreeNode right;

    public TreeNode(int data) {
        this.data = data;
    }

    public void insert(int value) {
        if (value == data) {
            return;
        }

        else if (value > data) {
            // value is greater than current node
            //  so insert it to the right
            if (right == null) {
                right = new TreeNode(value);
            } else {
                right.insert(value);
            }
        }
        else { // if (value < data)
            // value is less than than current node
            //  so insert it to the left
            if (left == null) {
                left = new TreeNode(value);
            } else {
                left.insert(value);
            }
        }
    }

    public int getMin() {
        if (left != null) {
            return left.getMin();
        }
        return this.data;
    }

    public int getMax() {
        if (right != null) {
            return right.getMax();
        }
        return this.data;
    }

    public TreeNode get(int value) {
        if (value == data) {
            return this;
        }
        else if (value > data) {
            if (right != null) {
                return right.get(value);
            }
        }
        else { // (value < data) {
            if (left != null) {
                return left.get(value);
            }
        }
        return null;
    }

    public void traverseInOrder() {
        if (left != null) {
            left.traverseInOrder();
        }
        System.out.print(data + " ");
        if (right != null) {
            right.traverseInOrder();
        }
    }

    public void traversePreOrder(){
        System.out.print(data + " ");
        if (left != null) {
            left.traversePreOrder();
        }
        if (right != null) {
            right.traversePreOrder();
        }
    }

    public void traversePostOrder(){
        if (left != null) {
            left.traversePostOrder();
        }
        if (right != null) {
            right.traversePostOrder();
        }
        System.out.print(data + " ");
    }

    public int getData() {
        return data;
    }

    public void setData(int data) {
        this.data = data;
    }

    public TreeNode getLeft() {
        return left;
    }

    public void setLeft(TreeNode left) {
        this.left = left;
    }

    public TreeNode getRight() {
        return right;
    }

    public void setRight(TreeNode right) {
        this.right = right;
    }
}
