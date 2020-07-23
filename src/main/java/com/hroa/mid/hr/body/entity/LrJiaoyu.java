package com.hroa.mid.hr.body.entity;

import java.io.Serializable;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author jobob
 * @since 2020-01-02
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class LrJiaoyu implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id",type = IdType.UUID)
    private String Id;

    private String userName;  //姓名

    private String phone;    //手机号

    private String remark;   //地址，只有PC端传入， 移动端参数为null

    private String isPc;  //是否pc 1:pc端  0:移动端

    private String optionsRadiosinline;  //投资金额

    private String city;   //市,只有移动端传入， PC端参数为null

    private String province;  //省,只有移动端传入， PC端参数为null


    private String createDate;
    private String timeQ;
    private String qudao;


}
