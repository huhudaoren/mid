package com.hroa.mid.hr.controller.huoguo;


import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.hroa.mid.hr.entity.Huoguo;
import com.hroa.mid.hr.mapper.HuoguoMapper;
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
@RequestMapping("/hr/huoguo")
public class huoguoController {

    @Autowired
    private HuoguoMapper HuoguoMapper;

    @RequestMapping(value = "submit",produces = "application/json; charset=utf-8")
    @ResponseBody
    public String submit(Huoguo record){
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(new Huoguo().setPhone(record.getPhone()));
        String msg;
        if(HuoguoMapper.selectList(wrapper).size() > 0){
            msg = "本手机号已经提交过,请不要重复提交";
        }else {
            msg = "已提交";
            //验证手机号是否领取
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
            record.setCreateDate(df.format(new Date()));
            HuoguoMapper.insert(record);
        }
        return msg;


    }
}
