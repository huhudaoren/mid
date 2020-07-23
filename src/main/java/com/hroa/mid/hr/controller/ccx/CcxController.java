package com.hroa.mid.hr.controller.ccx;


import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.hroa.mid.hr.entity.Ccx;
import com.hroa.mid.hr.entity.Record;
import com.hroa.mid.hr.mapper.CcxMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author jobob
 * @since 2020-05-02
 */
@RestController
@RequestMapping("/hr/ccx")
public class CcxController {

    @Autowired
    private CcxMapper ccxMapper;

    @RequestMapping(value = "submit",produces = "application/json; charset=utf-8")
    @ResponseBody
    public String submit(Ccx record){
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(new Ccx().setPhone(record.getPhone()));
        String msg;
        if(ccxMapper.selectList(wrapper).size() > 0){
            msg = "本手机号已经提交过,请不要重复提交";
        }else {
            msg = "已提交";
            //验证手机号是否领取
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
            record.setCreateDate(df.format(new Date()));
            ccxMapper.insert(record);
        }
        if("1".equals(record.getIsPc())){
            return msg;
        }else {
            return msg;
        }

    }
}
