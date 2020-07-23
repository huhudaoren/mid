package com.hroa.mid.hr.entity;

import java.time.LocalDateTime;
import java.io.Serializable;
import java.util.Date;

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
 * @since 2020-05-02
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Ccx implements Serializable {

    private static final long serialVersionUID = 1L;


    @TableId(value = "id",type = IdType.UUID)
    private String Id;

    private String name;

    private String phone;

    private String createDate;

    private String isPc;

}
