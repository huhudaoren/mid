package com.hroa.mid.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;

/** 处理跨域问题
* @author MR.hu
* @date 2016/08/08
*
*/
@Configuration
public class GlobalCorsConfig {
//    @Bean
////    public WebMvcConfigurer corsConfigurer() {
////        return new WebMvcConfigurer() {
////            @Override
////            //重写父类提供的跨域请求处理的接口
////            public void addCorsMappings(CorsRegistry registry) {
////                //添加映射路径
////                registry.addMapping("/**")
////                        //放行哪些原始域
////                        .allowedOrigins("*")
////                        //是否发送Cookie信息
////                        .allowCredentials(true)
////                        //放行哪些原始域(请求方式)
////                        .allowedMethods("GET","POST", "PUT", "DELETE")
////                        //放行哪些原始域(头部信息)
////                        .allowedHeaders("*")
////                        //暴露哪些头部信息（因为跨域访问默认不能获取全部头部信息）
////                        .exposedHeaders("Header1", "Header2");
////            }
////        };
////    }


    @Bean
    public CorsFilter corsFilter() {
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        final CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedHeaders(Arrays.asList("*"));
        config.setAllowedOrigins(Arrays.asList("*"));
        config.setAllowedMethods(Arrays.asList("*"));
        config.setMaxAge(10000L);
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
