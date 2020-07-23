package com.hroa.mid.hr.body.controller;


import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.hroa.mid.hr.body.entity.LrJiaoyu;
import com.hroa.mid.hr.body.entity.Request;
import com.hroa.mid.hr.mapper.LrJiaoyuMapper;
import com.hroa.mid.utils.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author jobob
 * @since 2020-01-02
 */
@RestController
@RequestMapping("/body/lr")
public class LrJiaoyuController {

    @Autowired
    private LrJiaoyuMapper lrJiaoyuMapper;

    @RequestMapping(value = "submit")
    public Object submitShenmapc(LrJiaoyu lrJiaoyu, Model model){
        Request request = new Request();
        Wrapper wrapper = new QueryWrapper();
        if(lrJiaoyu == null ||
                StringUtils.isNullBoolean(lrJiaoyu.getPhone())||
                StringUtils.isNullBoolean(lrJiaoyu.getUserName())){

        }
        ((QueryWrapper) wrapper).setEntity(new LrJiaoyu().setPhone(lrJiaoyu.getPhone()));
        //验证手机号是否领取
        if(lrJiaoyuMapper.selectList(wrapper).size() > 0){
            request.setCode("0");
            request.setMsg("该手机号已经提交");
            return request;
        }else {
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
            lrJiaoyu.setCreateDate(df.format(new Date()));
            lrJiaoyuMapper.insert(lrJiaoyu);
        }
        request.setCode("1");
        request.setMsg("提交成功");
        return request;
    }
}
