#include <iostream>
#include <cmath> 

using namespace std;

int main () {

    double num1, num2; 
    char op;
    
    cout << "Enter Number one: ";
    cin >> num1;
    

    cout << "Enter Number two: ";
    cin >> num2;
    
    
    cout << "Enter The Operator (+, -, *, /, %, ^, r): ";
    // ^ للأس (Power)
    
    cin >> op;
    
    cout << "------------------------\n"; 

    switch (op)
    {
        // العمليات اللي عايزين نعملها 
    case '+':
        cout << "The Result: " << num1 + num2 << endl;
        break;
        
    case '-':
        cout << "The Result: " << num1 - num2 << endl;
        break;

    case '*':
        cout << "The Result: " << num1 * num2 << endl;
        break;

    case '/':
        if (num1 == 0) {
            cout << "Error: Cannot divide by zero!\n";
        }
        else {
            cout << "The Result: " << num1 / num2 << endl;
        }
        break;

    case '%': 
        if (num2 == 0) {
            cout << "Error: Cannot divide by zero!\n";
        }
        else {
            cout << "The Result: " << (int)num1 % (int)num2 << endl;
            // (int)num1 % (int)num2  علشان مينفعش اجيب باقي الرقم من ارقام عشريه 
        }
        break;
    
    case '^':
        cout << "The Result (Power): " << pow(num1, num2) << endl;
        break;
        
    case 'r':
    // اول حاجه نشوف لو الرقم سالب نطلع غلط مفيش جذر لعدد سالب تمام
        if (num1 < 0) {
            cout << "Error: Cannot calculate the square root of a negative number.\n";
        }
        else {
            cout << "The Result (Square Root): " << sqrt(num1) << endl;
        }

        if (num2 < 0) {
            cout << "Error: Cannot calculate the square root of a negative number.\n";
        }
        else {
            cout << "The Result (Square Root): " << sqrt(num2) << endl;
        }
        break;

    default:
    //  علشان لو المستخدم دخل قيمه غلط او اي حاجه مكان العمليات 
        cout << "Error: Invalid operator entered.\n";
        break;
    }

    return 0;
}