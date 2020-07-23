package com.hroa.mid.hr.controller.chanhouhuli;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "wt/lansi")
public class ChanhouhuliHtmlController {


    @RequestMapping(value = "pc")
    public String pcIndex(){
        return "/chanhou/chanhouHome/pcIndex";
    }

    @RequestMapping(value = "phone")
    public String phoneIndex(){
        return "/chanhou/chanhouHome/phoneIndex";
    }

}
