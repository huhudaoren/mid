package com.hroa.mid.hr.controller;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.hroa.mid.hr.entity.JiaoyuH;
import com.hroa.mid.hr.entity.JiaoyuH;
import com.hroa.mid.hr.mapper.JiaoyuHMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
@RequestMapping(value = "/children")
public class JyIndexController {

    @RequestMapping(value = "/sougou")
    public String index(Model model){
        model.addAttribute("msg","0");
        return "children/phonesougou";
    }
    @RequestMapping(value = "/sougou.html")
    public String yyindex(Model model){
        model.addAttribute("msg","0");
        return "children/phonesougou";
    }

    @RequestMapping(value = "/360")
    public String index360(Model model){
        model.addAttribute("msg","0");
        return  "children/phone360bak";
    }
    @RequestMapping(value = "/360.html")
    public String index360html(Model model){
        model.addAttribute("msg","0");
        return "children/phone360bak";
    }
    @RequestMapping(value = "/shenma")
    public String shenma(Model model){
        model.addAttribute("msg","0");
        return "children/phoneshenma";
    }
    @RequestMapping(value = "/shenma.html")
    public String shenmahtml(Model model){
        model.addAttribute("msg","0");
        return "children/phoneshenma";
    }


    @RequestMapping(value = "/sougoupc")
    public String indexPC(Model model){
        model.addAttribute("msg","0");
        return "children/indexsougou";
    }
    @RequestMapping(value = "/sougoupc.html")
    public String yyindexPC(Model model){
        model.addAttribute("msg","0");
        return "children/indexsougou";
    }

    @RequestMapping(value = "/360pc")
    public String index360PC(Model model){
        model.addAttribute("msg","0");
        return "children/index360bak";
    }
    @RequestMapping(value = "/360pc.html")
    public String index360PChtml(Model model){
        model.addAttribute("msg","0");
        return "children/index360bak";
    }
    //    sougouPC    360PC
    @RequestMapping(value = "/shenmapc")
    public String shenmaPC(Model model){
        model.addAttribute("msg","0");
        return "children/indexshenma";
    }
    @RequestMapping(value = "/shenmapc.html")
    public String shenmaPCHtml(Model model){
        model.addAttribute("msg","0");
        return "children/indexshenma";
    }


    @RequestMapping(value = "/baidu")
    public String baidu(Model model){
        model.addAttribute("msg","0");
        return "children/phonebaidu";
    }
    @RequestMapping(value = "/baidu.html")
    public String baidu1(Model model){
        model.addAttribute("msg","0");
        return "children/phonebaidu";
    }


    @RequestMapping(value = "/baidupc")
    public String baidupc(Model model){
        model.addAttribute("msg","0");
        return "children/indexbaidu";
    }
    @RequestMapping(value = "/baidupc.html")
    public String baidupcHtml(Model model){
        model.addAttribute("msg","0");
        return "children/indexbaidu";
    }

    @Autowired
    JiaoyuHMapper jiaoyuHMapper;

    @ResponseBody
    @RequestMapping(value = "submit360")
    public String submit360(JiaoyuH jiaoyuH, Model model){
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(new JiaoyuH().setPhone(jiaoyuH.getPhone()));
        if(jiaoyuHMapper.selectList(wrapper).size() > 0){
            model.addAttribute("msg","本手机号已经提交过,请不要重复提交");
        }else {
            model.addAttribute("msg","已提交");
            //验证手机号是否领取
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
            jiaoyuH.setCreateDate(df.format(new Date()));
            jiaoyuHMapper.insert(jiaoyuH);
        }
        return "已提交";
    }

    @RequestMapping(value = "submit360pc")
    public String submit360pc(JiaoyuH jiaoyuH, Model model){
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(new JiaoyuH().setPhone(jiaoyuH.getPhone()));
        if(jiaoyuHMapper.selectList(wrapper).size() > 0){
            model.addAttribute("msg","本手机号已经提交过,请不要重复提交");
        }else {
            model.addAttribute("msg","已提交");
            //验证手机号是否领取
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
            jiaoyuH.setCreateDate(df.format(new Date()));
            jiaoyuHMapper.insert(jiaoyuH);
        }
        return "children/index360";
    }

    @RequestMapping(value = "submitShenma")
    public String submitShenmapc(JiaoyuH jiaoyuH, Model model){
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(new JiaoyuH().setPhone(jiaoyuH.getPhone()));
        if(jiaoyuHMapper.selectList(wrapper).size() > 0){
            model.addAttribute("msg","本手机号已经提交过,请不要重复提交");
        }else {
            model.addAttribute("msg","已提交");
            //验证手机号是否领取
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
            jiaoyuH.setCreateDate(df.format(new Date()));
            jiaoyuHMapper.insert(jiaoyuH);
        }
        return "children/phoneshenma";
    }

    @RequestMapping(value = "submitShenmaPc")
    public String submitShenmaPc(JiaoyuH jiaoyuH, Model model){
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(new JiaoyuH().setPhone(jiaoyuH.getPhone()));
        if(jiaoyuHMapper.selectList(wrapper).size() > 0){
            model.addAttribute("msg","本手机号已经提交过,请不要重复提交");
        }else {
            model.addAttribute("msg","已提交");
            //验证手机号是否领取
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
            jiaoyuH.setCreateDate(df.format(new Date()));
            jiaoyuHMapper.insert(jiaoyuH);
        }
        return "children/indexshenma";
    }

    @RequestMapping(value = "submitSougouPc")
    public String submitSougouPc(JiaoyuH jiaoyuH, Model model){
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(new JiaoyuH().setPhone(jiaoyuH.getPhone()));
        if(jiaoyuHMapper.selectList(wrapper).size() > 0){
            model.addAttribute("msg","本手机号已经提交过,请不要重复提交");
        }else {
            model.addAttribute("msg","已提交");
            //验证手机号是否领取
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
            jiaoyuH.setCreateDate(df.format(new Date()));
            jiaoyuHMapper.insert(jiaoyuH);
        }
        return "children/indexsougou";
    }

    @RequestMapping(value = "submitSougou")
    public String submitSougou(JiaoyuH jiaoyuH, Model model){
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(new JiaoyuH().setPhone(jiaoyuH.getPhone()));
        if(jiaoyuHMapper.selectList(wrapper).size() > 0){
            model.addAttribute("msg","本手机号已经提交过,请不要重复提交");
        }else {
            model.addAttribute("msg","已提交");
            //验证手机号是否领取
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
            jiaoyuH.setCreateDate(df.format(new Date()));
            jiaoyuHMapper.insert(jiaoyuH);
        }
        return "children/phoneshenma";
    }
}
