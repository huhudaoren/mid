package com.hroa.mid.utils.lang;

public class StringUtils {

    public static String isNUll(String s){
        if(s == null || s.isEmpty()){
            return "";
        }
        return s;
    }

    public static Boolean isNullBoolean(String s){
        if("".equals(isNUll(s)) || "undefined".equals(s)){
            return true;
        }
        return false;
    }
}
