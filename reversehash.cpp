#include<bits/stdc++.h>
using namespace std;

string reverse(string s) {
    int i = 0, j = s.size() - 1;
    while(i < j) {
        swap(s[i], s[j]);
        i++; j--;
    }
    return s;
}

string reverse_hash(long hash_value) {
    
    int index = 0;
    string ans = "";
    string alpha = "acdegilmnoprstuw";

    while(hash_value > 7) {
        
        if(hash_value % 37 == 0) {
            ans = ans + alpha[index];
            index = 0;
            hash_value = hash_value / 37;
        }
        else {
            hash_value--;
            index++;
        
        }    
    }
    
    return reverse(ans);
}

int main() {

   // long hash_value = 930846109532517;
    long hash_value;
    cout<<"enter the hash string \n";
    cin >> hash_value ;
    cout<<"the hash string u entered is \n"<<hash_value;
    cout<<"\n The reverse hash of "<<hash_value<<" is: "<<
        reverse_hash(hash_value)<<endl;

return 0;
}