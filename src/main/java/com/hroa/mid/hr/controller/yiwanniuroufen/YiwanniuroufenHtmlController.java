package com.hroa.mid.hr.controller.yiwanniuroufen;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "wt/niuroufen")
public class YiwanniuroufenHtmlController {


    @RequestMapping(value = "pc")
    public String pcIndex(){
        return "/yiwanniuroufen/yiwanniuroufenHome/pcIndex";
    }

    @RequestMapping(value = "pc1")
    public String pc1Index(){
        return "/jianshe/jiansheHome/pcIndex";
    }

    @RequestMapping(value = "phone")
    public String phoneIndex(){
        return "/yiwanniuroufen/yiwanniuroufenHome/phoneIndex";
    }

}
