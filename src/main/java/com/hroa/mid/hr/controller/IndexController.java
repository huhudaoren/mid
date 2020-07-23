package com.hroa.mid.hr.controller;


import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.hroa.mid.hr.entity.BjHqg;
import com.hroa.mid.hr.entity.CqHqg;
import com.hroa.mid.hr.entity.NiuH;
import com.hroa.mid.hr.entity.Record;
import com.hroa.mid.hr.mapper.BjHqgMapper;
import com.hroa.mid.hr.mapper.CqHqgMapper;
import com.hroa.mid.hr.mapper.NiuHMapper;
import com.hroa.mid.hr.mapper.RecordMapper;
import com.hroa.mid.hr.service.ICqHqgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class IndexController {

    @Autowired
    private RecordMapper recordMapper;
    @Autowired
    private CqHqgMapper cqHqgMapper;
    @Autowired
    private BjHqgMapper bjHqgMapper;
    @Autowired
    private ICqHqgService iCqHqgService;

    @RequestMapping(value = "/yuebeibi")
    public String index(Model model){
        model.addAttribute("msg","0");
        return "index";
    }
    @RequestMapping(value = "/yuebeibi/index.html")
    public String yyindex(Model model){
        model.addAttribute("msg","0");
        return "index";
    }
    @RequestMapping(value = "/yuebeibi/index")
    public String yyyindex(Model model){
        model.addAttribute("msg","0");
        return "index";
    }



    @RequestMapping(value = "/hongqigong/bjwab.html")
    public String hqgindexht(Model model){
        model.addAttribute("msg","0");
        return "hongqigong/qgjhwap";
    }
    @RequestMapping(value = "/hongqigong/bjhwab")
    public String hqgindex(Model model){
        model.addAttribute("msg","0");
        return "hongqigong/qgjhwap";
    }


    @RequestMapping(value = "/hongqigong/bjipone.html")
    public String hqgjhipone(Model model){
        model.addAttribute("msg","0");
        return "hongqigong/qgjhipone";
    }
    @RequestMapping(value = "/hongqigong/bjipone")
    public String qgjhipone(Model model){
        model.addAttribute("msg","0");
        return "hongqigong/qgjhipone";
    }



    @RequestMapping(value = "/hongqigong/cqwab.html")
    public String cqhqgindexht(Model model){
        model.addAttribute("msg","0");
        return "hongqigong/cqweb";
    }
    @RequestMapping(value = "/hongqigong/cqwab")
    public String cqhqgindex(Model model){
        model.addAttribute("msg","0");
        return "hongqigong/cqweb";
    }


    @RequestMapping(value = "/hongqigong/cqipone.html")
    public String cqhqgjhipone(Model model){
        model.addAttribute("msg","0");
        return "hongqigong/cqipone";
    }
    @RequestMapping(value = "/hongqigong/cqipone")
    public String cqqgjhipone(Model model){
        model.addAttribute("msg","0");
        return "hongqigong/cqipone";
    }


    @RequestMapping(value = "/niuh/wab.html")
    public String niuhindexht(Model model){
        model.addAttribute("msg","0");
        return "niuh/niuh";
    }
    @RequestMapping(value = "/niuh/wab")
    public String niuhindex(Model model){
        model.addAttribute("msg","0");
        return "niuh/niuh";
    }


    @RequestMapping(value = "/niuh/ipone.html")
    public String niuhiponeHt(Model model){
        model.addAttribute("msg","0");
        return "niuh/niuhwab";
    }
    @RequestMapping(value = "/niuh/ipone")
    public String niuhipone(Model model){
        model.addAttribute("msg","0");
        return "niuh/niuhwab";
    }

    @RequestMapping(value = "/")
    public String shenmaPC(Model model){
        model.addAttribute("msg","0");
        return "children/phoneshenma";
    }



    @RequestMapping(value = "submit")
    public String submit(Record record, Model model){
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(new Record().setPhone(record.getPhone()));
        if(recordMapper.selectList(wrapper).size() > 0){
            model.addAttribute("msg","本手机号已经提交过,请不要重复提交");
        }else {
            model.addAttribute("msg","已提交");
            //验证手机号是否领取
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
            record.setCreateDate(df.format(new Date()));
            recordMapper.insert(record);
        }
        return "index";
    }



    @RequestMapping(value = "cqHqgSubmit")
    public String cqHqgSubmit(CqHqg cqHqg, Model model){
        System.out.println(Runtime.getRuntime().totalMemory());
        Wrapper<CqHqg> wrapper = new QueryWrapper<CqHqg>();
        ((QueryWrapper<CqHqg>) wrapper).setEntity(new CqHqg().setPhone(cqHqg.getPhone()));

        System.out.println( iCqHqgService.list(wrapper).size());
        if(cqHqgMapper.selectList(wrapper).size() > 0){
            model.addAttribute("msg","本手机号已经提交过,请不要重复提交");
        }else {
            model.addAttribute("msg","已提交");
            //验证手机号是否领取
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
            cqHqg.setCreateDate(df.format(new Date()));
            cqHqg.setTimeQ(getS(cqHqg.getTimeQ()));
            cqHqgMapper.insert(cqHqg);
        }
       if("1".equals(cqHqg.getIsPc())){
            return "hongqigong/cqweb";
        }else {
            return "hongqigong/cqipone";
        }

    }

    @RequestMapping(value = "bjHqgSubmit")
    public String bjHqgSubmit(BjHqg bjHqg, Model model){
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(new BjHqg().setPhone(bjHqg.getPhone()));
        if(bjHqgMapper.selectList(wrapper).size() > 0){
            model.addAttribute("msg","本手机号已经提交过,请不要重复提交");
        }else {
            model.addAttribute("msg","已提交");
            //验证手机号是否领取
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
            bjHqg.setCreateDate(df.format(new Date()));
            bjHqg.setTimeQ(getS(bjHqg.getTimeQ()));
            bjHqgMapper.insert(bjHqg);
        }
        if("1".equals(bjHqg.getIsPc())){
            return "hongqigong/qgjhwap";
        }else {
            return "hongqigong/qgjhipone";
        }
    }


    @Autowired
    private  NiuHMapper niuHMapper;
    @RequestMapping(value = "niuHSubmit")
    public String niuHSubmit(NiuH niuH, Model model){
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(new BjHqg().setPhone(niuH.getPhone()));
        if(niuHMapper.selectList(wrapper).size() > 0){
            model.addAttribute("msg","本手机号已经提交过,请不要重复提交");
        }else {
            model.addAttribute("msg","已提交");
            //验证手机号是否领取
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
            niuH.setCreateDate(df.format(new Date()));
            niuH.setTimeQ(getS(niuH.getTimeQ()));
            niuHMapper.insert(niuH);
        }
        if("1".equals(niuH.getIsPc())){
            return "niuh/niuh";
        }else {
            return "niuh/niuhwab";
        }
    }
    private String getS(String str){
        if("0".equals(str)){
            return "随时";
        }else if("1".equals(str)){
            return "上班";
        }else if("2".equals(str)){
            return "下班";
        }
        return "随时";
    }

}
