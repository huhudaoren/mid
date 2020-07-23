package com.hroa.mid.hr.controller.yiwanniuroufen;


import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.hroa.mid.hr.entity.Jiaju;
import com.hroa.mid.hr.entity.Yiwanniuroufen;
import com.hroa.mid.hr.mapper.JiajuMapper;
import com.hroa.mid.hr.mapper.YiwanniuroufenMapper;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/hr/niuroufen")
public class YiwanniuroufenController {

    @Autowired
    private YiwanniuroufenMapper yiwanniuroufenMapper;

    @RequestMapping(value = "submit",produces = "application/json; charset=utf-8")
    @ResponseBody
    public String submit(Yiwanniuroufen record){
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(new Yiwanniuroufen().setPhone(record.getPhone()));
        String msg;
//        if(yiwanniuroufenMapper.selectList(wrapper).size() > 0){
//            msg = "本手机号已经提交过,请不要重复提交";
//        }else {
            msg = "已提交";
            //验证手机号是否领取
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
            record.setCreateDate(df.format(new Date()));
            yiwanniuroufenMapper.insert(record);
//        }
        return msg;


    }
}
