package com.hroa.mid.hr.controller.jiaju;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;

import com.hroa.mid.hr.entity.Jiaju;
import com.hroa.mid.hr.entity.User;

import com.hroa.mid.hr.mapper.JiajuMapper;
import com.hroa.mid.hr.mapper.UserMapper;
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

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;


@Controller
@RequestMapping(value = "wt/jiaju/admin")
public class jiajuAdminController {


    @Autowired
    private UserMapper userMapper;
    @Autowired
    private JiajuMapper jiajuMapper;

    @RequestMapping(value = "login")
    public String login(User user, Model model){
        if(StringUtils.isNullBoolean(user.getPassword()) || StringUtils.isNullBoolean(user.getUserName())){
            model.addAttribute("msg","登陆失败,请输入账号密码");
            //验证账号
            return "jiaju/jiajuAdmin/login";
        }
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(user);
        if(userMapper.selectList(wrapper).size() > 0){
            model.addAttribute("id","1");
            return "redirect:/wt/jiaju/admin/index.html";
        }
        model.addAttribute("msg","登陆失败，账号或密码错误");
        //验证账号
        return "jiaju/jiajuAdmin/login";
    }

    @RequestMapping(value = "index.html")
    public String index(Model model){
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).orderByDesc("create_date");
        //获取数据
        model.addAttribute("recordList",jiajuMapper.selectList(wrapper));
        return "jiaju/jiajuAdmin/index";
    }


    @RequestMapping(value = "/jiajupoi", method = RequestMethod.GET)
    public void downloadsExcelDown(HttpServletResponse response) throws IOException {
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).orderByDesc("create_date");
        List<Jiaju> bgmExcelDownloads = jiajuMapper.selectList(wrapper);
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
        row.createCell(3).setCellValue("数据来源");//为第三个单元格设值
        //遍历所获取的数据
        for (int i = 0; i < bgmExcelDownloads.size(); i++) {
            row = sheet.createRow(i + 2);
            Jiaju bgm = bgmExcelDownloads.get(i);

            row.createCell(0).setCellValue(bgm.getCreateDate().toString());
            row.createCell(1).setCellValue(bgm.getName());
            row.createCell(2).setCellValue(bgm.getPhone());
            row.createCell(3).setCellValue("1".equals(bgm.getIsPc())?"电脑":"手机");
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
