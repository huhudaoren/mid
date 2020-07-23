package com.hroa.mid.hr.entity;

import java.io.Serializable;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
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
 * @since 2019-12-23
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class JiaoyuH implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id",type = IdType.UUID)
    private String Id;

    private String userName;

    private String phone;
    @TableField(value = "city")
    private String city;
    @TableField(value = "province")
    private String province;

    private String createDate;
    @TableField(value = "options_radiosinline")
    private String optionsRadiosinline;

    private String remark;

    private String timeQ;

    private String isPc;
    @TableField(value = "qudao")
    private String qudao;


}
