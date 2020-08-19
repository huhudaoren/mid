package com.hroa.mid;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Scanner;

//@RunWith(SpringRunner.class)
//@SpringBootTest
public class MidApplicationTests {


	public static void main(String[] args) {

		CaesarCipher c=new CaesarCipher();//建立新的对象
		System.out.println("*凯撒密码*");
		System.out.println("1.加密");//要执行的操作
		System.out.println("2.解密");
		System.out.println("你要进行的操作：");
		int num;
		Scanner scanner=new Scanner(System.in);//输入要执行的操作num
		num=scanner.nextInt();
		System.out.println("情输入你要进行操作的字符串");//输入操作的字符串
		c.path=scanner.next();
		if(num==1) {
			c.jiami(c.path, 3);//调用加密函数
			System.out.println("加密过后的字符串为："+c.estr);
		} else {
			c.jiemi(c.path, 3);//调用解密函数
			System.out.println("解密过后的内容为："+c.estr);
		}

	}

}
