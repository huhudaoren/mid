package com.hroa.mid.hr.controller.jianshe03;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "wt/jianshe03")
public class Jianshe03HtmlController {


    @RequestMapping(value = "pc")
    public String pcIndex(){
        return "/jianshe/jiansheHome03/pcIndex";
    }

    @RequestMapping(value = "phone")
    public String phoneIndex(){
        return "/jianshe/jiansheHome03/phoneIndex";
    }

}
