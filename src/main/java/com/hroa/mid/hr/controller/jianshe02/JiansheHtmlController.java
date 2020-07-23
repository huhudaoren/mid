package com.hroa.mid.hr.controller.jianshe02;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "wt/jianshe02")
public class JiansheHtmlController {


    @RequestMapping(value = "pc")
    public String pcIndex(){
        return "/jianshe/jiansheHome/pcIndex";
    }

    @RequestMapping(value = "phone")
    public String phoneIndex(){
        return "/jianshe/jiansheHome/phoneIndex";
    }

}
