package com.hroa.mid;

class CaesarCipher {

    String path;//公有变量path为要操作的函数

    String estr="";//公有变量estr为操作过后的字符串

    private char c;//公有变量c是要操作的path提取后的字符

    //加密
    void jiami(String key, int n){

        for(int i=0;i<key.length();i++) {
            c=key.charAt(i);//取出字符串的每个字符

            //当字符在"A"到"Z"之间的时候
            if(c>='A'&&c<='Z') {
                //当提取的字符在Z之前的n位时
                if(c+n%26<='Z') {
                    estr+=(char)(c+n%26);
                } else {
                    estr+=(char)('A'+((n-('Z'-c)-1)%26));//孤立出来的n个字符
                }
            } else if(c>='a'&&c<='z') {
                //当提取的字符在z之前的n位时
                if(c+n%26<='z') {
                    estr+=(char)(c+n%26);
                } else {
                    estr+=(char)('a'+((n-('z'-c)-1)%26));//孤立出来的n个字符
                }
            } else if(c>='0'&&c<='9') {
                //当提取的字符在9之前的n位时
                if(c+n%10<='9') {
                    estr+=(char)(c+n%10);
                }else {
                    estr+=(char)('0'+((n-('9'-c)-1)%10));//孤立出来的n个字符
                }
            } else {
                estr+=c;
            }
        }
    }

    //解密
    public void jiemi(String key,int n) {
        for(int i=0;i<key.length();i++) {

            c=key.charAt(i);//取出字符串的每个字符

            //当字符在"A"到"Z"之间的时候
            if(c>='A'&&c<='Z'){
                //当提取的字符在A之前的n个时
                if(c-n%26>='A'){
                    estr+=(char)(c-n%26);
                } else {
                    estr+=(char)('Z'-((n-(c-'A')-1)%26));//操作孤立出来的n个字符
                }
            } else if(c>='a'&&c<='z') {
                //当提取的字符在a之前的n个时
                if(c-n%26>='a') {
                    estr+=(char)(c-n%26);
                } else {
                    estr+=(char)('z'-((n-(c-'a')-1)%26));//操作孤立出来的n个字符
                }
            } else if(c>='0'&&c<='9') {
                //当提取的字符在0之前的n个时
                if(c-n%10>='0') {
                    estr+=(char)(c-n%10);
                } else {
                    estr+=(char)('9'-((n-(c-'0')-1)%10));//操作孤立出来的n个字符
                }
            } else {
                estr+=c;
            }
        }
    }


    public static void main(String[] args) {
        int i = 0 ;
        while (true){
            if (i%1==0 && i%2==1 && i%3==0 && i%4==1 && i%5==1 && i%6==3 && i%7==0 && i%8==1 && i%9==0) {
                System.out.println("min"+i);
                return;
            }
            i++;

        }
    }

}
