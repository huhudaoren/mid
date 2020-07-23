package com.hroa.mid.hr.controller;


import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.hroa.mid.hr.entity.User;
import com.hroa.mid.hr.mapper.RecordMapper;
import com.hroa.mid.hr.mapper.UserMapper;
import com.hroa.mid.utils.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "hongqigong/admin")
public class HongJiGongController {

    @Autowired
    private UserMapper userMapper;


    @RequestMapping(value = "cqLogin.html")
    public String cqLoginIndex(){

        return "hongqigong/admin/login";
    }

    @RequestMapping(value = "cqExit")
    public String cqExit(){

        return "/hongqigong/admin/login";
    }


    @RequestMapping(value = "bjLogin.html")
    public String bjLoginIndex(){

        return "hongqigong/bjadmin/login";
    }

    @RequestMapping(value = "bjExit")
    public String bjExit(){

        return "/hongqigong/bjadmin/login";
    }

    @RequestMapping(value = "login")
    public String login(User user, Model model){
        if(StringUtils.isNullBoolean(user.getPassword()) || StringUtils.isNullBoolean(user.getUserName())){
            model.addAttribute("msg","登陆失败,请输入账号密码");
            //验证账号
            return "hongqigong/admin/login";
        }
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(user);
        if(userMapper.selectList(wrapper).size() > 0){
            model.addAttribute("id","1");
            return "redirect:/hongqigong/admin/cqindex.html";
        }
        model.addAttribute("msg","登陆失败，账号或密码错误");
        //验证账号
        return "hongqigong/admin/login";
    }

    @RequestMapping(value = "bjLogin")
    public String bjLogin(User user, Model model){
        if(StringUtils.isNullBoolean(user.getPassword()) || StringUtils.isNullBoolean(user.getUserName())){
            model.addAttribute("msg","登陆失败,请输入账号密码");
            //验证账号
            return "hongqigong/bjadmin/login";
        }
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(user);
        if(userMapper.selectList(wrapper).size() > 0){
            model.addAttribute("id","1");
            return "redirect:/hongqigong/admin/bjindex.html";
        }
        model.addAttribute("msg","登陆失败，账号或密码错误");
        //验证账号
        return "hongqigong/bjadmin/login";
    }
}
