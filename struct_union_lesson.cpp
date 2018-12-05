// 1. Consider the following C++ declarations and assume int is 4 bytes, double is 8 bytes, and char is 1 byte:
//     struct Bar // 16
//     {
//             char c,d,e,g; // 4
//             double f; // 8
//             int i; // 4
//     };
//     union Foo // 16
//     {
//             char c; // 1
//             double f; // 8
//             Bar b; // 16
//     };
//     Foo a[10]; // 16*10 = 160 ; at address 0
//     Bar b; // 16 ; at address 160
//     Foo f; // 16 ; at address 176
//     A)  (10 points) Give the size (in bytes and in decimal) of each of the following variables:
//             . b // 16
//             . f // 16
//             . a // 160
//     B) (10 points) Give the address (in decimal) of each of the following assuming the address of a is 1000:              // a[0] at address 1000
//             . a[5].b.g // address is at 1000 + 16*5 for a[5]; for g address is at 1000 + 16*5 + 3 = 1083
//             . a[4].b.i // address is at 1000 + 16*4 for a[4]; for i address is at 1000 + 16*4 + 12 = 1076
//             . a[6].f // address is at 1000 + 16*6 for a[6]; for f address is at 1000 + 16*6 = 1096

#include <iostream>
using namespace std;

struct Bar // 16
{
        char c,d,e,g; // 4
        double f; // 8
        int i; // 4
};
union Foo // 16
{
        char c; // 1
        double f; // 8
        Bar b; // 16
};

int main() {
        Foo a[10];
        Bar b;
        Foo f;
        cout << sizeof(a) << endl;
        cout << sizeof(b) << endl;
        cout << sizeof(f) << endl;
}