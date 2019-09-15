package com.company;

public class Main {

    public static void main(String[] args) {
        int[] intArray = new int[7];
        System.out.println(intArray.length);
        intArray[0] = 1;
        intArray[1] = 2;
        intArray[2] = 3;
        intArray[3] = 4;
        intArray[4] = 5;
        intArray[5] = 6;
        intArray[6] = 7;

        for (int i = 0; i < intArray.length; i++) {
//            System.out.println(intArray[i]);
            if (intArray[i] == 7) {
                System.out.println(i);
            }
        }
    }
}
