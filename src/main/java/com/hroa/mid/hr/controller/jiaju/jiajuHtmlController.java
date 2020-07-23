package com.hroa.mid.hr.controller.jiaju;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "wt/jiaju")
public class jiajuHtmlController {


    @RequestMapping(value = "pc")
    public String pcIndex(){
        return "/jiaju/jiajuHome/pcIndex";
    }

    @RequestMapping(value = "phone")
    public String phoneIndex(){
        return "/jiaju/jiajuHome/phoneIndex";
    }

}
