package com.hroa.mid.hr.controller.huoguo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "wt/huoguo")
public class HuoguoHtmlController {


    @RequestMapping(value = "pc")
    public String pcIndex(){
        return "/huoguo/huoguoHome/pcIndex";
    }

    @RequestMapping(value = "phone")
    public String phoneIndex(){
        return "/huoguo/huoguoHome/phoneIndex";
    }

}
