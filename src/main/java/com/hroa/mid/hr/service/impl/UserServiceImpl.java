package com.hroa.mid.hr.service.impl;

import com.hroa.mid.hr.entity.User;
import com.hroa.mid.hr.mapper.UserMapper;
import com.hroa.mid.hr.service.IUserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author jobob
 * @since 2019-09-19
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService {

}
