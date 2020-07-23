package com.hroa.mid.hr.controller.ccx;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "wt/ccx")
public class CcxHtmlController {


    @RequestMapping(value = "pc")
    public String pcIndex(){
        return "/ccx/ccxHome/pcIndex";
    }

    @RequestMapping(value = "phone")
    public String phoneIndex(){
        return "/ccx/ccxHome/phoneIndex";
    }


    @RequestMapping(value = "phonebak")
    public String phonebak(){
        return "/ccx/ccxHome/phoneIndexBak";
    }
}
