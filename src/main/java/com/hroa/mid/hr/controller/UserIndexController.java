package com.hroa.mid.hr.controller;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.hroa.mid.hr.entity.Jianshe;
import com.hroa.mid.hr.entity.Record;
import com.hroa.mid.hr.entity.User;
import com.hroa.mid.hr.mapper.RecordMapper;
import com.hroa.mid.hr.mapper.UserMapper;
import com.hroa.mid.utils.lang.ExcelExportUtil;
import com.hroa.mid.utils.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "admin")
public class UserIndexController {

    private Map<String,String> map = new HashMap();

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private RecordMapper recordMapper;





    @RequestMapping(value = "toLogin",produces = "application/json; charset=utf-8")
    @ResponseBody
    public String toLogin(@RequestParam(value = "userName") String userName, @RequestParam(value = "password") String password){
        if(StringUtils.isNullBoolean(password) || StringUtils.isNullBoolean(userName)){

            //验证账号
            return "0";
        }

        Wrapper wrapper = new QueryWrapper();
        User user = new User().setUserName(userName).setPassword(password);
        ((QueryWrapper) wrapper).setEntity(user);
        if(userMapper.selectList(wrapper).size() > 0){
            return "1";
        }
        //验证账号
        return "0";
    }

    @RequestMapping(value = "login.html")
    public String loginIndex(){

        return "admin/login";
    }

    @RequestMapping(value = "exit")
    public String exit(){

        return "admin/login";
    }

    @RequestMapping(value = "index.html")
    public String index(Model model){
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).orderByDesc("create_date");
        //获取数据
        model.addAttribute("recordList",recordMapper.selectList(wrapper));
        return "admin/index";
    }


    @RequestMapping(value = "login")
    public String login(User user, Model model){
        if(StringUtils.isNullBoolean(user.getPassword()) || StringUtils.isNullBoolean(user.getUserName())){
            model.addAttribute("msg","登陆失败,请输入账号密码");
            //验证账号
            return "admin/login";
        }
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(user);
        if(userMapper.selectList(wrapper).size() > 0){

            model.addAttribute("id","1");
            return "redirect:/admin/index360.html";
        }
        model.addAttribute("msg","登陆失败，账号或密码错误");
        //验证账号
        return "admin/login";
    }






    @RequestMapping(value = "/poi", method = RequestMethod.GET)
    public void downloadsExcelDown(HttpServletResponse response) throws IOException {
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).orderByDesc("create_date");
        List<Record> bgmExcelDownloads = recordMapper.selectList(wrapper);
        System.out.printf("------------" + bgmExcelDownloads.toString());
        HSSFWorkbook wb = new HSSFWorkbook();

        HSSFSheet sheet = wb.createSheet("信息");

        HSSFRow row = null;

        row = sheet.createRow(0);//创建第一个单元格
        row.setHeight((short) (26.25 * 20));
        row.createCell(0).setCellValue("信息");//为第一行单元格设值

        /*为标题设计空间
         * firstRow从第1行开始
         * lastRow从第0行结束
         *
         *从第1个单元格开始
         * 从第3个单元格结束
         */
        CellRangeAddress rowRegion = new CellRangeAddress(0, 0, 0, 2);
        sheet.addMergedRegion(rowRegion);

      /*CellRangeAddress columnRegion = new CellRangeAddress(1,4,0,0);
      sheet.addMergedRegion(columnRegion);*/

        row = sheet.createRow(1);
        row.setHeight((short) (22.50 * 20));//设置行高

        row.createCell(0).setCellValue("日期");//为第三个单元格设值
        row.createCell(1).setCellValue("姓名");//为第二个单元格设值
        row.createCell(2).setCellValue("手机号");//为第三个单元格设值

        //遍历所获取的数据
        for (int i = 0; i < bgmExcelDownloads.size(); i++) {
            row = sheet.createRow(i + 2);
            Record bgm = bgmExcelDownloads.get(i);

            row.createCell(0).setCellValue(bgm.getCreateDate());
            row.createCell(1).setCellValue(bgm.getUserName());
            row.createCell(2).setCellValue(bgm.getPhone());

        }
        sheet.setDefaultRowHeight((short) (16.5 * 20));
        //列宽自适应
        for (int i = 0; i <= 13; i++) {
            sheet.autoSizeColumn(i);
        }
        response.setContentType("application/vnd.ms-excel;charset=utf-8");
        OutputStream os = response.getOutputStream();
        response.setHeader("Content-disposition", "attachment;filename=信息.xls");//默认Excel名称
        wb.write(os);
        os.flush();
        os.close();
    }

}
