#include <iostream>
using namespace std;

int main(){
    string name;
    int age;
    cout << "Enter The Name: ";
    // getline(cin, name); 
    cin >> name ;
    cout << "Enter The Age: ";
    cin >> age;
    cout << "Hi, " << name << endl;
    return 0;
}